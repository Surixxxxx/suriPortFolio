const NavbarLogo = () => {
  return (
    <div>
      {/* For medium and larger screens */}
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 font-extrabold text-3xl md:text-4xl sm:hidden md:block font-special drop-shadow-md">
        Suresh
      </h1>

      {/* For small screens */}
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-extrabold text-4xl md:hidden sm:block font-special drop-shadow-md">
        Suresh
      </h1>
    </div>
  );
};

export default NavbarLogo;
