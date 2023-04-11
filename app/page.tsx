import Home from "@/components/Home/Home";
import Navbar from "../components/navbar/navbar";
import About from "../components/About/about";
import Skills from "../components/Skills/skills";
import Services from "../components/Services/services";
import Portfolio from "../components/Portfolio/portfolio";
import Contact from "../components/Contact/contact";

export default function page() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services/>
      <Portfolio />
      <Contact/>
    </div>
  );
}
