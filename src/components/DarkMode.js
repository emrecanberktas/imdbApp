import React from "react";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

function DarkMode({ theme, setTheme }) {
  return (
    <div>
      <Switch
        checked={true}
        size="lg"
        iconOff={<SunIcon filled />}
        iconOn={<MoonIcon filled />}
        onChange={(e) => {
          setTheme(e.target.checked ? "light" : "dark");
        }}
      />
    </div>
  );
}

export default DarkMode;
