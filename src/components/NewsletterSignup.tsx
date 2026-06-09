"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const email = (new FormData(e.currentTarget).get("email") as string) ?? "";

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({})) as Record<string, string>;
        throw new Error(json.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to subscribe. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="newsletter-success" role="status">
        <i className="ti ti-circle-check" aria-hidden="true" />
        <span>You&apos;re on the list!</span>
      </div>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
      <div className="newsletter-field">
        <label htmlFor="nl-email" className="sr-only">
          Email address
        </label>
        <input
          id="nl-email"
          name="email"
          type="email"
          placeholder="Your email address"
          required
          className="newsletter-input"
          autoComplete="email"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          className="newsletter-btn"
          disabled={status === "loading"}
          aria-label="Subscribe to newsletter"
        >
          {status === "loading" ? (
            <i className="ti ti-loader-2 form-spinner" aria-hidden="true" />
          ) : (
            <i className="ti ti-send" aria-hidden="true" />
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="newsletter-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
