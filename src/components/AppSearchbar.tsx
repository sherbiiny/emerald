import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const AppSearchbar = () => {
  return (
    <div className='flex w-full items-center gap-2 rounded-md px-3 py-2 mx-10 shadow-sm'>
      <Input placeholder='Search your notes...' />
      <Search />
    </div>
  );
};
