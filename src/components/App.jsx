import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import TrendingFilms from "./TrendingFilms";
import { fetchTrendingFilms } from "components/api/api";
import { API } from "components/api/api";

export const App = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    fetchTrendingFilms(API)
      .then(res => res.json())
      .then(({ results }) => {
        setTrendingFilms([...results.map(({ name, title, id }) => {
          return { name: name || title, id }
        })])

      })
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Trending today</h1>
      <TrendingFilms trendingFilms={trendingFilms} />
    </div>
  );
};
