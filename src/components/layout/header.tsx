import { CircleUser, Menu, X } from "lucide-react";
import { headerLinks } from "../header/data";
import Logo from "../header/logo";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "../ui/sheet";
import { useState } from "react";

export default function Header() {
  const [openMobile, setOpenMobile] = useState(false)
  return (
    <header className="top-0 w-full bg-white shyadow-md border-b">
      <nav className="container-wrapper py-3">
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between w-full">
            <Logo />
            <div className="flex items-center justify-center gap-x-6 lg:gap-x-10">
              {headerLinks.map((link, index) => (
                <a href={link.href} key={index} className="text-sm sm:text-md hover:text-green-900">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <Button
               render={<a href="/login" />} 
               variant="ghost"
               className="py-2 h-11">
                <CircleUser className="size-6 " />
              </Button>
            </div>
          </div>

          <div className="lg:hidden flex items-center justify-between">
            <Logo />
            <div className="lg:hidden">
              <Sheet open={openMobile} onOpenChange={setOpenMobile}>
                <SheetTrigger className="flex items-center justify-center cursor-pointer border-none p-1 focus:border-none">
                  <Menu /> 
                </SheetTrigger>
                <SheetContent className="w-full  h-auto py-2 sm:py-4 bg-white z-50">
                  <div className="justify-start ml-4 flex items-center">
                    <Logo />
                  </div>
                  <div className="flex items-start flex-col justify-start gap-y-4 w-full  ">
                    {headerLinks.map((link, index) => (
                      <Button 
                      key={index}
                      render={<a href={link.href} />}
                      variant="ghost"
                      className="text-md cursor-pointer w-full hover:bg-neutral-100 py-2 h-12 text-left flex items-center justify-start text-base sm:text-lg">
                        {link.label}
                      </Button>
                    ))}
                  </div>
                  <SheetFooter className="flex items- w-full">
                    <Button
                    variant="default"
                    render={<a href="/login" />}
                    className="bg-green-800 text-white w-full flex items-center justify-center sm:text-lg text-lg font-semibold h-12 py-2">
                      Sign in
                    </Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
      </nav>
    </header>
  )
}
