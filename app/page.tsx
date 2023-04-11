import Home from "@/components/Home/Home";
import Navbar from "../components/navbar/navbar";
import About from "../components/About/about";

export default function page() {
  return (
  <div>
    <Navbar/>
    <Home/>
    <About/>
  </div>
    )
}
