import React from "react";
import { BiSearch } from "react-icons/bi";

export default function Search() {
  return (
    <form className="max-w-[80%]">
      <div className="flex flex-row justify-start items-center gap-1 border-[1px] rounded-full border-primary-light px-1">
        <div>
          <BiSearch className="text-primary-dark" size={24} />
        </div>
        <input
          type="text"
          id="search-field"
          placeholder="Type here to search"
          className="w-full bg-transparent border-none placeholder-primary-light placeholder:text-sm outline-none text-base p-2"
        />
      </div>
    </form>
  );
}
