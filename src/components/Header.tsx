import React from "react";
import { ModeToggle } from "./mode-toggle";
import { MdWbSunny } from "react-icons/md";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="p-3 flex justify-between">
      <div className="flex items-center">
        <MdWbSunny color="yellow" /> <h1 className="ml-2 text-lg">RDS</h1>
      </div>
      <ModeToggle />
    </div>
  );
};

export default Header;
