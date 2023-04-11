import Image from 'next/image';
import html from "../../public/html.png"
import css from "../../public/css.png"
import javascript from "../../public/javascript.png"
import styles from "./skills.module.css"

export default function about() {
  return (
    <div className="px-5 py-4 flex flex-col gap-6 mt-20 items-center">
        <div className="border-2 border-SecondaryColor w-40 rounded-3xl p-1">
        <h1 className="text-white font-bold text-center text-2xl font-sans">SKILLS</h1>
        </div>
        <div className="flex flex-wrap justify-around items-center flex-grow gap-6">
          <div className={`${styles.html} border-2 w-2/5 p-4 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-orange-400`}>
          <Image src={html} alt="html" className='w-32'/>
          <h1 className="text-white text-center text-xl font-Kurale">Html</h1>
          </div>
          <div className={`${styles.css} border-2 w-2/5 p-4 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border--400`}>
          <Image src={css} alt="css" className='w-32'/>
          <h1 className="text-white text-center text-xl font-Kurale" >CSS</h1>
          </div>
          <div className={`${styles.html} border-2 w-2/5 p-4 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-orange-400`}>
          <Image src={html} alt="html" className='w-32'/>
          <h1 className="text-white text-center text-xl font-Kurale">Html</h1>
          </div>
          <div className={`${styles.html} border-2 w-2/5 p-4 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-orange-400`}>
          <Image src={css} alt="css" className='w-32'/>
          <h1 className="text-white text-center text-xl font-Kurale" >CSS</h1>
          </div>
          <div className={`${styles.html} border-2 w-2/5 p-4 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-orange-400`}>
          <Image src={html} alt="html" className='w-32'/>
          <h1 className="text-white text-center text-xl font-Kurale">Html</h1>
          </div>
          <div className={`${styles.css} border-2 w-2/5 p-4 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border--400`}>
          <Image src={css} alt="css" className='w-32'/>
          <h1 className="text-white text-center text-xl font-Kurale" >CSS</h1>
          </div>
          <div className={`${styles.html} border-2 w-2/5 p-4 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-orange-400`}>
          <Image src={html} alt="html" className='w-32'/>
          <h1 className="text-white text-center text-xl font-Kurale">Html</h1>
          </div>
          <div className={`${styles.html} border-2 w-2/5 p-4 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-orange-400`}>
          <Image src={css} alt="css" className='w-32'/>
          <h1 className="text-white text-center text-xl font-Kurale" >CSS</h1>
          </div>
          <div className={`${styles.html} border-2 w-2/5 p-4 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-orange-400`}>
          <Image src={html} alt="html" className='w-32'/>
          <h1 className="text-white text-center text-xl font-Kurale">Html</h1>
          </div>
          <div className={`${styles.css} border-2 w-2/5 p-4 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border--400`}>
          <Image src={css} alt="css" className='w-32'/>
          <h1 className="text-white text-center text-xl font-Kurale" >CSS</h1>
          </div>
          <div className={`${styles.html} border-2 w-2/5 p-4 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-orange-400`}>
          <Image src={html} alt="html" className='w-32'/>
          <h1 className="text-white text-center text-xl font-Kurale">Html</h1>
          </div>
          <div className={`${styles.html} border-2 w-2/5 p-4 rounded-lg rounded-t-none border-t-0 drop-shadow-2xl border-orange-400`}>
          <Image src={css} alt="css" className='w-32'/>
          <h1 className="text-white text-center text-xl font-Kurale" >CSS</h1>
          </div>
        </div>
    </div>
  )
}