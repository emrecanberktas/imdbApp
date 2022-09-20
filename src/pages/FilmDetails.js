import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Image, Button, Grid, Card } from "@nextui-org/react";

function FilmDetails(id) {
  const [film, setFilm] = React.useState([]);
  const [filmHours, setFilmHours] = React.useState([]);
  const [filmMinutes, setFilmMinutes] = React.useState([]);
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
        setFilmHours(Math.floor(film.runtime / 60));
        setFilmMinutes(film.runtime % 60);
        console.log(res.data.results[0].key);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFilmDetails();
    filmTrailer();
  }, []);

  console.log({ film });

  return (
    <div>
      <h1>{film.title}</h1>
      <ul>
        <li>{film.release_date}</li>
        <li>
          {filmHours}h{filmMinutes}m
        </li>
      </ul>

      <Grid.Container>
        <div>
          <Image
            css={{ width: "100%" }}
            height={384}
            src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
            alt="Film Poster"
          />
        </div>
        <Grid css={{ marginLeft: "$3" }}>
          <iframe
            width="250%"
            height="100%"
            src={`https://www.youtube.com/embed/${filmYoutubeTrailerKey}`}
            title="Film Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          <Grid>
            <Button>Videos</Button>
          </Grid>
          <Grid>
            <Button>Photos</Button>
          </Grid>
        </Grid>
      </Grid.Container>

      <div>
        {film.genres?.map((genre) => {
          return <Button key={genre.id}>{genre.name}</Button>;
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
