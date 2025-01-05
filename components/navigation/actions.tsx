"use client";

import { MdDashboard } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Hint } from "@/components/global/hint";
import { BsFillCartCheckFill } from "react-icons/bs";

export const Actions = ({ isAdmin }: { isAdmin: boolean }) => {
  const router = useRouter();
  const user = { id: "111" };

  return (
    <div className="flex items-center justify-end gap-x-2 ml-2 lg:ml-0">
      <Button>Login</Button>

      <div className="gap-x-2 items-center flex">
        {isAdmin && (
          <Hint label="Admin Dashboard">
            <Button
              onClick={() => router.push(`/admin/${user?.id}`)}
              variant={"ghost"}
              className="px-2 md:size-full"
            >
              <MdDashboard className="size-6 md:mr-2" />
              <span className="hidden md:block">Admin Dashboard</span>
            </Button>
          </Hint>
        )}
        {/* <Hint label="View Your Orders">
          <Button
            onClick={() => router.push(`/orders`)}
            variant={"ghost"}
            className="px-2 md:size-full"
          >
            <BsFillCartCheckFill className="md:mr-2 size-6" />
            <span className="hidden md:block">View Orders</span>
          </Button>
        </Hint> */}
        {/* UserButton */}
      </div>
      {/* <ThemeDropDown /> */}
    </div>
  );
};
