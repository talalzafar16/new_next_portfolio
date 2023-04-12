import Image from "next/image";
import img1 from "../../public/portfolio1.jpg";
import img2 from "../../public/portfolio2.jpg";
import img3 from "../../public/portfolio3.jpg";
import img4 from "../../public/portfolio4.jpg";
import img5 from "../../public/portfolio5.jpg";
import styles from "./services.module.css";

export default function portfolio() {
  return (
    <div className="px-5 py-4 flex flex-col gap-6 mt-20 items-center">
      <div className="border-2 flex justify-center items-center gap-3 border-SecondaryColor w-44 rounded-3xl p-1">
        <span className="text-white material-icons">list_alt</span>
        <h1 className="text-white font-bold text-center text-xl font-sans">
          PORTFOLIO
        </h1>
      </div>
      <div className="self-start mt-6 font-Kurale text-white text-3xl">
        Featured <span className="text-SecondaryColor">Projects</span>.
      </div>
      <div className="w-full mt-4 flex flex-col gap-8">
        <div className="flex flex-col gap-4 justify-center items-center w-full group">
          <Image src={img1} alt="pic" className="group-hover:border-3 group-hover:border-SecondaryColor rounded-xl w-full" />
          <h3 className="group-hover:underline text-white font-Kurale text-xl self-start" >
          Bureau - Architecture Studio Website
            </h3>
        </div>
        <div className="flex flex-col gap-4  justify-center items-center w-full group">
          <Image src={img2} alt="pic" className="rounded-xl w-full group-hover:border-3 group-hover:border-SecondaryColor" />
          <h3 className="text-white font-Kurale text-xl text-left self-start group-hover:underline" >
            Moonex WordPress Theme
            </h3>
        </div>
        <div className="flex flex-col gap-4 mt-4 justify-center items-center w-full group">
          <Image src={img3} alt="pic" className="rounded-xl w-full group-hover:border-3 group-hover:border-SecondaryColor" />
          <h3 className="self-start text-white font-Kurale text-xl group-hover:underline" >
          Taskly Dashboard
            </h3>
        </div>
        <div className="flex flex-col gap-4 mt-4  justify-center items-center w-full group">
          <Image src={img4} alt="pic" className="rounded-xl w-full group-hover:border-3 group-hover:border-SecondaryColor" />
          <h3 className="text-white self-start font-Kurale text-xl group-hover:underline text-left" >
            Moonex WordPress Theme
            </h3>
        </div>
        <div className="flex flex-col gap-4 mt-4  justify-center items-center w-full group">
          <Image src={img5} alt="pic" className="rounded-xl w-full group-hover:border-3 group-hover:border-SecondaryColor" />
          <h3 className="text-white font-Kurale self-start text-xl group-hover:underline" >
            Moonex WordPress Theme
            </h3>
        </div>
       
      </div>
    </div>
  );
}
