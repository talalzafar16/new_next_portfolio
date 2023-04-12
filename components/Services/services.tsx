import Image from "next/image";
import pic from "../../public/second.jpg";
import styles from "./services.module.css";

export default function services() {
  return (
    <div className="px-5 py-4 flex flex-col gap-6 mt-20 items-center">
      <div className="border-2 flex justify-center items-center gap-3 border-SecondaryColor w-44 rounded-3xl p-1">
        <span className="text-white material-icons">design_services</span>
        <h1 className="text-white font-bold text-center text-2xl font-sans">
          SERVICES
        </h1>
      </div>
      <h1 className="text-white font-Kurale text-3xl self-start mt-6">My<span className="text-SecondaryColor"> Specializations</span> here.</h1>
      <div className="w-full mt-4">
        <div className="flex group hover:border-3 hover:border-SecondaryColor justify-center items-center border-2 w-full h-52 rounded-2xl p-4">
          <div className="text-white flex flex-col items-start">
            <h1 className="font-Kurale z-20 text-xl font-bold mb-4">
              Website Development
            </h1>
            <p className="font-Kurale text-sm text-slate-200 mb-3">
              I build fully responsive and properly functional websites usnig
              latest technologies.
            </p>
            <h2 className="font-Kurale font-base font-bold group-hover:underline group-hover:underline-offset-2">10+ Projects</h2>
          </div>
          <span
            style={{ fontSize: "49px" }}
            className="z-10 text-SecondaryColor material-icons"
          >
            code_off
          </span>
        </div>
        <div className="flex justify-center group items-center hover:border-3  hover:border-SecondaryColor border-2 w-full h-52 rounded-2xl p-4 mt-10">
          <div className="text-white flex flex-col items-start">
            <h1 className="font-Kurale z-20 text-xl font-bold mb-4">
              App Development
            </h1>
            <p className="font-Kurale text-sm text-slate-200 mb-3">
              I build fully operational and hybrid appliactions utilizing react
              native.
            </p>
            <h2 className="group-hover:underline font-Kurale font-base font-bold group-hover:underline-offset-2">6+ Projects</h2>
          </div>
          <span
            style={{ fontSize: "49px" }}
            className="z-10 text-SecondaryColor material-icons"
          >
            developer_mode
          </span>
        </div>
      </div>
    </div>
  );
}
