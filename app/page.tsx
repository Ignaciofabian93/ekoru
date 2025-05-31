import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import ScreenWrapper from "@/components/screen/screenWrapper";
import InfoSection from "@/components/section/section";
import Image from "next/image";

export default function Home() {
  return (
    <ScreenWrapper>
      <Hero />
      <InfoSection id="#ekoru">
        <div className="w-full h-full flex flex-col justify-center gap-4">
          <div className="flex items-center justify-start w-[50%] mb-6">
            <Image src={"/images/logo.png"} alt="Logo Ekoru" width={4096} height={996} />
          </div>
          <p className="">
            <strong>EKORU no nació de una idea brillante, nació de una incomodidad real.</strong> Y de la convicción de
            que sí hay otra forma de vivir. Basta de tanto consumo, tanto desecho, tanta desconexión.
          </p>
          <p>
            No estamos aquí para venderte cosas, estamos para ayudarte a
            <strong>soltar, intercambiar y dar segundas vidas.</strong>
            Porque lo que ya no usas, puede inspirar una nueva historia.
          </p>
          <p>
            <strong>EKORU es una comunidad</strong> que no espera que el mundo cambie… lo cambia. No somos perfectos, y
            no nos interesa serlo, pero cada persona que se suma enciende una chispa. Y juntas,
            <strong>encendemos el futuro.</strong>
          </p>
        </div>
      </InfoSection>
      <InfoSection id="#mission">
        <div className="w-full h-full flex flex-col justify-center gap-4">
          <div className="flex items-center justify-start w-[50%] mb-6">
            <Image src={"/images/logo.png"} alt="Logo Ekoru" width={4096} height={996} />
          </div>
          <p className="">
            <strong>EKORU no nació de una idea brillante, nació de una incomodidad real.</strong> Y de la convicción de
            que sí hay otra forma de vivir. Basta de tanto consumo, tanto desecho, tanta desconexión.
          </p>
          <p>
            No estamos aquí para venderte cosas, estamos para ayudarte a
            <strong>soltar, intercambiar y dar segundas vidas.</strong>
            Porque lo que ya no usas, puede inspirar una nueva historia.
          </p>
          <p>
            <strong>EKORU es una comunidad</strong> que no espera que el mundo cambie… lo cambia. No somos perfectos, y
            no nos interesa serlo, pero cada persona que se suma enciende una chispa. Y juntas,
            <strong>encendemos el futuro.</strong>
          </p>
        </div>
      </InfoSection>
      <InfoSection id="#vision">
        <div className="w-full h-full flex flex-col justify-center gap-4">
          <div className="flex items-center justify-start w-[50%] mb-6">
            <Image src={"/images/logo.png"} alt="Logo Ekoru" width={4096} height={996} />
          </div>
          <p className="">
            <strong>EKORU no nació de una idea brillante, nació de una incomodidad real.</strong> Y de la convicción de
            que sí hay otra forma de vivir. Basta de tanto consumo, tanto desecho, tanta desconexión.
          </p>
          <p>
            No estamos aquí para venderte cosas, estamos para ayudarte a
            <strong>soltar, intercambiar y dar segundas vidas.</strong>
            Porque lo que ya no usas, puede inspirar una nueva historia.
          </p>
          <p>
            <strong>EKORU es una comunidad</strong> que no espera que el mundo cambie… lo cambia. No somos perfectos, y
            no nos interesa serlo, pero cada persona que se suma enciende una chispa. Y juntas,
            <strong>encendemos el futuro.</strong>
          </p>
        </div>
      </InfoSection>
      <InfoSection id="#values">
        <div className="w-full h-full flex flex-col justify-center gap-4">
          <div className="flex items-center justify-start w-[50%] mb-6">
            <Image src={"/images/logo.png"} alt="Logo Ekoru" width={4096} height={996} />
          </div>
          <p className="">
            <strong>EKORU no nació de una idea brillante, nació de una incomodidad real.</strong> Y de la convicción de
            que sí hay otra forma de vivir. Basta de tanto consumo, tanto desecho, tanta desconexión.
          </p>
          <p>
            No estamos aquí para venderte cosas, estamos para ayudarte a
            <strong>soltar, intercambiar y dar segundas vidas.</strong>
            Porque lo que ya no usas, puede inspirar una nueva historia.
          </p>
          <p>
            <strong>EKORU es una comunidad</strong> que no espera que el mundo cambie… lo cambia. No somos perfectos, y
            no nos interesa serlo, pero cada persona que se suma enciende una chispa. Y juntas,
            <strong>encendemos el futuro.</strong>
          </p>
        </div>
      </InfoSection>
      <Footer />
    </ScreenWrapper>
  );
}
