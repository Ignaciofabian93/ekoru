"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, Store, CircleDollarSign, Briefcase, BookText, Users, Home } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import Button from "../buttons/button";

const SideArticle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  className = clsx("w-full flex flex-col items-start justify-start", className);
  return <article className={className}>{children}</article>;
};

const SideLink = ({
  children,
  onClick,
  className,
  disabled = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}) => {
  className = clsx(
    "w-full h-[50px] flex items-center justify-start gap-4 cursor-pointer",
    { "text-disabled": disabled },
    className
  );
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

export default function Navbar() {
  const [isSideNavOpened, setIsSideNavOpened] = useState<boolean>(false);
  const router = useRouter();

  const brandClick = () => {
    router.push("/");
  };

  const handleSideNav = () => setIsSideNavOpened(!isSideNavOpened);

  return (
    <header className={clsx("w-full", "fixed top-0 left-0 z-[99]", "navbar-gradient shadow-sm shadow-primary")}>
      <nav
        className={clsx(
          "w-full h-[80px] max-w-[1600px] flex items-center justify-between px-4 md:px-8 gap-4 mx-auto",
          "text-white"
        )}
      >
        {/* LEFT SIDE - MENU & LOGO */}
        <div className="flex items-center justify-between">
          <Menu onClick={handleSideNav} className="cursor-pointer md:hidden text-primary" size={30} />
          <div
            className="hidden md:flex w-[140px] h-[90%] items-center justify-center cursor-pointer"
            onClick={brandClick}
          >
            <Image src={"/images/logo.png"} alt="Logo Ekoru" width={4096} height={996} />
          </div>
        </div>

        {/* RIGHT SIDE - USER & CART */}
        <div className="flex items-center justify-between"></div>
      </nav>

      {isSideNavOpened && (
        <div
          className="fixed w-full h-[calc(100%_-_80px)] top-[80px] inset-0 z-30 bg-black/30 bg-opacity-30"
          onClick={handleSideNav}
        />
      )}

      {/* SIDE NAVBAR / MOBILE */}
      <aside
        className={clsx(
          "fixed top-[80px] left-0 z-40",
          "w-[260px] h-[calc(100%_-_80px)]",
          "transition-all ease-in-out duration-300",
          "bg-white text-main",
          isSideNavOpened ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className={clsx("w-full h-full", "px-4 py-6", "flex flex-col items-start justify-between")}>
          <div className="flex items-center justify-center w-full h-1/12">
            <div className="w-[80%] flex items-center justify-center cursor-pointer" onClick={brandClick}>
              <Image src={"/images/logo.png"} alt="Logo Ekoru" width={4096} height={996} />
            </div>
          </div>

          <SideArticle className="h-7/12">
            <SideLink onClick={() => router.push("/feed")}>
              <Home />
              <p className="font-semibold">Inicio</p>
            </SideLink>
            <SideLink onClick={() => router.push("/market")}>
              <CircleDollarSign />
              <p className="font-semibold">Mercado</p>
            </SideLink>
            <SideLink onClick={() => router.push("/stores")}>
              <Store />
              <p className="font-semibold">Tiendas</p>
            </SideLink>
            <SideLink onClick={() => router.push("/services")} disabled>
              <Briefcase />
              <p className="font-semibold">Servicios</p>
            </SideLink>
            <SideLink onClick={() => router.push("/services")} disabled>
              <Users />
              <p className="font-semibold">Comunidad</p>
            </SideLink>
            <SideLink onClick={() => router.push("/services")} disabled>
              <BookText />
              <p className="font-semibold">Cultura</p>
            </SideLink>
          </SideArticle>

          <SideArticle className="h-1/12">
            <Button text="Ir a la App" onClick={() => {}} variant="primary" size="full" />
          </SideArticle>
        </div>
      </aside>
    </header>
  );
}
