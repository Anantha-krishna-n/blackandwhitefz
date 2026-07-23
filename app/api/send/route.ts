import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_EMAIL_API);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, projectType, message } = body;

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['faizan2502005@gmail.com'],
            subject: `New Inquiry from ${name} — ${projectType}`,
            react: EmailTemplate({ name, email, projectType, message }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }
}