import { ComponentProps } from "react";
import Image from "next/image";

interface IconProps extends ComponentProps<"div"> {
  title: string;
  src: string;
}

function Icon({ title, src, ...props }: IconProps) {
  console.log(src);
  return (
    <>
      <div {...props}>
        {/* <Image alt="lll" src={src} className="w-full h-full" /> */}
      </div>
      <h1 className="font-[700]">{title}</h1>
    </>
  );
}

export default Icon;
