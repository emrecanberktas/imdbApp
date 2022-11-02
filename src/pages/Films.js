import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Button, Spacer } from "@nextui-org/react";
import { Link, Outlet } from "react-router-dom";
import CardComponent from "../components/CardComponent";

function Films() {
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState(null);

  const getPopularFilms = () => {
    axios
      .get(
        `
		https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        setFilms(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPopularFilms();
    window.scrollTo(0, 0);
  }, [page]);

  if (!films) {
    return <div>Loading...</div>;
  }

  const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

  return (
    <div>
      <Grid.Container gap={3} justify="center" wrap="wrap" direction="row">
        {films.map((film) => {
          return (
            <Grid xs={3} key={film.id}>
              <Link to={`/films/${film.id}`}>
                <CardComponent
                  key={film.id}
                  title={film.title}
                  src={imageBaseUrl + film.poster_path}
                />
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

export default Films;
