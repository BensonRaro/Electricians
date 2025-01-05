import { Dialog, DialogContent } from "@/components/ui/dialog";

export function UserDialog({
  open,
  setOpen,
  user,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  user: any;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-4xl flex items-center flex-wrap mx-auto my-32 lg:my-0">
        <div className="flex items-center flex-wrap mx-auto my-32 lg:my-0">
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg shadow-2xl bg-white lg:rounded-r-none opacity-75 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
                <img src={user.image} className="w-full h-full rounded-full" />
              </div>

              <h1 className="text-3xl font-bold pt-8 lg:pt-0 flex gap-2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {user.firstName}
                </h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {user.firstName}
                </h5>
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"></p>
              <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"></p>
              <p className="pt-8 text-sm">
                Totally optional short description about yourself, what you do
                and so on.
              </p>

              <div className="pt-12 pb-8">
                <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                  Get In Touch
                </button>
              </div>

              <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between"></div>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <img
              src={user.image}
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block h-[450px]"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
