import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import SwiperCard from "./SwiperCard";

function TrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState(null);

  const getTrendingMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setTrendingMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);

  if (!trendingMovies) {
    return <div>Loading...</div>;
  }

  let imageBaseUrl = "https://image.tmdb.org/t/p/w300";

  return (
    <div>
      <Swiper spaceBetween={20} slidesPerView={5}>
        <Grid.Container>
          {trendingMovies.map((movie) => {
            return (
              <Grid xs={5} sm={6} key={movie.id}>
                <SwiperSlide key={movie.id}>
                  <Link to={`/home/${movie.id}`}>
                    <SwiperCard
                      src={imageBaseUrl + movie.poster_path}
                      title={movie.title}
                      vote_average={movie.vote_average}
                      id={movie.id}
                    />
                  </Link>
                </SwiperSlide>
              </Grid>
            );
          })}
        </Grid.Container>
      </Swiper>
    </div>
  );
}

export default TrendingMovies;
