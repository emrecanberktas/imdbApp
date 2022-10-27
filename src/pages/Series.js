import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, Text, Button, Spacer } from "@nextui-org/react";
import { Link, Outlet } from "react-router-dom";

function Series() {
  const [page, setPage] = useState(1);
  const [series, setSeries] = useState(null);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

  const getPopularSeries = () => {
    axios
      .get(
        `
		https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setSeries(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPopularSeries();
    window.scrollTo(0, 0);
  }, [page]);
  if (!series) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Grid.Container gap={3} justify="center" wrap="wrap" direction="row">
        {series.map((series) => {
          return (
            <Grid xs={3}>
              <Link to={`/series/${series.id}`}>
                <Card key={series.id} isHoverable css={{ width: "100%" }}>
                  <Card.Image
                    src={imageBaseUrl + series.poster_path}
                    width="100%"
                    height="450px"
                    objectFit="cover"
                    style={{ display: "block" }}
                    alt="Series Poster"
                  />
                  <Text h4 css={{ padding: "$5 $8", lineHeight: "$sm" }}>
                    {series.name}
                  </Text>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid.Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {page === 1 ? (
          <Button onClick={() => setPage(page + 1)}>Next</Button>
        ) : (
          <>
            <Button onClick={() => setPage(page - 1)}>Previous</Button>
            <Button
              css={{ marginLeft: "$11" }}
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </>
        )}
      </div>
      <Outlet />
      <Spacer />
    </div>
  );
}

export default Series;
