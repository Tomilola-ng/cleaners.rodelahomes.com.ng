"use client";

import { useState } from "react";
import { AlignLeftIcon } from "lucide-react";

import { _siteDetails } from "@/lib/config";

import MenuLink from "./MenuLink";
import { Navbar } from "./NavBar";
import Logo from "../ui/Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <header className="h-16 pSm py-4 bg-light w-full flexBetween z-20">
      <Logo />

      <AlignLeftIcon
        onClick={toggleOpen}
        className="hover:text-primary md:hidden"
        size={28}
      />

      <div className="w-[24rem] hidden md:flexBetween">
        {_siteDetails.menuLinks.map((item) => (
          <MenuLink key={item.link} {...item} />
        ))}
      </div>

      {isOpen && <Navbar />}
    </header>
  );
}
