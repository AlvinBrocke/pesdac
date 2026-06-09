"use client";

import { FormEvent, useRef, useState } from "react";

const SUBJECTS = [
  "General Inquiry",
  "Prayer Request",
  "Membership Information",
  "Planning a Visit",
  "Ministries & Events",
  "Other",
] as const;

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({})) as Record<string, string>;
        throw new Error(json.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Failed to send. Please email us directly at info@pesdacgh.org."
      );
    }
  }

  return (
    <div className="contact-form-card">
      <h2 className="contact-form-title">Send us a message</h2>
      <p className="contact-form-sub">
        Fill in the form below and we will get back to you within 1–2 business days.
      </p>

      {status === "success" ? (
        <div className="form-feedback form-feedback-success" role="status">
          <i className="ti ti-circle-check" aria-hidden="true" />
          <div>
            <strong>Message sent!</strong>
            <span>Thank you for reaching out. We&apos;ll be in touch soon.</span>
          </div>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="cf-name" className="form-label">
                Full Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Your full name"
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cf-email" className="form-label">
                Email Address <span aria-hidden="true">*</span>
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                className="form-input"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cf-phone" className="form-label">
                Phone Number <span className="form-label-optional">(optional)</span>
              </label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                className="form-input"
                placeholder="+233 XX XXX XXXX"
                autoComplete="tel"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cf-subject" className="form-label">
                Subject
              </label>
              <select id="cf-subject" name="subject" className="form-select">
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="cf-message" className="form-label">
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="cf-message"
                name="message"
                className="form-textarea"
                placeholder="How can we help you?"
                required
                rows={6}
              />
            </div>
          </div>

          {status === "error" && (
            <div className="form-feedback form-feedback-error" role="alert">
              <i className="ti ti-alert-circle" aria-hidden="true" />
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            className="form-submit-btn"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <i className="ti ti-loader-2 form-spinner" aria-hidden="true" />
                Sending…
              </>
            ) : (
              <>
                <i className="ti ti-send" aria-hidden="true" />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
