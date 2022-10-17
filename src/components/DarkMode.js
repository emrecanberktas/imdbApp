import React from "react";
import { Button, createTheme, Switch, useTheme } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

function DarkMode({ theme, setTheme }) {
  return (
    <div>
      <Switch
        checked={true}
        size="lg"
        iconOn={<SunIcon filled />}
        iconOff={<MoonIcon filled />}
        onChange={(e) => {
          setTheme(e.target.checked ? "light" : "dark");
        }}
      />
    </div>
  );
}

export default DarkMode;