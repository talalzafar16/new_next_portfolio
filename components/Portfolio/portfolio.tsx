import Image from "next/image";
import img1 from "../../assets/images/portfolio1.jpg";
import img2 from "../../assets/images/portfolio2.jpg";
import img3 from "../../assets/images/portfolio3.jpg";
import img4 from "../../assets/images/portfolio4.jpg";
import img5 from "../../assets/images/portfolio5.jpg";
import styles from "./services.module.css";

export default function portfolio() {
  return (
    <div id="Portfolio" className="px-5 py-4 flex flex-col gap-6 mt-20 items-center sm:px-8 md:px-11">
      <div className="border-3 xl:w-48 flex justify-center sm:w-48 sm:p-2 items-center gap-3 border-SecondaryColor w-44 rounded-3xl p-1">
        <span className="text-white material-icons">list_alt</span>
        <h1 className="text-white font-bold text-center xl:text-2xl text-xl font-sans">
          PORTFOLIO
        </h1>
      </div>
      <div className="self-start mt-6 sm:text-4xl xl:text-5xl  font-Kurale text-white text-3xl">
        Featured <span className="text-SecondaryColor">Projects</span>.
      </div>
      <div className="w-full mt-4 flex flex-col gap-8">
        <div className="flex flex-col gap-4 justify-center items-center w-full group">
          <Image src={img1} alt="pic" className="group-hover:border-3 group-hover:border-SecondaryColor rounded-xl w-full" />
          <h3 className="group-hover:underline text-white font-Kurale text-xl self-start lg:text-2xl" >
          Bureau - Architecture Studio Website
            </h3>
        </div>
        <div className="lg:flex lg:mt-4 lg:justify-between lg:gap-8 ">
        <div className="flex flex-col gap-4  justify-center items-center w-full group">
          <Image src={img2} alt="pic" className="rounded-xl w-full group-hover:border-3 group-hover:border-SecondaryColor " />
          <h3 className="lg:text-2xl text-white font-Kurale text-xl text-left self-start group-hover:underline" >
            Moonex WordPress Theme
            </h3>
        </div>
        <div className=" flex flex-col gap-4 mt-4 lg:mt-0 justify-center items-center w-full group">
          <Image src={img3} alt="pic" className="rounded-xl w-full group-hover:border-3 group-hover:border-SecondaryColor" />
          <h3 className="lg:text-2xl self-start text-white font-Kurale text-xl group-hover:underline" >
          Taskly Dashboard
            </h3>
        </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 lg:mt-0 justify-center items-center w-full group">
          <Image src={img4} alt="pic" className="rounded-xl w-full group-hover:border-3 group-hover:border-SecondaryColor" />
          <h3 className="lg:text-2xl text-white self-start font-Kurale text-xl group-hover:underline text-left" >
            Moonex WordPress Theme
            </h3>
        </div>
        <div className="flex flex-col gap-4 mt-4  justify-center items-center w-full group">
          <Image src={img5} alt="pic" className="rounded-xl w-full group-hover:border-3 group-hover:border-SecondaryColor" />
          <h3 className="lg:text-2xl text-white font-Kurale self-start text-xl group-hover:underline" >
            Moonex WordPress Theme
            </h3>
        </div>
       
      </div>
    </div>
  );
}
