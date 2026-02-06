"use client";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@ekoru/ui";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function EkoruFooter() {
  const logo = "/brand/logo.webp";

  const exploreLinks = [
    { label: "Inicio", href: "/" },
    { label: "Acerca de", href: "/#about" },
    { label: "Funcionalidades", href: "/#functionalities" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/ekoruapp",
      icon: Facebook,
    },
    { label: "Twitter", href: "https://twitter.com/ekoruapp", icon: Linkedin },
    {
      label: "Instagram",
      href: "https://www.instagram.com/ekoruapp/",
      icon: Instagram,
    },
  ];

  const legalLinks = [
    { label: "Términos de Servicio", href: "/terms" },
    { label: "Política de Privacidad", href: "/privacy" },
  ];

  const communityLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Foro", href: "/forum" },
    { label: "Eventos", href: "/events" },
  ];

  return (
    <Footer
      brand={<Image src={logo} alt="Ekoru Logo" width={100} height={50} />}
      exploreLabel="Descubre más"
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
      legalLabel="Legal"
      legalItems={legalLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
      description="EKORU, plataforma circular"
      communityLabel="Comunidad"
      communityItems={communityLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    />
  );
}
