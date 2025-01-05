"use client";

import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Search = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    const isShop = pathname.includes("/shop");

    if (isShop) {
      params.set("q", value.toString());
      replace(`${pathname}?${params.toString()}`);
    } else {
      router.push(`/shop?q=${value}`);
    }
  };

  const onClear = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full lg:w-[400px] flex items-center"
    >
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 bg-transparent dark:bg-transparent"
      />
      {value && (
        <IoMdClose
          className="absolute top-[15px] right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
          onClick={onClear}
        />
      )}
      <Button
        type="submit"
        size="icon"
        variant="ghost"
        className="rounded-l-none border  border-stone-200 dark:border-stone-800"
      >
        <IoSearch className="h-5 w-5" />
      </Button>
    </form>
  );
};
