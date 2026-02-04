"use client";
import { motion } from "motion/react";
import {
  Navbar,
  NavigationLinkProps,
  MobileNavigationLinkProps,
} from "@ekoru/ui";
import { useHeaderTranslations } from "./useHeaderTranslations";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { navigation, information, ids } = useHeaderTranslations();

  const navigationLinks: NavigationLinkProps[] = [
    { id: ids.whoWeAre, label: navigation.whoWeAre },
    { id: ids.features, label: navigation.features },
    { id: ids.missionVision, label: navigation.missionVision },
    { id: ids.team, label: navigation.team },
    { id: ids.contact, label: navigation.contact },
  ];

  const informationLinks: NavigationLinkProps[] = [
    {
      id: "faq",
      label: information.faq,
      isAnchor: true,
      href: "/privacy-policy",
    },
    {
      id: "privacy-policy",
      label: information.privacyPolicy,
      isAnchor: true,
      href: "/privacy-policy",
    },
    {
      id: "terms-of-service",
      label: information.termsOfService,
      isAnchor: true,
      href: "/terms-of-service",
    },
  ];

  const mobileNavItems: MobileNavigationLinkProps[] = [
    { title: navigation.title, links: navigationLinks },
    { title: information.title, links: informationLinks },
  ];

  const Brand = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex-shrink-0"
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/brand/logo.webp"
          alt="EKORU"
          width={100}
          height={50}
          className="h-full max-h-[50px] w-auto drop-shadow-lg"
        />
      </Link>
    </motion.div>
  );

  return (
    <Navbar
      searchEnabled={false}
      brand={<Brand />}
      navigationLinks={navigationLinks}
      mobileMenuNavigationLinks={mobileNavItems}
    />
  );
}
