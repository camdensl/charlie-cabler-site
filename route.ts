import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const d = await req.json().catch(() => null);
  if (!d || d.website) return NextResponse.json({ ok: true }); // honeypot
  const { name, email, message } = d;
  if (!name?.trim() || !/^\S+@\S+\.\S+$/.test(email ?? "") || !message?.trim())
    return NextResponse.json({ error: "Add your name, a valid email and a short message." }, { status: 400 });
  // TODO: send with Resend, Postmark or SES, e.g. await resend.emails.send({ ... })
  console.log("New quote request:", { name, email, phone: d.phone, service: d.service, message });
  return NextResponse.json({ ok: true });
}
