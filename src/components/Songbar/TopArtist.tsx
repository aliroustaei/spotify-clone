import React from "react";
import { BsHeartFill, BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

interface topArtistProps {
  ImgUrl: string;
  artistName: string;
}

export default function TopArtist({ ImgUrl, artistName }: topArtistProps) {
  return (
    <div className="flex gap-4 text-primary-dark mb-4">
      <img
        src={ImgUrl}
        alt=""
        className="w-14 h-14 object-cover rounded-2xl shadow-lg"
      />
      <div>
        <h5 className="text-xl font-medium mb-2">{artistName}</h5>
        <div className="text-xs flex items-center gap-1 text-primary-light">
          <BsHeartFill /> 1928 Followers <AiOutlineMinus />{" "}
          <BsMusicNoteBeamed /> 122 Plays
        </div>
      </div>
    </div>
  );
}
