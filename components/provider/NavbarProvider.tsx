"use client";
import NavbarMobile from "../ui/MobileNavbar";
import Navbar from "../ui/Navbar";
function NavbarProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <NavbarMobile /> */}
      <Navbar />
      {children}
    </>
  );
}

export default NavbarProvider;
