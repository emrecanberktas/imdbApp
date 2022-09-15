import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, Text, Button } from "@nextui-org/react";
import { Link, Outlet } from "react-router-dom";

function Films() {
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

  const getPopularFilms = () => {
    axios
      .get(
        `
		https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setFilms(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPopularFilms();
  }, [page]);
  return (
    <div>
      <Grid.Container gap={3} justify="center" wrap="wrap" direction="row">
        {films.map((film) => {
          return (
            <Grid xs={3}>
              <Card key={film.id} css={{ width: "100%" }}>
                <Card.Image
                  src={imageBaseUrl + film.poster_path}
                  width="100%"
                  height="450px"
                  objectFit="cover"
                  style={{ display: "block" }}
                  alt="Film Poster"
                />
                <Text h4 css={{ padding: "$5 $8", lineHeight: "$sm" }}>
                  {film.title}
                </Text>
              </Card>
            </Grid>
          );
        })}
      </Grid.Container>
      <>
        {page === 1 ? (
          <Button onClick={() => setPage(page + 1)}>Next</Button>
        ) : (
          <>
            <Button onClick={() => setPage(page - 1)}>Previous</Button>
            <Button onClick={() => setPage(page + 1)}>Next</Button>
          </>
        )}
      </>
      <Outlet />
    </div>
  );
}

export default Films;
