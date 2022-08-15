import React, { useEffect } from "react";
import axios from "axios";

function Series() {
  const getFilmDetails = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/550?api_key=2b4d9cd70e38584279f12e85a03dc37a&language=en-US"
      )
      .then((res) => {
        console.log("burdayım" + res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getFilmDetails();
  }, []);

  return <div>Series</div>;
}

export default Series;
