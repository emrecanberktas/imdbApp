import React from "react";
import { Input, Grid, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Grid.Container gap={2} justify="center" direction="row">
      <Grid>
        <div>
          <Link to="/">
            <h3 color="black">IMDB</h3>
          </Link>
        </div>
      </Grid>
      <Grid>
        <div>DropDown</div>
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
      <Grid>
        <Button size="sm">Dark Mode</Button>
      </Grid>
    </Grid.Container>
  );
}

export default Navbar;
