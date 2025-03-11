import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  // Get the absolute path of the "public/prizes" folder
  const imagesDirectory = path.join(process.cwd(), 'public/prizes');

  // Read all image files in the folder
  const imageFiles = fs.readdirSync(imagesDirectory);

  // Format the response (remove file extensions for captions)
  const prizes = imageFiles.map((file) => ({
    src: `/prizes/${file}`,
    caption: file.replace(/\.[^/.]+$/, ''), // Removes file extension (e.g., "image.png" → "image")
  }));

  return NextResponse.json(prizes);
}
