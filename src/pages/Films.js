import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, Text, Button } from "@nextui-org/react";

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
      <Grid.Container gap={2} justify="center" wrap="wrap" direction="row">
        {films.map((film) => {
          return (
            <Grid xs={3}>
              <Card key={film.id} css={{ mw: "250px" }}>
                <Text h3>{film.title}</Text>
                <Card.Image
                  src={imageBaseUrl + film.poster_path}
                  width="250px"
                  height="100%"
                  objectFit="cover"
                  style={{ borderRadius: "5%" }}
                  alt="Film Poster"
                />
              </Card>
            </Grid>
          );
        })}
      </Grid.Container>
      <Button>{page + 1}</Button>
      <Button>{page - 1}</Button>
    </div>
  );
}

export default Films;
