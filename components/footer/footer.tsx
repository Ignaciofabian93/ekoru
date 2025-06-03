import clsx from "clsx";
import Image from "next/image";
import {
  // FacebookIcon,
  InstagramIcon,
  // XIcon,
  // YouTubeIcon,
  LinkedinIcon,
} from "@/assets/icons";
import Link from "next/link";

const IconLink = ({ children, url }: { children: React.ReactNode; url: string }) => {
  return (
    <Link href={url} target="_blank">
      {children}
    </Link>
  );
};

const LawLink = ({ lawName, url }: { lawName: string; url: string }) => {
  return (
    <Link href={url} target="_blank">
      <p className="text-main text-sm font-semibold my-2 hover:text-primary transition-colors ease-in-out duration-300">
        {lawName}
      </p>
    </Link>
  );
};

export default function Footer() {
  return (
    <footer
      className={clsx("w-full footer-gradient px-4 py-8 mt-8 flex flex-col items-center justify-center text-main")}
    >
      <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/*  */}
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-lg font-semibold">Artículos y Leyes</p>
          <span className="text-base font-semibold block mb-2">Biblioteca del Congreso Nacional</span>
          <div className="max-h-60 overflow-y-auto">
            <LawLink url="https://www.bcn.cl/leychile/navegar?idNorma=30667" lawName="Ley Chile - Ley 19300" />
            <LawLink
              url="https://www.bcn.cl/leychile/navegar?idNorma=1010459&idVersion=2023-09-06&idParte=8848208"
              lawName="Ley Chile - Ley 20417"
            />
            <LawLink
              url="https://www.bcn.cl/leychile/navegar?idNorma=1090894&idParte=9705129&idVersion=2016-06-01"
              lawName="Ley Chile - Ley 20920"
            />
            <LawLink
              url="https://www.bcn.cl/leychile/navegar?idNorma=1177286&idParte=10341102&idVersion=2022-06-13"
              lawName="Ley Chile - Ley 21455"
            />
            <LawLink
              url="https://www.bcn.cl/leychile/navegar?idNorma=1121380&buscar=21100"
              lawName="Ley Chile - Ley 21100"
            />
            <LawLink
              url="https://www.bcn.cl/leychile/navegar?idNorma=1163603&idVersion=2024-08-12&idParte=10259809"
              lawName="Ley Chile - Ley 21368"
            />
          </div>
        </div>
        {/*  */}
        <div className="w-full flex flex-col items-center justify-center mb-8">
          <div className="w-[60%] flex items-center justify-center">
            <Image src={"/images/logo.png"} alt="logo Ekoru" width={4096} height={996} />
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">Contacto:</p>
          <Link href="mailto:contacto@ekoru.cl" className="text-base font-semibold mb-4 block">
            contacto@ekoru.cl
          </Link>
          <p className="text-main text-base font-semibold mb-2">Síguenos en nuestras redes sociales:</p>
          <div className="flex justify-center gap-4">
            {/* <IconLink url="">
              <FacebookIcon
                width={36}
                height={36}
                className="hover:scale-125 transition-transform ease-in-out duration-300"
              />
            </IconLink> */}
            <IconLink url="https://www.instagram.com/ekoru_chile?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <InstagramIcon
                width={36}
                height={36}
                className="hover:scale-125 transition-transform ease-in-out duration-300"
              />
            </IconLink>
            {/* <IconLink url="">
              <XIcon width={36} height={36} className="hover:scale-125 transition-transform ease-in-out duration-300" />
            </IconLink> */}
            {/* <IconLink url="">
              <YouTubeIcon
                width={36}
                height={36}
                className="hover:scale-125 transition-transform ease-in-out duration-300"
              />
            </IconLink> */}
            <IconLink url="https://www.linkedin.com/company/ekoru-chile/">
              <LinkedinIcon
                width={36}
                height={36}
                className="hover:scale-125 transition-transform ease-in-out duration-300"
              />
            </IconLink>
          </div>
        </div>
      </section>
      <nav className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-semibold text-main">
        <Link href="#about">Quiénes Somos</Link>
        <Link href="/privacy">Política de Privacidad</Link>
        <Link href="/terms">Términos y Condiciones</Link>
      </nav>
      <p className="text-main font-semibold mt-4">&copy; Ekoru {new Date().getFullYear()}</p>
    </footer>
  );
}
