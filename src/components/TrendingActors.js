import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function TrendingActors() {
  const [trendingActors, setTrendingActors] = useState(null);

  const getTrendingActors = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setTrendingActors(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTrendingActors();
  }, []);

  if (!trendingActors) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Swiper spaceBetween={20} slidesPerView={5}>
        <Grid.Container>
          {trendingActors.map((actor) => {
            return (
              <Grid xs={5} sm={6} key={actor.id}>
                <SwiperSlide key={actor.id}>
                  <Card>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                        alt={actor.name}
                        objectFit="cover"
                        width="100%"
                        height={350}
                      />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                      <Row justify="space-between" align="center">
                        <Text b>{actor.name}</Text>
                      </Row>
                    </Card.Footer>
                  </Card>
                </SwiperSlide>
              </Grid>
            );
          })}
        </Grid.Container>
      </Swiper>
    </div>
  );
}

export default TrendingActors;
