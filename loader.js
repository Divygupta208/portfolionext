"use client";

export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith("https://images.pexels.com")) return src;
  return `https://portfolionext-sable.vercel.app/${src}?${width}&q=${
    quality || 75
  }`;
}
