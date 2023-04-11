import Home from "@/components/Home/Home";
import Navbar from "../components/navbar/navbar";
import About from "../components/About/about";
import Skills from "../components/Skills/skills";

export default function page() {
  return (
  <div>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
  </div>
    )
}
