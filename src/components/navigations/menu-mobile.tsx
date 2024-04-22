import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import MenuItems from "./menu-items";

export const MenuMobile = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild className="bg-primary border-0">
          <Button variant="outline">
            <FiMenu className="text-white text-2xl" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="bg-primary/90 text-white flex flex-col gap-4 border-0 shadow-lg"
        >
          <SheetHeader className="">
            <SheetTitle className="text-white text-2xl">Smart App</SheetTitle>
          </SheetHeader>
          <MenuItems />
        </SheetContent>
      </Sheet>
    </div>
  );
};
