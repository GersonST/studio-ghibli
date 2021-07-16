import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function List() {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    const getFilmList = async () => {
      try {
        const url = "https://ghibliapi.herokuapp.com/films";

        const response = await axios.get(url);
        setFilmList(response.data);

        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getFilmList();
  }, []);

  return (
    <div className="container">
      <ul className="film-list">
        {filmList.map((film) => {
          return (
            <li key={film.id}>
              <h3>{film.title}</h3>
              <p>{film.description}</p>
              <p>Director: {film.director}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
