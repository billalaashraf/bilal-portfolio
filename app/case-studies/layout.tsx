import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import "./case-studies.css";

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav prefix="/" />
      <main>{children}</main>
      <Footer prefix="/" />
    </>
  );
}
