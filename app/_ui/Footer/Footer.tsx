"use client";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@ekoru/ui";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useFooterTranslations } from "./useFooterTranslations";

export default function EkoruFooter() {
  const { description, explore, community, legal, social } =
    useFooterTranslations();
  const logo = "/brand/logo.webp";

  const exploreLinks = [
    { label: explore.links.home, href: "/" },
    { label: explore.links.about, href: "/#about" },
    { label: explore.links.features, href: "/#functionalities" },
  ];

  const socialLinks = [
    {
      label: social.facebook,
      href: "https://www.facebook.com/ekoruapp",
      icon: Facebook,
    },
    {
      label: social.twitter,
      href: "https://twitter.com/ekoruapp",
      icon: Linkedin,
    },
    {
      label: social.instagram,
      href: "https://www.instagram.com/ekoruapp/",
      icon: Instagram,
    },
  ];

  const legalLinks = [
    { label: legal.links.terms, href: "/terms" },
    { label: legal.links.privacy, href: "/privacy" },
  ];

  const communityLinks = [
    { label: community.links.blog, href: "/blog" },
    { label: community.links.forum, href: "/forum" },
    { label: community.links.events, href: "/events" },
  ];

  return (
    <Footer
      brand={<Image src={logo} alt="Ekoru Logo" width={100} height={50} />}
      exploreLabel={explore.title}
      exploreItems={exploreLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
      socialLinks={socialLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <link.icon size={20} />
          <span className="sr-only">{link.label}</span>
        </Link>
      ))}
      legalLabel={legal.title}
      legalItems={legalLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
      description={description}
      communityLabel={community.title}
      communityItems={communityLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    />
  );
}
