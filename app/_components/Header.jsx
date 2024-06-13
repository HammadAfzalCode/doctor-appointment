import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 1,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 1,
      name: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <div className="flex justify-between p-4 shadow-sm items-center">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo" width={80} height={40} />
        <ul className="md:flex hidden gap-8">
          {Menu.map((item, index) => (
            <Link href={item.path}>
              <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out ">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
