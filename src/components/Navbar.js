import React from "react";
import { Input, Grid, Button } from "@nextui-org/react";

function Navbar() {
  return (
    <Grid.Container gap={2} justify="center" direction="row">
      <Grid xs>
        <div>
          <h3>Navbar</h3>
        </div>
      </Grid>
      <Grid xs={4}>
        <div>
          <Input placeholder="Search IMDB" width="450px" />
        </div>
      </Grid>
      <Grid justify="center" alignItems="center">
        <div>Films</div>
      </Grid>
      <Grid justify="center" alignItems="center">
        <div>Series</div>
      </Grid>
      <Grid>
        <Button>Dark Mode</Button>
      </Grid>
    </Grid.Container>
  );
}

export default Navbar;
