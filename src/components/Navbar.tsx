import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  return (
    <nav className="fixed w-screen h-20 px-4 md:px-20 z-50 text-white flex flex-row items-center justify-between">
      <span>Movie App</span>
      <div className="hidden md:flex flex-row items-center gap-2">
        <Button variant={"ghost"}>Home</Button>
        <Button variant={"ghost"}>Movies</Button>
        <Button variant={"ghost"}>Series</Button>
        <Button variant={"ghost"}>Sport</Button>
        <Button variant={"ghost"}>Kids</Button>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Button>Login</Button>
        <Button>Register</Button>
        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <Button size={"icon"} asChild className="p-2">
              <RxHamburgerMenu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col items-center gap-2">
              <Button variant={"ghost"}>Home</Button>
              <Button variant={"ghost"}>Movies</Button>
              <Button variant={"ghost"}>Series</Button>
              <Button variant={"ghost"}>Sport</Button>
              <Button variant={"ghost"}>Kids</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
