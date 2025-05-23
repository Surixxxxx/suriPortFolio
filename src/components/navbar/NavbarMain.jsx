import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="max-w-[1300px] sm:mb-0 mx-auto w-full px-2 fixed left-1/2 -translate-x-1/2 z-20 flex items-center justify-between mt-4">
      {/* Main Navbar Container */}
      <div className="flex justify-between items-center w-full bg-black/90 backdrop-blur-md px-6 py-3 rounded-full shadow-md border border-orange-400/20">
        <NavbarLogo />
        
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>

      {/* Toggler Button on Small Screens */}
      <div className="lg:hidden ml-2">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
