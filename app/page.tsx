import Banner from "@/components/banner/banner";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import ScreenWrapper from "@/components/screen/screenWrapper";

const FirstBannerDescription = () => {
  return (
    <>
      <p>
        ¡Tu elección hace la diferencia! <strong>Reduce, reutiliza, impacta.</strong>
      </p>
    </>
  );
};

export default function Home() {
  return (
    <ScreenWrapper>
      <Hero />
      <Banner title="DALE UNA SEGUNDA VIDA" description={<FirstBannerDescription />} />
      <Footer />
    </ScreenWrapper>
  );
}
