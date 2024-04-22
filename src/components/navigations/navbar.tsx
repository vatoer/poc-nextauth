import { UserButton } from "@/components/user/user-button";
import Link from "next/link";
import Menu from "./menu";
import { MenuMobile } from "./menu-mobile";

export const Navbar = () => {
  return (
    <nav className="bg-primary backdrop-blur  h-[48px] fixed inset-y-0 w-full z-50 shadow-lg flex flex-row justify-between items-center px-2">
      <div className="flex flex-row gap-2">
        <MenuMobile />
        <div className="flex items-center">
          <Link href="/" className="whitespace-nowrap text-white ">
            <span>Smart App</span>
          </Link>
        </div>
        <Menu />
      </div>
      <div id="userbutto">
        <UserButton />
      </div>
    </nav>
  );
};
