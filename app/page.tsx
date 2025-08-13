import About from "@/ui/about/about";
import Contact from "@/ui/contact/contact";
import Footer from "@/ui/footer/footer";
import Functionalities from "@/ui/functionalities/functionalities";
import Hero from "@/ui/hero/hero";
import MissionAndVision from "@/ui/mission&vision/mission&vision";
import Navbar from "@/ui/navigation/navbar";
import Team from "@/ui/team/team";

export default function Home() {
  return (
    <main>
      <Navbar />
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
