import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_MAP = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastRequest = RATE_LIMIT_MAP.get(ip);

  if (lastRequest && now - lastRequest < RATE_LIMIT_WINDOW_MS) {
    return true;
  }

  RATE_LIMIT_MAP.set(ip, now);
  return false;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { email } = body as { email?: string };

  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const sanitizedEmail = email.trim().toLowerCase().slice(0, 254);

  try {
    await resend.emails.send({
      from: "Health Bean <hello@healthbean.io>",
      to: sanitizedEmail,
      subject: "You're on the list — Health Bean Early Access",
      html: `
        <div style="font-family: Georgia, serif; max-width: 480px; margin: 0 auto; color: #242e28;">
          <h1 style="font-size: 24px; font-weight: 700;">Welcome to Health Bean</h1>
          <p style="font-size: 16px; line-height: 1.7; color: #5A5040;">
            Thanks for signing up for early access. We're building intelligent platforms
            that help people understand their health — from chronic illness management
            to home environmental tracking.
          </p>
          <p style="font-size: 16px; line-height: 1.7; color: #5A5040;">
            We'll be in touch when we're ready for you.
          </p>
          <p style="font-size: 14px; color: #736354; margin-top: 32px;">
            — The Health Bean Team
          </p>
        </div>
      `,
    });

    // Also notify the team
    await resend.emails.send({
      from: "Health Bean <hello@healthbean.io>",
      to: "hello@healthbean.io",
      subject: `Early access signup: ${sanitizedEmail}`,
      html: `<p>New early access signup: <strong>${sanitizedEmail}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
