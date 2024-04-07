"use client";
import Navbar from "../ui/Navbar";
function NavbarProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default NavbarProvider;
