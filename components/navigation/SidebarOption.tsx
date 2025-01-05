"use client";

import Link from "next/link";

import { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  icon: IconType;
  active: IconType;
  label: string;
  href: string;
  isActive: boolean;
}

const SidebarOption = ({
  icon: Icon,
  active: ActiveIcon,
  label,
  href,
  isActive,
}: NavItemProps) => {
  return (
    <Button
      className={cn(
        "w-full px-4 py-3 text-center rounded-md justify-start text-black dark:text-white hover:bg-transparent hover:dark:bg-transparent bg-transparent dark:bg-transparent",
        isActive ? "border" : "hover:border"
      )}
      asChild
    >
      <Link href={href}>
        <div className="flex items-center gap-x-2">
          {isActive ? (
            <ActiveIcon className="h-6 w-6" />
          ) : (
            <Icon className="h-6 w-6" />
          )}
          <span className="mt-1 hidden md:block">{label}</span>
        </div>
      </Link>
    </Button>
  );
};

export default SidebarOption;
