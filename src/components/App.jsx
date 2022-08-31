import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header, NavList, NavListItem } from "./App.styled";
import { navItems } from "./services/services.js"



export const App = () => {

  return (
    <div>
      <Header className="header">
        <NavList className="navigation">
          {navItems.map(({ href, text }) => <NavListItem key={href} className="navigation__item"><Link to={href} >{text}</Link></NavListItem>)}
        </NavList>
      </Header>
      <Routes>
        <Route path='/' element={<div>Trending films</div>}></Route>
        <Route path='movies' element={<div>Movies</div>} />
      </Routes>
    </div>
  );
};



// const [trendingFilms, setTrendingFilms] = useState([]);

// useEffect(() => {
//   fetchTrendingFilms(API)
//     .then(res => res.json())
//     .then(({ results }) => {
//       setTrendingFilms([...results.map(({ name, title, id }) => {
//         return { name: name || title, id }
//       })])

//     })
// }, [])

