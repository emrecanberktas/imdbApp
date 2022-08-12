import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, Text } from "@nextui-org/react";

function Films() {
  const [page, setPage] = React.useState(1);
  const [films, setFilms] = React.useState([]);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

  const getPopularFilms = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=2b4d9cd70e38584279f12e85a03dc37a&language=en-US&page=${page}`
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
      {films.map((film) => {
        return (
          <Grid.Container gap={2} justify="center" wrap="wrap" direction="row">
            <Grid xs={4}>
              <Card key={film.id}>
                <Text h3>{film.title}</Text>
                <img src={imageBaseUrl + film.poster_path} width="250px"></img>
              </Card>
            </Grid>
          </Grid.Container>
        );
      })}
    </div>
  );
}

export default Films;
