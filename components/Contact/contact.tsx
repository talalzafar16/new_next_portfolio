"use client";
import styles from "./services.module.css";

function contact() {
  return (
    <div className="px-5 py-4 flex flex-col gap-6 mt-20 items-center">
      <div className="border-2 flex justify-center items-center gap-3 border-SecondaryColor w-44 rounded-3xl p-1">
        <span className="text-white material-icons">mail</span>
        <h1 className="text-white font-bold text-center text-xl font-sans">
          CONTACT
        </h1>
      </div>
      <div className="w-full mt-10 flex flex-col gap-6">
        <div className="flex flex-col-reverse gap-1 font-Kurale">
        <input className="text-lg text-white input bg-transparent border-b-2 focus:border-b-SecondaryColor focus:border-b-3 border-b-white h-9 outline-0" placeholder="Enter Your Name"/>
        <label className=" text-white text-xl">Full Name</label>
        </div>
        <div className="flex flex-col-reverse gap-1 font-Kurale">
        <input className="text-lg text-white input bg-transparent border-b-2 focus:border-b-SecondaryColor focus:border-b-3 border-b-white h-9 outline-0" placeholder="Enter Your Email"/>
        <label className=" text-white text-xl">Email</label>
        </div>
        <div className="flex flex-col-reverse gap-1 font-Kurale">
        <input className="text-lg text-white input bg-transparent border-b-2 focus:border-b-SecondaryColor focus:border-b-3 border-b-white h-9 outline-0" placeholder="xxxx-xxxxxxx"/>
        <label className=" text-white text-xl">Contact</label>
        </div>
        <div className="flex flex-col-reverse gap-1 font-Kurale">
        <input className="text-lg text-white input bg-transparent border-b-2 focus:border-b-SecondaryColor focus:border-b-3 border-b-white h-9 outline-0" placeholder="Write Here..."/>
        <label className=" text-white text-xl">Subject</label>
        </div>
        <div className="flex flex-col-reverse gap-1 font-Kurale">
        <input className="text-lg text-white input bg-transparent border-b-2 focus:border-b-SecondaryColor focus:border-b-3 border-b-white h-9 outline-0" placeholder="Type here..."/>
        <label className=" text-white text-xl">Message</label>
        </div>
      </div>
    </div>
  );
}
export default contact;