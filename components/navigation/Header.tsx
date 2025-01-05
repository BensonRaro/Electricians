import Image from "next/image";
import Link from "next/link";

import { Suspense } from "react";

import { Search } from "@/components/navigation/search";
import { Actions } from "@/components/navigation/actions";

const Header = async () => {
  const user = { role: "Admin" };

  const isAdmin = user?.role === "ADMIN";
  return (
    <div className="bg-white shadow border-b p-2 md:p-3 sticky z-40 top-0">
      <div className="screen justify-between flex">
        <Link href="/">
          <div className="flex items-center gap-x-4 hover:opacity-75 transition">
            <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
              <Image
                src="/favicon.ico"
                alt="auction"
                height="35"
                width="35"
                className="rounded-full size-8"
              />
            </div>
            <div className="hidden lg:block">
              <p className="font-semibold font-serif">Electricians</p>
            </div>
          </div>
        </Link>
        <Suspense>
          <Search />
        </Suspense>
        <Actions isAdmin={isAdmin} />
      </div>
    </div>
  );
};

export default Header;
