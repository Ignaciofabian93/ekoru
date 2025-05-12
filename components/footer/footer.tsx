import logo from "@/assets/logo.png";
import clsx from "clsx";
import Image from "next/image";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className={clsx(
        "w-full min-h-fit h-full max-h-[400px]",
        "p-4",
        "flex flex-wrap items-center justify-evenly",
        "footer-gradient"
      )}
    >
      <section className="w-full h-full flex items-center justify-evenly">
        <div className={clsx("w-1/3", "flex flex-col items-center justify-center")}>
          <p>Leyes ambientales</p>
          <p>Leyes de reciclaje y residuos</p>
        </div>
        <div className={clsx("w-1/3", "flex flex-col items-center justify-center")}>
          <Image src={logo} alt="logo ekoru" width={400} className="w-full h-auto" />
        </div>
        <div className={clsx("w-1/3", "flex flex-col items-center justify-center")}>
          <p>Síguenos en redes sociales</p>
          <div className="flex items-center">
            <Instagram />
            <Facebook />
            <Linkedin />
          </div>
        </div>
      </section>
      <p className="w-full flex items-center justify-center">&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
