'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Art Installation',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', projectType: 'Art Installation', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* Headline */}
      <section className="mb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-section-gap">
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-background max-w-4xl">
          Let's Collaborate
        </h1>
      </section>

      {/* Split Layout Content */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Left Side: Contact Info */}
        <div className="md:col-span-5 flex flex-col gap-12 border-l-0 sm:border-l border-outline-variant/30 pl-0 sm:pl-gutter">
          <div>
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Studio Address</h3>
            <p className="font-body-lg text-body-lg text-on-background">
              124 Minimalist Ave.<br/>
              Gallery District<br/>
              New York, NY 10001
            </p>
          </div>
          <div>
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Direct Inquiries</h3>
            <p className="font-body-lg text-body-lg text-on-background">
              +1 (555) 019-8273<br/>
              info@studio-art.com
            </p>
          </div>
          <div>
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Social</h3>
            <ul className="font-body-lg text-body-lg text-on-background space-y-2">
              <li><a className="hover:text-primary transition-colors" href="#">Instagram</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Behance</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:col-span-7 bg-surface-container p-gutter md:p-margin-desktop border border-outline-variant/20">
          <form onSubmit={handleSubmit} className="space-y-12 mt-8">
            <div className="input-group">
              <label className="input-label" htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                placeholder="Jane Doe"
                required
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                placeholder="jane@example.com"
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="project-type">Project Type</label>
              <select
                id="project-type"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
              >
                <option value="Art Installation">Art Installation</option>
                <option value="Exhibition Booth">Exhibition Booth</option>
                <option value="Spatial Design">Spatial Design</option>
                <option value="Other Inquiry">Other Inquiry</option>
              </select>
            </div>

            <div className="input-group mt-16">
              <label className="input-label" htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your vision..."
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                className="btn-outline w-full md:w-auto text-center disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </div>

            {status === 'success' && (
              <p className="text-sm text-green-400 mt-2">
                ✓ Your inquiry has been sent successfully. We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400 mt-2">
                ✕ Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Map / Visual Area */}
      <section className="contact-map w-full aspect-[21/9] bg-surface-container-low border border-outline-variant/20 relative overflow-hidden">
        <div
          className="bg-cover bg-center w-full h-full opacity-60 mix-blend-luminosity hover:opacity-100 transition-opacity duration-700"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFeF4YdM6eomsIJ_uVEURgADI0xgrRaQPM9Q2c9eSlXEmKesDnkwLWtHcUslglaQiP47H2NbGWdkdzXgqpp7HVJkwPd5SxI7WIs42rPxedT-SGFh0kruhVhr8M7L1BSG7DOrrmstsopA-BIEkSxTvCXGcQSV-ZDnjqtZNSNUwrXtWKy9COtzLbNZiUjg4ybIITUwjczD9gULhVofiJbIBQAknYe6_AexXr1v3eum3kfqw_trXbjzE')" }}
        ></div>

        {/* Minimalist overlay text or map marker could go here */}
        <div className="absolute bottom-gutter left-gutter p-4 bg-background/90 backdrop-blur-md border border-outline-variant/30">
          <span className="font-label-caps text-label-caps text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            New York Studio
          </span>
        </div>
      </section>
    </>
  );
}
