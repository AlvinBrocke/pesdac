import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, phone, subject, message } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Development fallback — log and return success
    console.log("[Contact Form]", { name, email, phone, subject, message });
    return NextResponse.json({ success: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "PESDAC Contact Form <noreply@pesdacgh.org>",
      to: ["info@pesdacgh.org"],
      reply_to: email,
      subject: `[Contact] ${subject || "General Inquiry"} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Subject: ${subject || "General Inquiry"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("[Contact API] Resend error", await res.text());
    return NextResponse.json(
      { error: "Failed to send your message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
