import React from "react";
import axios from "axios";

function FilmDetails() {
  const getFilmDetails = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/550?api_key=2b4d9cd70e38584279f12e85a03dc37a&language=en-US"
      )
      .then((res) => {
        const filmDetails = res.data;
        console.log(filmDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getFilmDetails();
  }, []);
  return <div>FilmDetails</div>;
}

export default FilmDetails;
