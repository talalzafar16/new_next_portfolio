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
      <div className="w-full mt-10 flex flex-col gap-4">
        <div className="flex flex-col gap-4 justify-center items-center w-full h-52">
          <Image src={img1} alt="pic" className="hover:border-2 hover:border-SecondaryColor rounded-xl w-full" />
          <h3 className="text-white font-Kurale text-xl self-start" >
          Bureau - Architecture Studio Website
            </h3>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center w-full h-52">
          <Image src={img2} alt="pic" className="rounded-xl w-full" />
          <h3 className="text-white font-Kurale text-xl text-left self-start" >
            Moonex WordPress Theme
            </h3>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center w-full h-52">
          <Image src={img3} alt="pic" className="rounded-xl w-full" />
          <h3 className="self-start text-white font-Kurale text-xl" >
          Taskly Dashboard
            </h3>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center w-full h-52 ">
          <Image src={img4} alt="pic" className="rounded-xl w-full" />
          <h3 className="text-white self-start font-Kurale text-xl text-left" >
            Moonex WordPress Theme
            </h3>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center w-full h-52 ">
          <Image src={img5} alt="pic" className="rounded-xl w-full" />
          <h3 className="text-white font-Kurale self-start text-xl" >
            Moonex WordPress Theme
            </h3>
        </div>
       
      </div>
    </div>
  );
}
