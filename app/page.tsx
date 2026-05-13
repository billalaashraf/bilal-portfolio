import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import TechStrip from "./_components/TechStrip";
import OperationalSurface from "./_components/OperationalSurface";
import CaseStudies from "./_components/CaseStudies";
import Systems from "./_components/Systems";
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
        <OperationalSurface />
        <CaseStudies />
        <Systems />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
