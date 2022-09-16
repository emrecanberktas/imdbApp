import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function FilmDetails(id) {
  const [film, setFilm] = React.useState({});
  let { filmId } = useParams();

  const getFilmDetails = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${filmId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        setFilm(res.data);
        console.log("filmData" + res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getFilmDetails();
  }, [filmId]);

  return (
    <div>
      <h1>{film.title}</h1>
      <div>{film.release_date}</div>
      <div>{film.run_time}</div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
          alt="Film Poster"
        />
      </div>
      <div>
        {film.genres.map((genre) => {
          return <div>{genre.name}</div>;
        })}
      </div>
    </div>
  );
}

export default FilmDetails;
