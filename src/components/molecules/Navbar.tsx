"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#" },
  { name: "Wines", href: "#" },
  { name: "Wine Articles", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "The English", href: "#" },
];
export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="">
      <header className="flex h-20 w-full shrink-0 items-center  ">
        {/* Logo - Left Aligned */}
        <Link href="#" className="flex items-center" prefetch={false}>
          <div className="bg-gray-900">
            <Image
              src="/images/logo.webp"
              width={150}
              height={150}
              alt="Mountain"
            />
          </div>
        </Link>

        {/* Menu Icon - Right Aligned */}
        <div className="ml-auto lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-2 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    prefetch={false}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden lg:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50`}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-1/2 h-0.5 w-1/2 bg-black scale-x-0 -translate-x-1/2 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${
                  pathname === item.href ? "scale-x-100 " : ""
                }`}
              />
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}
