import React, { useState, useEffect } from "react";
import axios from "axios";

function Films() {
  const [page, setPage] = React.useState(1);
  const [films, setFilms] = React.useState([]);
  const getPopularFilms = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=2b4d9cd70e38584279f12e85a03dc37a&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res);
        setFilms(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPopularFilms();
  }, [page]);
  return <div>{}Films</div>;
}

export default Films;
