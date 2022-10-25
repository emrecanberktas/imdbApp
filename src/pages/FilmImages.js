import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function FilmImages() {
  const [filmImages, setFilmImages] = useState([]);
  let { filmId } = useParams();

  const getFilmImages = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/436270/images?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        setFilmImages(res.data.posters);
        console.log({ filmImages });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFilmImages();
  }, []);

  return <div>asd</div>;
}

export default FilmImages;
