import React from "react";
import Image from "next/image";

export interface SocialMediaLink {
  alt: string;
  src: string;
  href: string;
  aspectRatio: number;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    href: "",
    aspectRatio: 1,
    alt: "instagram",
    src: "/social-media-svgs/instagram.svg",
  },
  {
    href: "https://www.tiktok.com/@desertmambaproductions?_t=8nSUrrFGaMI&_r=1",
    aspectRatio: 36 / 40,
    alt: "tiktok",
    src: "/social-media-svgs/tiktok.svg",
  },
  {
    href: "https://x.com/desertmambap?t=pZMXi6YeCYF42DkTw7GevQ&s=08",
    aspectRatio: 1,
    alt: "twitter",
    src: "/social-media-svgs/twitter.svg",
  },
  {
    href: "https://www.facebook.com/desertmambaproductions",
    aspectRatio: 49 / 40,
    alt: "facebook",
    src: "/social-media-svgs/facebook.svg",
  },
  {
    href: "https://youtube.com/@dmp-luonation?feature=shared",
    aspectRatio: 58 / 40,
    alt: "youtube",
    src: "/social-media-svgs/youtube.svg",
  },
];

export default function SocialMediaLinks() {
  return (
    <>
      {socialMediaLinks.map((link, index) => (
        <a
          title={link.alt}
          key={index}
          className="dark:hover:text-blue-300 text-gray-300"
          href={link.href}
        >
          <Image
            height={24}
            width={24 * link.aspectRatio}
            src={link.src}
            alt={link.alt}
          />
        </a>
      ))}
    </>
  );
}
