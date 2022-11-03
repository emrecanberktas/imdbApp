import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCard from "./SwiperCard";

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

  let imageBaseUrl = "https://image.tmdb.org/t/p/w300";

  return (
    <div>
      <Swiper spaceBetween={20} slidesPerView={5}>
        <Grid.Container>
          {trendingSeries.map((serie) => {
            return (
              <Grid xs={5} sm={6} key={serie.id}>
                <SwiperSlide key={serie.id}>
                  <SwiperCard
                    src={imageBaseUrl + serie.poster_path}
                    title={serie.name}
                    vote_average={serie.vote_average}
                    id={serie.id}
                  />
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
