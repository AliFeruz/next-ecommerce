import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const NavBar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="flex md:hidden items-center justify-between h-full">
        <Link href={"/"} className="text-2xl tracking-wide">
          LAMA
        </Link>
        <Menu />
      </div>
      <div className="hidden md:flex justify-between items-center h-full gap-8">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
        <Link href={"/"} className="text-2xl tracking-wide">
          LAMA
        </Link>
        <div className="hidden xl:flex items-center justify-center text-sm gap-4">
          <Link href={'/'}>HomePage</Link>
          <Link href={'/'}>Shop</Link>
          <Link href={'/'}>Deals</Link>
          <Link href={'/'}>About</Link>
          <Link href={'/'}>Contact</Link>
        </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
        <SearchBar/>
        <NavIcons/>
        </div>       
      </div>
    </div>
  );
};

export default NavBar;
