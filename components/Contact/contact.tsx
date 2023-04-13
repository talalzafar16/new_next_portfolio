"use client";
import styles from "./services.module.css";

function contact() {
  return (
    <div className="px-5 py-4 flex flex-col gap-6 mt-20 items-center sm:px-8">
      <div className="border-2 flex sm:w-48 sm:p-2 justify-center items-center gap-3 border-SecondaryColor w-44 rounded-3xl p-1">
        <span className="text-white material-icons">mail</span>
        <h1 className="text-white font-bold text-center text-xl font-sans">
          CONTACT
        </h1>
      </div>
      <div className="self-start  mt-6">
        <h1 className="text-white sm:text-4xl font-Kurale text-3xl">Let&apos;s Work<span className="text-SecondaryColor"> Together!</span></h1>
        <h1 className="text-white font-bold font-Kurale text-xl mt-2 sm:text-2xl">talalzafar84@gmail.com</h1>
      </div>
      <div className="w-full mt-4 mmd:p-4 flex flex-col gap-6 md:flex-wrap md:flex-row md:justify-between md:flex">
        <div className="flex md:w-5/12 flex-col-reverse gap-1 font-Kurale">
        <input className="text-lg text-white input bg-transparent border-b-2 focus:border-b-SecondaryColor focus:border-b-3 border-b-white h-9 outline-0" placeholder="Enter Your Name"/>
        <label className=" text-white text-xl">Full Name</label>
        </div>
        <div className="flex md:w-5/12 flex-col-reverse gap-1 font-Kurale">
        <input className="text-lg text-white input bg-transparent border-b-2 focus:border-b-SecondaryColor focus:border-b-3 border-b-white h-9 outline-0" placeholder="Enter Your Email"/>
        <label className=" text-white text-xl">Email</label>
        </div>
        <div className="flex md:w-5/12 flex-col-reverse gap-1 font-Kurale">
        <input className="text-lg text-white input bg-transparent border-b-2 focus:border-b-SecondaryColor focus:border-b-3 border-b-white h-9 outline-0" placeholder="xxxx-xxxxxxx"/>
        <label className=" text-white text-xl">Contact</label>
        </div>
        <div className="flex md:w-5/12 flex-col-reverse gap-1 font-Kurale">
        <input className="text-lg text-white input bg-transparent border-b-2 focus:border-b-SecondaryColor focus:border-b-3 border-b-white h-9 outline-0" placeholder="Write Here..."/>
        <label className=" text-white text-xl">Subject</label>
        </div>
        <div className="flex w-full flex-col-reverse gap-1 font-Kurale">
        <textarea className="text-lg text-white input mt-2 bg-transparent border-b-2 focus:border-b-SecondaryColor focus:border-b-3 border-b-white h-12 outline-0" placeholder="Type here..."/>
        <label className=" text-white text-xl">Message</label>
        </div>
        <div className="flex mt-4 md:w-full justify-center items-center">
          <button className="group sm:w-56 sm:p-2  hover:border-3 hover:border-SecondaryColor hover:bg-transparent hover:text-SecondaryColor w-48 flex justify-center items-center gap-3 rounded-2xl bg-SecondaryColor h-10 font-bold text-2xl font-Kurale">
        <span className="  text-black material-icons group-hover:text-SecondaryColor">mail</span>Send</button>
        </div>
      </div>
    </div>
  );
}
export default contact;