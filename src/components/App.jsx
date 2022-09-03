import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import Cast from "./Cast";
import { Header, NavList, NavListItem } from "./App.styled";
import { getTrendingFilms, API } from "./api/api";
import { navItems } from "./services/services.js"


export const App = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);


  useEffect(() => {
    getTrendingFilms(API)
      .then(res => res.json())
      .then(({ results }) => {
        setTrendingFilms([...results.map(({ name, title, id }) => {
          return { name: name || title, id }
        })])
      })
  }, [])


  return (
    <div>
      <Header className="header">
        <NavList className="navigation">
          {navItems.map(({ href, text }) => <NavListItem key={href} className="navigation__item"><Link to={href} >{text}</Link></NavListItem>)}
        </NavList>
      </Header>
      <Routes>
        <Route path='/' element={<Home trendingFilms={trendingFilms} />}></Route>
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<div>Это reviews</div>} />
        </Route>
      </Routes>
    </div>
  );
};


