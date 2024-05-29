import Link from "next/link";
import React from "react";
import { CiLight } from "react-icons/ci";
import { FaSpotify } from "react-icons/fa";
function Toggle() {
  return (
    <Link
      href="/player"
      className="px-2 py-1 out-shadow rounded-md text-xl md:text-3xl"
    >
      <FaSpotify />
    </Link>
  );
}

export default Toggle;
