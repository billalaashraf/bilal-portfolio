import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import TechStrip from "./_components/TechStrip";
import CaseStudies from "./_components/CaseStudies";
import Systems from "./_components/Systems";
import Metrics from "./_components/Metrics";
import Process from "./_components/Process";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TechStrip />
        <CaseStudies />
        <Systems />
        <Metrics />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
