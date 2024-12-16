import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const menuItems = ["Home", "Heroes", "News", "Esports"];

  return (
    <nav className="fixed top-0 w-full bg-dota-dark/90 backdrop-blur-sm z-50 border-b border-dota-purple/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl md:text-2xl font-bold text-dota-purple">DOTA 2</h1>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a key={item} href="#" className="text-white hover:text-dota-purple transition">
                {item}
              </a>
            ))}
          </div>
        </div>
        
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:text-dota-purple">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-dota-dark border-dota-purple/20">
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-lg text-white hover:text-dota-purple transition px-4 py-2 rounded-md hover:bg-dota-purple/10"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;