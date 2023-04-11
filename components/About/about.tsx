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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          perferendis minus tenetur magni ratione dolorum repudiandae voluptate
          consequatur fugiat quidem, enim atque tempore quod quo numquam harum
          facilis. Quisquam, impedit. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Iusto perferendis minus tenetur magni ratione
          dolorum repudiandae voluptate consequatur fugiat quidem, enim atque
          tempore quod quo numquam harum facilis. Quisquam, impedit.
        </p>
      </div>
    </div>
  );
}
