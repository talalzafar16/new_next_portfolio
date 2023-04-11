import Image from 'next/image';
import pic from "../../public/second.jpg"


export default function about() {
  return (
    <div className="px-5 py-4 flex flex-col h-screen gap-6 mt-20">
        <h1 className="text-white font-bold text-center text-2xl underline font-serif ">ABOUT:</h1>
        <Image src={pic} alt="profile" className='mt-8 h-96 rounded-2xl ' />
        <div>
            <p className="text-white font-Kurale">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto perferendis minus tenetur magni ratione dolorum repudiandae voluptate consequatur fugiat quidem, enim atque tempore quod quo numquam harum facilis. Quisquam, impedit.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto perferendis minus tenetur magni ratione dolorum repudiandae voluptate consequatur fugiat quidem, enim atque tempore quod quo numquam harum facilis. Quisquam, impedit.
            </p>
        </div>
    </div>
  )
}