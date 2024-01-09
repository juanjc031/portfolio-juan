import Image from "next/image";
import React from "react";

const ExperienceItem = ({ img, title, desc, data, info, act, icons }) => {
  return (
    <div >
      <div className="flex mlg:flex-col gap-3 w-full relative items-center justify-start">
        <div className="md:flex shadow-lg shadow-gray-900 rounded-md">
          <div className=" h-auto m-auto  rounded-xl flex items-center justify-center p-2 easy-in duration-300">
            <Image src={img} className="rounded-lg" alt="ExperienceImg" />
          </div>
        </div>
        <div className="flex mlg:w-full w-[50%] flex-col items-start">
          <p className="font-bold underline text-2xl text-[#0E3C89] text-start">
            {title}
          </p>
          <div>
            <p className=" font-semibold text-base text-start">{desc}</p>
            <p className=" text-sm text-start font-semibold">{data}</p>
          </div>
          <p className=" mt-4 text-sm px-1 text-start font-medium">{info}</p>
        </div>
      </div>
      <hr className="border mt-3 mx-2 border-[#0E3C89]"></hr>
      <p className="text-sm mt-4 font-medium">{act}</p>
      <div className="flex mt-4 justify-evenly items-center mmd:p-3 gap-2 text-2xl border-[#0E3C89] border text-white p-1 py-2 rounded-full shadow-sm">
        {icons}
      </div>
    </div>
  );
};

export default ExperienceItem;
