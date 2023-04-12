import Image from "next/image";
import pic from "../../public/second.jpg";

export default function about() {
  return (
    <div className="px-5 py-4 flex flex-col gap-6 mt-20 items-center">
      <div className="border-2 flex justify-center items-center gap-3 border-SecondaryColor w-44 rounded-3xl p-1">
        <span className="text-white material-icons">person</span>
        <h1 className="text-white font-bold text-center text-xl font-sans">
          ABOUT
        </h1>
      </div>
      <div className="p-2">
        <Image src={pic} alt="profile" className="mt-6 h-96 rounded-2xl " />
      </div>
      <div>
        <p className="text-white font-Kurale text-justify">
        Hello! I&apos;m <span className="text-SecondaryColor">Talal Zafar</span>, a Pakistan-based <span className="text-SecondaryColor">MERN</span> Stack Developer of mobile and online applications. 
        My love is software development, and I am a sophomore studying software engineering at NED University. I have spent the last year developing my abilities, learning new technologies, and pursuing a future in software development.
        I have worked on a wide range of technologies, as you can see in my skill categories, and I am well-versed in OOPs, DBMS, DS, and Web Engineering concepts.
        I have the skills to assist you with establishing, designing, or maintaining your website or mobile application. With a sharp eye for detail and a dedication to producing high-quality work, I am convinced that I can assist you in taking your project to the next level.
        <br/>
        Let&apos;s work together to make your dreams come true.
        <br/>
        You may find my CV below.
        </p>
      </div>
      <div className="flex mt-3 justify-center items-center">
          <button className="group hover:border-3 hover:border-SecondaryColor hover:bg-transparent hover:text-SecondaryColor w-52 flex justify-center items-center gap-3 rounded-2xl bg-SecondaryColor h-10 font-bold text-2xl font-Kurale">
        <span className="  text-black material-icons group-hover:text-SecondaryColor">arrow_circle_down</span>Download CV</button>
        </div>
    </div>
  );
}
