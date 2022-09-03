import { useState, useEffect } from 'react'
import { Link, Outlet, useParams } from "react-router-dom";
import { API, getMovieDetails } from "components/api/api";

export const MovieDetails = () => {
    const [currentFilm, setCurrentFilm] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        getMovieDetails(API, movieId)
            .then(({ genres, id, overview, popularity, poster_path, release_date, title }) =>
                setCurrentFilm({ genres, id, overview, popularity, poster_path, release_date, title }))
    }, [movieId])

    const { poster_path, title, release_date, overview, genres } = currentFilm;
    const date = new Date(release_date)
    const releaseDate = date.getFullYear()

    return (
        <div>
            <button type="button">Go back</button>
            <div>
                <img src={API.imageURL + poster_path} alt={title} width={300} height={400} />
                <h1>{title} ({releaseDate})</h1>
                <p></p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Generes</h3>
                {genres && genres.map(item => (<span key={item.name}>{item.name}</span>))}
            </div>
            <div>
                <h4>Additional information</h4>
                <ul>
                    <li><Link to="cast">Cast</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                    <Outlet />
                </ul>
            </div>
        </div>
    )
}

export default MovieDetails