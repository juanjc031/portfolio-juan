import Image from "next/image";
import Link from "next/link";
import React from "react";
/* import { FaArrowUpRightFromSquare } from "react-icons/fa6"; */

const ProjetoItem = ({ title, backgroundImg, tech, projectUrl, width, height }) => {
  return (
    <div className="">
      <p className="font-semibold">{title}</p>
      <div className="">
        <Image
          className="rounded-xl dark:opacity-50 dark:group-hover:opacity-10 group-hover:opacity-20"
          src={backgroundImg}
          width={width}
          height={height}
        />
      </div>
      <div className="flex-col items-center hover:ease-in-out hidden group-hover:block group-hover:bottom-[6rem] mmd:group-hover:bottom-[3rem] mmd:group-hover:right-[6px] px-3 -bottom-full absolute gap-2 justify-evenly w-full">
        <div className="flex-col flex justify-center items-center">
          <h3 className="text-xl sm:text-2xl text-white tracking-wider group-hover:text-white">
            {title}
          </h3>
          <p className="text-white font-semibold">{tech}</p>
          <Link href={projectUrl} className="">
            <button
              type="button"
              class="mt-4 border-[3px] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              <span className="flex items-center font-bold text-white">
                Mais Informações
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjetoItem;
