import React from "react";
import axios from "axios";

function FilmDetails() {
  const getFilmDetails = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/?api_key=2b4d9cd70e38584279f12e85a03dc37a"
      )
      .then(console.log(getFilmDetails.data));
  };
  return <div>FilmDetails</div>;
}

export default FilmDetails;
