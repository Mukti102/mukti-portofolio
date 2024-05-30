import React from "react";
import ai from "@/public/assets/ai.png";
import Image from "next/image";
import About from "@/components/pages/about";
function page() {
  return (
    <div className="dark:bg-secondary sm:pb-0 pb-20 bg-gray-100">
      <About />;
    </div>
  );
}

export default page;
