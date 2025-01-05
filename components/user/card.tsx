"use client";

import { useState } from "react";
import { UserDialog } from "../home/UserDialog";

const UserCard = ({ user }: { user: any }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img className="rounded-t-lg" src={user.image} alt="" />

        <div className="p-5 flex gap-2">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user.firstName}
          </h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user.firstName}
          </h5>
        </div>
      </div>
      <UserDialog open={open} setOpen={setOpen} user={user} />
    </>
  );
};

export default UserCard;
