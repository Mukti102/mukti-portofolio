import "@theme-toggles/react/css/Within.css";
import { useTheme } from "next-themes";
import { Within } from "@theme-toggles/react";
import { useEffect, useState } from "react";

const TogleTheme = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const { setTheme } = useTheme();
  useEffect(() => {
    isToggled ? setTheme("light") : setTheme("dark");
  }, [isToggled]);
  return (
    <Within
      duration={750}
      toggled={isToggled}
      toggle={setIsToggled}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      style={{
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // fontSize: "22px",
      }}
      className="sm:text-[30px] text-[25px]"
      onPointerLeaveCapture={undefined}
    />
  );
};

export default TogleTheme;
