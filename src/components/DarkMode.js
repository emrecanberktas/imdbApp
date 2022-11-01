import React from "react";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

function DarkMode({ theme, setTheme }) {
  return (
    <div>
      <Switch
        aria-label="Dark Mode"
        size="lg"
        iconOff={<SunIcon filled />}
        iconOn={<MoonIcon filled />}
        onChange={(e) => {
          setTheme(e.target.checked ? "light" : "dark");
          localStorage.setItem("theme", e.target.checked ? "light" : "dark");
        }}
      />
    </div>
  );
}

export default DarkMode;
