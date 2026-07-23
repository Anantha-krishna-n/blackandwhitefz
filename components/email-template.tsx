import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    projectType: string;
    message: string;
}

export function EmailTemplate({ name, email, projectType, message }: EmailTemplateProps) {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '32px', backgroundColor: '#f9f9f9' }}>
            <div style={{ backgroundColor: '#131313', padding: '24px 32px', marginBottom: '24px' }}>
                <h1 style={{ color: '#ffffff', margin: 0, fontSize: '22px', fontWeight: 700, letterSpacing: '0.05em' }}>
                    New Inquiry Received
                </h1>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '32px', border: '1px solid #e5e5e5' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                        <tr>
                            <td style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0', color: '#888', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', width: '140px' }}>
                                Full Name
                            </td>
                            <td style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0', color: '#131313', fontSize: '15px', fontWeight: 600 }}>
                                {name}
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0', color: '#888', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                Email
                            </td>
                            <td style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0', color: '#131313', fontSize: '15px' }}>
                                <a href={`mailto:${email}`} style={{ color: '#131313' }}>{email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0', color: '#888', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                Project Type
                            </td>
                            <td style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0', color: '#131313', fontSize: '15px' }}>
                                {projectType}
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '16px 0', color: '#888', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', verticalAlign: 'top' }}>
                                Message
                            </td>
                            <td style={{ padding: '16px 0', color: '#131313', fontSize: '15px', lineHeight: '1.7' }}>
                                {message}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p style={{ marginTop: '24px', color: '#aaa', fontSize: '12px', textAlign: 'center' }}>
                This message was sent via the contact form on your website.
            </p>
        </div>
    );
}