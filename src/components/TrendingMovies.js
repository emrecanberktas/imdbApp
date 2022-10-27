import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";

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

  return (
    <div>
      <Swiper spaceBetween={20} slidesPerView={5}>
        <Grid.Container>
          {trendingMovies.map((movie) => {
            return (
              <Grid xs={5} sm={6} key={movie.id}>
                <SwiperSlide>
                  <Link to={`/home/${movie.id}`}>
                    <Card isHoverable>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                          alt={movie.title}
                          objectFit="cover"
                          width="100%"
                          height={350}
                        />
                      </Card.Body>
                      <Card.Footer css={{ justifyItems: "flex-start" }}>
                        <Row justify="space-between" align="center">
                          <Text b>{movie.title}</Text>
                          <Text
                            css={{
                              color: "$accents7",
                              fontweight: "$semibold",
                              fontsize: "$sm",
                            }}
                          >
                            {movie.vote_average.toFixed(1)}
                          </Text>
                        </Row>
                      </Card.Footer>
                    </Card>
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
