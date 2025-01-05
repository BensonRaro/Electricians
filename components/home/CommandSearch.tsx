"use client";

import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { SearchCommandDialog } from "./CommandDialog";

const CommandSearch = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-center items-center w-full mt-8">
        <div
          className="flex px-4 py-3 rounded-full border w-full lg:w-[50%] justify-between shadow-md cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <p className="opacity-30 text-lg font-semibold">Search Here...</p>
          <MdSearch className="size-8" />
        </div>
      </div>
      <SearchCommandDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default CommandSearch;
