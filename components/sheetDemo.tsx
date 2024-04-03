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
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Image src={"/logo.png"} alt="logo" width={100} height={20} />
          </SheetTitle>
        </SheetHeader>
        <div className="w-full h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap">
          <div className="mt-6 text-gray-600 dark:text-gray-300 md:-ml-4 lg:pr-4 lg:mt-0">

            <ul className="space-y-6 tracking-wide text-base lg:text-sm lg:flex lg:space-y-0">
              <li>
                <SheetClose asChild>

                <Link
                  href="/"
                  className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                  >
                  <span>Home</span>
                </Link>
                    </SheetClose>
              </li>
              <li>
                <SheetClose asChild>

                <Link
                  href="/aboutus"
                  className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                  >
                  <span>About us</span>
                </Link>
                      </SheetClose>
              </li>
              <li>
              <SheetClose asChild>
                <Link
                  href="/docs"
                  className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <span>Docs</span>
                </Link>
                </SheetClose>
              </li>
              <li>
                  <SheetClose asChild>
                <Link
                  href="/contact"
                  className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                  >
                  <span>Contact us</span>
                </Link>
                    </SheetClose>
              </li>
            </ul>
          </div>
        </div>
       
      </SheetContent>
    </Sheet>
  );
}
