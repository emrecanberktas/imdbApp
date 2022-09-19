import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function FilmDetails(id) {
  const [film, setFilm] = React.useState([]);
  const [filmHours, setFilmHours] = React.useState([]);
  const [filmminutes, setFilmMinutes] = React.useState([]);
  const [filmYoutubeTrailerKey, setfilmYoutubeTrailerKey] = React.useState([]);

  let { filmId } = useParams();

  const getFilmDetails = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${filmId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        setFilm(res.data);
        console.log({ film });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filmTrailer = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        setfilmYoutubeTrailerKey(res.data.results[0].key);
        console.log(res.data.results[0].key);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFilmDetails();
    setFilmHours(Math.floor(film.runtime / 60));
    setFilmMinutes(film.runtime % 60);
    filmTrailer();
  }, []);

  console.log({ film });

  return (
    <div>
      <h1>{film.title}</h1>
      <div>
        {filmHours}h{filmminutes}m
      </div>
      <div>{film.runtime}</div>
      <div>{film.release_date}</div>
      <div style={{ margin: "0 50" }}>
        <img
          width="256"
          height="384"
          src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
          alt="Film Poster"
        />
        <iframe
          width="640"
          height="384"
          src={`https://www.youtube.com/embed/${filmYoutubeTrailerKey}`}
          title="Film Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>

      <div>
        {film.genres?.map((genre) => {
          return <div key={genre.id}>{genre.name}</div>;
        })}
      </div>
      <div>{film.overview}</div>

      <div>
        {film.production_companies?.map((company) => {
          return <div key={company.id}>{company.name}</div>;
        })}
      </div>
    </div>
  );
}

export default FilmDetails;
