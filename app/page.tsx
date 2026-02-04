import Contact from "@/ui/contact/contact";
import Footer from "@/ui/footer/footer";
import Functionalities from "@/ui/functionalities/functionalities";
import MissionAndVision from "@/ui/mission&vision/mission&vision";
import Team from "@/ui/team/team";
import ScrollProgress from "@/ui/scroll-progress/scroll-progress";
import Header from "./_ui/Header/Header";
import Hero from "./_ui/Hero/Hero";
import About from "./_ui/About/About";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Functionalities />
      <MissionAndVision />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
