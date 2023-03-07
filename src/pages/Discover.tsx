import React from "react";
// import { useGetChartListQuery } from "../redux/services/shazam";
import { SongCard } from "../components";
import { girl } from "../assets";
import { dummyData } from "../dummyData";

export default function Discover() {
  // const { data } = useGetChartListQuery(null);
  // console.log(data);

  return (
    <div className="p-8">
      <h2 className="text-primary-drak text-3xl font-medium mb-4">Home</h2>

      <div className="p-8 shadow-xl relative overflow-hidden rounded-3xl text-white bg-gradient-to-r from-primary-main to-purple-400">
        <span className="font-light text-sm">MUSKINAJA</span>
        <h1 className="text-3xl my-4 font-medium leading-normal">
          Listen to <br /> trending songs <br /> all the time
        </h1>
        <p className="font-light text-sm">
          With Musikinaja, you can get premium <br /> music for free anywhere
          and at any time
        </p>
        <button className="py-2 px-4 mt-4 rounded-full shadow-lg bg-white text-primary-dark font-medium">
          Explore Now
        </button>
        <img src={girl} alt="" className="absolute right-[-30%] bottom-[-5%] object-contain w-full h-full" />
      </div>

      <div className="mt-4">
        <h3 className="text-primary-dark text-xl font-medium mb-4">
          Trending
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {dummyData.tracks.map((item,i) => (
            <SongCard key={i} title={item.title} subTitle={item.subtitle} imgUrl={item.images.background}/>
          ))}
        </div>
      </div>
    </div>
  );
}
