import React from "react";
import { Button, createTheme, Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";

function DarkMode() {
  const lightTheme = createTheme({
    type: "light",
  });

  const darkTheme = createTheme({
    type: "dark",
  });

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <div>
      <Switch
        checked={isDark}
        onChange={(e) => {
          setTheme(e.target.checked ? "dark" : "light");
        }}
      />
    </div>
  );
}

export default DarkMode;
