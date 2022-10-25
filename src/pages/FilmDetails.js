import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, Outlet } from "react-router-dom";
import { Image, Button, Grid, Card, Spacer, Text } from "@nextui-org/react";

function FilmDetails(id) {
  const [film, setFilm] = useState([]);
  const [filmHours, setFilmHours] = useState([]);
  const [filmMinutes, setFilmMinutes] = useState([]);
  const [filmYoutubeTrailerKey, setfilmYoutubeTrailerKey] = useState([]);

  let { filmId } = useParams();

  const getFilmDetails = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${filmId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        setFilm(res.data);
        // setFilmHours(Math.floor(film.runtime / 60));
        // setFilmMinutes(film.runtime % 60);

        console.log({ film });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Get Youtube Trailer Key
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
    filmTrailer();
  }, []);

  console.log({ film });

  return (
    <div>
      <h1 style={{ fontWeight: "700" }}>{film.title}</h1>
      <div style={{ display: "flex", displayDirection: "row" }}>
        <ul>
          <h5>{film.release_date}</h5>
          {/* <h5>
            {filmHours}h{filmMinutes}m
          </h5> */}
        </ul>
      </div>

      <Grid.Container css={{ display: "flex" }}>
        <Grid>
          <Image
            css={{ width: "100%" }}
            height={384}
            src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
            alt="Film Poster"
          />
        </Grid>
        <Grid css={{ marginLeft: "$3" }}>
          <iframe
            width="250%"
            height="100%"
            src={`https://www.youtube.com/embed/${filmYoutubeTrailerKey}`}
            title="Film Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </Grid>
        <div>
          <Grid>
            <Link to={`/films/${film.id}/videos`}>
              <Button
                css={{
                  width: 145,
                  height: 190,
                  color: "white",
                  borderRadius: "3%",
                  marginBottom: "5px",
                  marginLeft: "240%",
                  background: "#1a1a1a",
                }}
              >
                Videos
              </Button>
            </Link>
          </Grid>
          <Grid>
            <Link to={`/films/${film.id}/images`}>
              <Button
                css={{
                  width: 145,
                  height: 190,
                  color: "white",
                  background: "#1a1a1a",
                  borderRadius: "3%",
                  marginTop: "1px",
                  marginLeft: "240%",
                }}
              >
                Images
              </Button>
            </Link>
          </Grid>
        </div>
      </Grid.Container>
      <Spacer />

      <div style={{ display: "flex" }}>
        {film.genres?.map((genre) => {
          return (
            <ul display={{ border: "solid black" }} key={genre.id}>
              {genre.name}
            </ul>
          );
        })}
      </div>
      <Spacer />
      <div css={{ width: "50%", display: "flex" }}>
        <Text h3>Overview</Text>
        {film.overview}
      </div>
      <br />

      <div css={{ width: "50%" }}>
        <Text h3>Production Companies </Text>
        {film.production_companies?.map((company) => {
          return <div key={company.id}>{company.name} </div>;
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default FilmDetails;
