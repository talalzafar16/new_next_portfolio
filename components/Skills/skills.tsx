import Image from "next/image";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import javascript from "../../assets/images/javascript.png";
import typescript from "../../assets/images/typscript.png";
import react from "../../assets/images/react.png";
import native from "../../assets/images/native.png";
import next from "../../assets/images/next.png";
import firebase from "../../assets/images/firebase.png";
import node from "../../assets/images/node.png";
import tailwind from "../../assets/images/tailwind.svg";
import mongo from "../../assets/images/mongo.png";
import C from "../../assets/images/C++.png";
import python from "../../assets/images/python.png";
import styles from "./skills.module.css";

export default function skills() {
  return (
    <div id="Skills" className="z-0 px-5 py-4 flex flex-col gap-6 mt-20  items-center sm:px-8">
      <div className="border-3 xl:w-48 flex justify-center sm:w-48 sm:p-2 items-center gap-3 border-SecondaryColor w-44 rounded-3xl p-1">
        <span className="text-white material-icons">psychology</span>
        <h1 className="text-white xl:text-2xl font-bold text-center text-xl font-sans">
          SKILLS
        </h1>
      </div>
      <div className="flex mt-10 flex-wrap justify-around items-center flex-grow gap-x-6 gap-y-10">
        <div
          className={`${styles.html} h-40 hover:border-4 hover:border-t-0 border-2 w-2/5 sm:w-40 p-4 flex flex-col justify-center items-center  rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-orange-400`}
        >
          <Image src={html} alt="html" className="w-32 sm:w-28" />
          <h1 className="text-white text-center text-xl font-Kurale">Html</h1>
        </div>
        <div
          className={`${styles.css} h-40 border-2 w-2/5 hover:border-4 hover:border-t-0 p-4 rounded-lg flex flex-col justify-center items-center sm:w-40 rounded-t-none border-t-0 drop-shadow-2xl border-blue-500`}
        >
          <Image src={css} alt="css" className="w-32 sm:w-28" />
          <h1 className="text-white text-center text-xl font-Kurale">CSS</h1>
        </div>
        <div
          className={`${styles.js} h-40 border-2 w-2/5 p-4 sm:w-40 flex flex-col justify-center hover:border-4 hover:border-t-0 items-center  rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-yellow-300`}
        >
          <Image src={javascript} alt="JavaScript" className="w-32 sm:w-28" />
          <h1 className="text-white text-center text-xl font-Kurale">
            JavaScript
          </h1>
        </div>
        <div
          className={`${styles.ts} border-2 h-40 w-2/5 sm:w-40 p-4 rounded-lg rounded-t-none border-t-0 flex flex-col hover:border-4 hover:border-t-0 justify-center items-center  drop-shadow-2xl border-blue-400`}
        >
          <Image src={typescript} alt="TypeScript" className="w-32 sm:w-28" />
          <h1 className="text-white text-center text-xl font-Kurale">
            TypeScript
          </h1>
        </div>
        <div
          className={`${styles.react} border-2 h-40 w-2/5 p-4 sm:w-40 flex flex-col justify-center items-center  rounded-lg hover:border-4 hover:border-t-0 rounded-t-none border-t-0 drop-shadow-2xl border-cyan-400`}
        >
          <Image src={react} alt="react" className="w-32 sm:w-28" />
          <h1 className="text-white text-center text-xl font-Kurale">React</h1>
        </div>
        <div
          className={`${styles.next} h-40 border-2 w-2/5 sm:w-40 flex flex-col justify-center items-center hover:border-4 hover:border-t-0 p-4 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border--400`}
        >
          <Image src={next} alt="next" className="w-32 rounded-full sm:w-28" />
          <h1 className="text-white text-center text-xl font-Kurale">Next</h1>
        </div>
        <div
          className={`${styles.node} h-40 border-2 w-2/5 p-4 sm:w-40 flex flex-col justify-center items-center hover:border-4 hover:border-t-0  rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-green-600`}
        >
          <Image src={node} alt="node" className="w-32 sm:w-28" />
          <h1 className="text-white text-center text-xl font-Kurale">
            Node.Js
          </h1>
        </div>
        <div
          className={`${styles.fire} h-40 border-2 w-2/5 p-4 sm:w-40 flex flex-col hover:border-4 hover:border-t-0 justify-center items-center  rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-cyan-300`}
        >
          <Image src={firebase} alt="firebase" className="w-32 sm:w-28" />
          <h1 className="text-white text-center text-xl font-Kurale">
            Firebase
          </h1>
        </div>
        <div
          className={`${styles.native} h-40 border-2 w-2/5 p-4 sm:w-40 hover:border-4 hover:border-t-0 flex flex-col justify-center items-center  rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-purple-400`}
        >
          <Image src={native} alt="native" className="w-32 sm:w-28" />
          <h1 className="text-white text-center text-xl font-Kurale ">
            React Native
          </h1>
        </div>
        <div
          className={`${styles.tail} h-40 border-2 w-2/5 flex sm:w-40 flex-col hover:border-4 hover:border-t-0 justify-center items-center  p-4 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-cyan-400`}
        >
          <Image src={tailwind} alt="tailwind" className="w-32 sm:w-28" />
          <h1 className="text-white text-center text-xl font-Kurale mt-3">
            Tailwind
          </h1>
        </div>

        <div
          className={`${styles.mongo} h-40 border-2 w-2/5 p-4 sm:w-40 flex flex-col hover:border-4 hover:border-t-0 justify-center items-center  rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-green-400`}
        >
          <Image src={mongo} alt="mongo" className="w-32 sm:w-28" />
          <h1 className="text-white text-center text-xl font-Kurale">
            Mongo Db
          </h1>
        </div>
        <div
          className={`${styles.python} h-40 border-2 w-2/5 p-4 sm:w-40 flex flex-col justify-center items-center hover:border-4 hover:border-t-0 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-yellow-200`}
        >
          <Image src={python} alt="python" className="w-32 sm:w-28" />
          <h1 className="text-white text-center text-xl font-Kurale">python</h1>
        </div>
        <div
          className={`${styles.C} h-40 border-2 w-2/5 p-4 sm:w-40 flex flex-col justify-center items-center hover:border-4 hover:border-t-0 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-blue-700`}
        >
          <Image src={C} alt="C++" className="w-32 sm:w-28" />
          <h1 className="text-white text-center text-xl font-Kurale">C++</h1>
        </div>
      </div>
    </div>
  );
}
