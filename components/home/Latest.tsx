import { MdArrowRightAlt } from "react-icons/md";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import UsersData from "@/data/RandomData";
import UserCard from "../user/card";

const Latest = async () => {
  return (
    <div className="pt-8">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-bold text-primary font-serif">
          Electricians
        </h1>
        {/* <Button variant={"ghost"} size={"icon"} asChild>
          <Link href={"/shop"}>
            <MdArrowRightAlt className="size-8" />
          </Link>
        </Button> */}
      </div>
      {UsersData.length === 0 ? (
        <h2 className="flex justify-center items-center text-2xl">
          No Items Available
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 mt-4">
          {UsersData.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Latest;
