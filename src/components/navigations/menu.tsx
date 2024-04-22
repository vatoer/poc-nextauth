"use client";
import Link from "next/link";
import { useState } from "react";
import { UserButton } from "../user/user-button";
import MenuItems from "./menu-items";
import { MenuMobile } from "./menu-mobile";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hidden lg:relative w-full lg:flex lg:flex-row gap-6 text-white">
      <MenuItems />
    </div>
  );
};

export default Menu;
