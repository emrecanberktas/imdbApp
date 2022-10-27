import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function TrendingSeries() {
  const [trendingSeries, setTrendingSeries] = useState(null);

  const getTrendingSeries = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setTrendingSeries(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTrendingSeries();
  }, []);

  if (!trendingSeries) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Swiper spaceBetween={20} slidesPerView={5}>
        <Grid.Container>
          {trendingSeries.map((serie) => {
            return (
              <Grid xs={5} sm={6} key={serie.id}>
                <SwiperSlide>
                  <Card>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`}
                        alt={serie.title}
                        objectFit="cover"
                        width="100%"
                        height={350}
                      />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                      <Row justify="space-between" align="center">
                        <Text b>{serie.name}</Text>
                        <Text
                          css={{
                            color: "$accents7",
                            fontweight: "$semibold",
                            fontsize: "$sm",
                          }}
                        >
                          {serie.vote_average.toFixed(1)}
                        </Text>
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

export default TrendingSeries;
