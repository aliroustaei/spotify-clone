import React from "react";
import { BiPlay } from "react-icons/bi";

interface songCardProps {
    imgUrl: string,
    title:string,
    subTitle:string
}

export default function SongCard({imgUrl, title,subTitle}:songCardProps) {
  return (
    <div className=" h-[200px] relative">
      <img
        alt="song_img"
        src={imgUrl}
        className="w-full h-full rounded-lg object-cover"
      />
      <div className="p-2 flex justify-between items-center absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[90%] bg-purple-600/30 backdrop-blur-md rounded-lg overflow-hidden">
        <div className="text-white">
          <h5 className="text-sm">{title}</h5>
          <h6 className="text-xs">{subTitle}</h6>
        </div>
        <div className="bg-white h-6 w-6 grid place-items-center rounded-full">
          <BiPlay size={24} />
        </div>
      </div>
    </div>
  );
}
