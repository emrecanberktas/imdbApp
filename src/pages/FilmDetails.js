import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function FilmDetails(id) {
  const [film, setFilm] = React.useState({});
  let { filmId } = useParams();
  console.log(filmId);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${filmId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        console.log(res.data);
        setFilm(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filmId]);

  return <div>{filmId}</div>;
}

export default FilmDetails;
