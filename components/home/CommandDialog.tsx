import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import UsersData from "@/data/RandomData";
import { useState } from "react";
import { UserDialog } from "./UserDialog";
export function SearchCommandDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [userDetails, setUserDetails] = useState<any>({});
  const [openUser, setOpenUser] = useState(false);

  const OpenUserD = (user: any) => {
    setUserDetails(user);
    setOpenUser(true);
    setOpen(false);
  };
  return (
    <>
      <UserDialog open={openUser} setOpen={setOpenUser} user={userDetails} />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Electicians">
            {UsersData.map((user) => (
              <div key={user.id} onClick={() => OpenUserD(user)}>
                <CommandItem>
                  <img src={user.image} alt="" className="size-7 rounded-md" />
                  <p className="flex gap-2">
                    <span>{user.firstName}</span>
                    <span>{user.secondName}</span>
                  </p>
                </CommandItem>
              </div>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
