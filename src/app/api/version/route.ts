import { NextResponse } from "next/server";

export async function GET() {
  try {
    const version = process.env.NEXT_PUBLIC_PACKAGE_VERSION || "unknown";
    return NextResponse.json({ version });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error version" }, { status: 500 });
  }
}
