import Header from "./_ui/Header/Header";
import Hero from "./_ui/Hero/Hero";
import About from "./_ui/About/About";
import ScrollProgress from "./_ui/ScrollProgress/ScrollProgress";
import Features from "./_ui/Features/Features";
import EkoruFooter from "./_ui/Footer/Footer";
import Contact from "./_ui/Contact/Contact";
import MissionAndVision from "./_ui/MissionAndVission/MissionAndVision";
import Team from "./_ui/Team/Team";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Features />
      <MissionAndVision />
      <Team />
      <Contact />
      <EkoruFooter />
    </main>
  );
}
