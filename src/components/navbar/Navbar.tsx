"use client";
import { useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div>
      {isClient && (
        <div>
          <div className="hidden md:block">
            <DesktopNavbar />
          </div>
          <div className="lg:hidden pt-2">
            <MobileNavbar />
          </div>
        </div>
      )}
    </div>

  );
};

export default Navbar;
