import React from "react";

export default function Button({
  icon,
  children,
  props,
  href,
}: {
  icon: any;
  href: string;
  children: string;
  props: string;
}) {
  return (
    <a
      href={href}
      className={`px-5 flex gap-3 items-center text-sm rounded-md text-white py-2 font-medium ${props}`}
    >
      <span className="w-4 h-4 text-black flex justify-center items-center text-xs bg-white rounded-full">
        {icon}
      </span>
      <span>{children}</span>
    </a>
  );
}
