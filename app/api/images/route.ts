import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const directoryPath = path.join(process.cwd(), "public/slider");
  try {
    const files = fs.readdirSync(directoryPath);
    const images = files.filter((file) => /\.(jpg|jpeg|png|gif)$/.test(file));
    return NextResponse.json(images);
  } catch {
    return NextResponse.json(
      { error: "Failed to read directory" },
      { status: 500 },
    );
  }
}
