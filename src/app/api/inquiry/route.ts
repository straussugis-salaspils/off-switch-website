import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // TODO: wire to email service (Resend, SendGrid, etc.) before launch
    // For now, log to console in development
    console.log("Institutional inquiry received:", body);

    // Placeholder: return success once email integration is wired
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
