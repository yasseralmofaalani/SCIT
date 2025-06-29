import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CoreValues from "@/components/CoreValues";
import Team from "@/components/Team";
import CMMI from "@/components/CMMI";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ibm-white">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <CoreValues />
      <Team />
      <CMMI />
      <Contact />
      <Footer />
    </div>
  );
}
