import React from "react";
// import { useGetChartListQuery } from "../redux/services/shazam";
import { SongCard } from "../components";

const dummyData = [
  {
    id: "1",
    title: "Ginseng Strip 2002",
    subtitle: "Yung Lean",
    img: "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/45/87/f9/4587f9b0-8bfd-91f2-f920-a665073f1607/pr_source.png/800x800cc.jpg",
  },
  {
    id: "2",
    title: "Ginseng Strip 2002",
    subtitle: "Yung Lean",
    img: "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/45/87/f9/4587f9b0-8bfd-91f2-f920-a665073f1607/pr_source.png/800x800cc.jpg",
  },
  {
    id: "3",
    title: "Ginseng Strip 2002",
    subtitle: "Yung Lean",
    img: "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/45/87/f9/4587f9b0-8bfd-91f2-f920-a665073f1607/pr_source.png/800x800cc.jpg",
  },
  {
    id: "4",
    title: "Ginseng Strip 2002",
    subtitle: "Yung Lean",
    img: "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/45/87/f9/4587f9b0-8bfd-91f2-f920-a665073f1607/pr_source.png/800x800cc.jpg",
  },
  {
    id: "5",
    title: "Ginseng Strip 2002",
    subtitle: "Yung Lean",
    img: "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/45/87/f9/4587f9b0-8bfd-91f2-f920-a665073f1607/pr_source.png/800x800cc.jpg",
  },
  {
    id: "6",
    title: "Ginseng Strip 2002",
    subtitle: "Yung Lean",
    img: "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/45/87/f9/4587f9b0-8bfd-91f2-f920-a665073f1607/pr_source.png/800x800cc.jpg",
  },
  {
    id: "7",
    title: "Ginseng Strip 2002",
    subtitle: "Yung Lean",
    img: "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/45/87/f9/4587f9b0-8bfd-91f2-f920-a665073f1607/pr_source.png/800x800cc.jpg",
  },
];

export default function Discover() {
  // const { data } = useGetChartListQuery(null);
  // console.log(data);

  return (
    <div className="p-8">
      <h2 className="text-primary-main text-3xl font-medium mb-4">Home</h2>

      <div className="p-8 rounded-2xl text-white bg-gradient-to-r from-purple-800 to-purple-500">
        <span className="font-light">MUSKINAJA</span>
        <h1 className="text-3xl my-4 font-medium">
          Listen to <br /> trending songs <br /> all the time
        </h1>
        <p className="font-light">
          With Musikinaja, you can get premium <br /> music for free anywhere
          and at any time
        </p>
        <button className="py-2 px-4 mt-4 rounded-full shadow-lg bg-white text-primary-main font-medium">
          Explore Now
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-primary-main text-2xl font-medium mb-4">
          Trending
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {dummyData.map((item) => (
            <SongCard key={item.id} title={item.title} subTitle={item.subtitle} imgUrl={item.img}/>
          ))}
        </div>
      </div>
    </div>
  );
}
