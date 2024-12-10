"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import USER from "../assests/Vector (3).svg";
import MAGNIFIER from "../assests/Vector (1).svg";
import HEART from "../assests/Vector (2).svg";
import CART from "../assests/Vector.svg";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Shop", href: "/Shop", current: false },
  { name: "About", href: "/Blog", current: false },
  { name: "Contact", href: "/Contact", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({className} : {className : string}) {
  return (
    <Disclosure as="nav" className={`${className} font-[family-name:var(--mypoppins)] text-sm md:text-md`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-between h-[100px]">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <RiMenuFill
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <RiCloseFill
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center md:justify-between sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center w-[10%]">{/* LOGO */}</div>
            <div className="hidden sm:ml-6 sm:block ali">
              <div className="flex space-x-5 sm:space-x-10 md:space-x-16">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      "text-black md:text-[16px]",
                      "rounded-md font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          <div className="absolute inset-y-0 right-0 flex items-center max-w-[247px] w-[247px] justify-between pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Image alt="user" className="w-5 md:w-6 md:h-6" src={USER}></Image>
            <Image alt="user" className="w-5 md:w-6 md:h-6" src={MAGNIFIER}></Image>
            <Image alt="user" className="w-5 md:w-6 md:h-6" src={HEART}></Image>
            <Image alt="user" className="w-5 md:w-6 md:h-6" src={CART}></Image>
          </div>

          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                "text-black xl:text-[16px]",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
