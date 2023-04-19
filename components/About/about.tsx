import Image from "next/image";
import pic from "../../assets/images/second.jpg";

export default function about() {
  return (
    <div id="About" className="px-5 md:px-11 sm:px-8 py-4 flex flex-col md:items-center gap-6 mt-20 items-center ">
      <div className="border-3 xl:w-48 flex justify-center items-center gap-3 border-SecondaryColor w-44 sm:w-48 sm:p-2 rounded-3xl p-1">
        <span className="text-white material-icons">person</span>
        <h1 className="text-white font-bold text-center xl:text-2xl text-xl font-sans">
          ABOUT
        </h1>
      </div>
      <div className="lg:gap-12 md:flex md:justify-center md:items-start lg:items-center md:flex-row md:gap-6 md:mt-4">
      <div className="p-2 md:p-0">
        <Image src={pic} alt="profile" className="h-full rounded-2xl " />
      </div>
      <div className="md:flex md:flex-col md:justify-center items-center">
      <div>
        <p className="lg:text-xl mt-6 md:mt-0 text-white font-Kurale text-justify md:text-lg sm:text-lg">
        Hello! I&apos;m <span className="text-SecondaryColor">Talal Zafar</span>, a Pakistan-based <span className="text-SecondaryColor">MERN</span> Stack Developer of mobile and online applications. 
        My love is software development, and I am a sophomore studying software engineering at <span className="text-SecondaryColor">NED University.</span> I have spent the last year developing my abilities, learning new technologies, and pursuing a future in <span className="text-SecondaryColor">software development.</span>
        I have worked on a wide range of technologies, as you can see in my skill categories, and I am well-versed in <span className="text-SecondaryColor">OOPs, DBMS, DS, and Web Engineering</span> concepts.
        I have the skills to assist you with establishing, designing, or maintaining your website or mobile application. With a sharp eye for detail and a dedication to producing high-quality work, I am convinced that I can assist you in taking your project to the next level.
        <br/>
        Let&apos;swork <span className="text-SecondaryColor">together</span> to make your dreams come true.
        <br/>
        You may find my <span className="text-SecondaryColor">CV</span> below.
        </p>
      </div>
      <div className="flex mt-8 justify-center items-center lg:justify-start lg:items-start">
          <a href="/new.pdf" target="_blank">
          <button className="group xl:w-60 xl:h-12 xl:text-3xl hover:border-3 hover:border-SecondaryColor hover:bg-transparent hover:text-SecondaryColor w-52 sm:w-56 sm:p-2 flex justify-center items-center gap-3 rounded-2xl bg-SecondaryColor h-10 font-bold text-2xl font-Kurale">
        <span className="  text-black material-icons group-hover:text-SecondaryColor">arrow_circle_down</span>Download CV</button>
          </a>
        </div>
        </div>
        </div>
    </div>
  );
}
