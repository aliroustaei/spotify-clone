import React from "react";
import Search from "./Search";
import TopArtist from "./TopArtist";
import { BiBell } from "react-icons/bi";
import { avatar } from "../../assets";

export default function SidebarRight() {
  return (
    <div className="p-8 pl-0">

      <div className="flex items-center justify-between">
        <div className="relative">
          <BiBell className="text-primary-dark" size={24} />
          <div className="h-1.5 w-1.5 bg-red-800 rounded-full absolute top-0 right-1"></div>
        </div>
        <Search />
      </div>

      <div className="mt-4">
        <h3 className=" text-2xl font-medium mb-4">Top Artist</h3>
        <TopArtist ImgUrl={avatar} artistName="Ali fardi" />
        <TopArtist ImgUrl={avatar} artistName="Reza fardi" />
        <TopArtist ImgUrl={avatar} artistName="negin fardi" />
      </div>
    </div>
  );
}
