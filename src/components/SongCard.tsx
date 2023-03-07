import React from "react";
import { BiPlay } from "react-icons/bi";

interface songCardProps {
  imgUrl: string;
  title: string;
  subTitle: string;
}

export default function SongCard({ imgUrl, title, subTitle }: songCardProps) {

  const shortString = (stringValue:string,maxLenght:number) => {
    if (stringValue.length > maxLenght) {
      return stringValue.substring(0,maxLenght) + ' ...'
    } else {
      return stringValue
    }
  }

  return (
    <div className=" h-[200px] relative shadow-lg rounded-3xl overflow-hidden">
      <img
        alt="song_img"
        src={imgUrl}
        className="w-full h-full object-cover"
      />
      <div className="p-2 flex gap-2 justify-between items-center absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[90%] bg-primary-main/50 backdrop-blur-md rounded-2xl">
        <div className="text-white space-y-1 group">
          <h5 className="text-sm ">{shortString(title,15)}</h5>
          <h6 className="text-xs ">{shortString(subTitle,20)}</h6>
          {(title.length > 15 || subTitle.length > 20) && (
            <div className="[transform:perspective(50px)_translateZ(0)_rotateX(10deg)] group-hover:[transform:perspective(0px)_translateZ(0)_rotateX(0deg)] transition-all duration-300 group-hover:opacity-100 origin-bottom text-white rounded-md absolute bottom-[110%] opacity-0 m-4 mx-auto">
              <div className="rounded bg-primary-light p-1 space-y-1 shadow-lg">
                <h5 className="text-sm">{title}</h5>
                <h6 className="text-xs">{subTitle}</h6>
              </div>
              <div className="clip-bottom ml-2 h-2 w-4 bg-primary-light"></div>
            </div>
          )}
        </div>
        <div className="bg-white shadow-lg h-8 w-8 grid place-items-center rounded-full">
          <BiPlay size={24} />
        </div>
      </div>
    </div>
  );
}
