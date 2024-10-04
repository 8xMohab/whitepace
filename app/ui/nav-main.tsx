import { ArrowRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Button from "./components/button";
import MobileNav from "./mobile-nav";
import Link from "next/link";
import Image from "next/image";
const navigation = [
  {
    title: "Products",
    items: ["Product A", "Product B", "Prodcut C"],
  },
  {
    title: "Solutions",
    items: ["Solution A", "Solution B", "Solution C"],
  },
  {
    title: "Resources",
    items: ["Resource A", "Resource B", "Resource C"],
  },
  {
    title: "Pricing",
    items: ["Price A", "Price B", "Price C"],
  },
];

export default function NavBar() {
  return (
    <nav className="flex justify-between py-4 items-center">
      <div className="w-[134px] h-[24px] lg:w-[191px] lg:h-[34px] relative">
        <Image src="/logo-white.svg" alt="" fill />
      </div>
      <div className="flex items-center">
        <div className="hidden xl:flex mr-16">
          <NavigationMenu.Root className="relative">
            <NavigationMenu.List className="flex space-x-8">
              {navigation.map((list) => (
                <NavigationMenu.Item key={list.title} className="">
                  <NavigationMenu.Trigger className="flex items-center">
                    {list.title} <ChevronDownIcon className="w-5 h-5 ml-2" />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute flex flex-col top-full">
                    {list.items.map((item) => (
                      <NavigationMenu.Link key={item} asChild>
                        <Link href="#">{item}</Link>
                      </NavigationMenu.Link>
                    ))}
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
            <NavigationMenu.Viewport />
          </NavigationMenu.Root>
        </div>
        <div className="mr-6 space-x-6 hidden md:flex">
          <Button variant="secondary" href="#" className="py-4 px-10">
            Login
          </Button>
          <Button href="#" variant="primary" className="py-4 px-6 ">
            Try Whitepace free
            <span>
              <ArrowRightIcon className="w-5 h-5 ml-1" />
            </span>
          </Button>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}
