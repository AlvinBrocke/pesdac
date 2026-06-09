import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Dev fallback — no email service configured yet
    console.log("[Newsletter] New signup:", email);
    return NextResponse.json({ success: true });
  }

  // Forward signup notification to the church inbox via Resend
  // To switch to Mailchimp, replace the fetch below with:
  //   await fetch(`https://us1.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
  //     method: "POST",
  //     headers: { Authorization: `apikey ${MAILCHIMP_API_KEY}`, "Content-Type": "application/json" },
  //     body: JSON.stringify({ email_address: email, status: "subscribed" }),
  //   });
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "PESDAC Website <noreply@pesdacgh.org>",
      to: ["info@pesdacgh.org"],
      subject: `[Newsletter] New signup: ${email}`,
      text: `A new visitor has subscribed to the PESDAC newsletter.\n\nEmail: ${email}\n\nPlease add this address to your mailing list.`,
    }),
  });

  if (!res.ok) {
    console.error("[Newsletter] Resend error:", await res.text());
    return NextResponse.json({ error: "Failed to save your subscription. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
