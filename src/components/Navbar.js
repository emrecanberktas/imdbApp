import React from "react";
import { Input, Grid, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

function Navbar({ theme, setTheme }) {
  return (
    <Grid.Container
      gap={2}
      justify="space-between"
      alignItems="center"
      direction="row"
      css={{ paddingTop: "$15" }}
    >
      <Grid>
        <div>
          <Link to="/">
            <h3 color="black">IMDB</h3>
          </Link>
        </div>
      </Grid>
      <Grid>
        <Grid.Container justify="space-between" alignItems="center" gap={3}>
          <Grid>
            <svg
              width={25}
              height={25}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Grid>
          <Grid>
            <div>
              <Input placeholder="Search IMDB" width="550px" />
            </div>
          </Grid>
          <Grid justify="center" alignItems="center">
            <Link to="/films">
              <Button size="sm">Films</Button>
            </Link>
          </Grid>
          <Grid justify="center" alignItems="center">
            <Link to="/series">
              <Button size="sm">Series</Button>
            </Link>
          </Grid>
        </Grid.Container>
      </Grid>

      <Grid>
        <DarkMode theme={theme} setTheme={setTheme} />
      </Grid>
    </Grid.Container>
  );
}

export default Navbar;
