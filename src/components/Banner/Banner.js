import React, {useEffect, useState} from "react";
import "./Banner.css";
import { API_KEY, imageUrl } from "../../constants/constants";
import axios from "../../axios";

function Banner() {
  const no = ()=> Math.floor(Math.random() * 20)
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
    ).then((response)=>{
      setMovie(response.data.results[no()])
    })
  }, []);

  return (
    <div style={{backgroundImage: `url(${imageUrl+movie?.backdrop_path})`}}
    className="banner">
      <div className="content">
        <h1 className="title">{(movie?.title) || (movie?.orginal_title) || (movie?.original_name)}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
          {movie?.overview}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
