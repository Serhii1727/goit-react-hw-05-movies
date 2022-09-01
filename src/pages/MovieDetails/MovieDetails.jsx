import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { API, getMovieDetails } from "components/api/api";

export const MovieDetails = () => {
    const [currentFilm, setCurrenyFilm] = useState({})
    const { movieId } = useParams();

    useEffect(() => {
        getMovieDetails(API, movieId)
            .then(data => setCurrenyFilm(data))
    }, [movieId])



    const { poster_path, title, release_date } = currentFilm;
    const date = new Date(release_date)
    const releaseDate = date.getFullYear()



    return (
        <div>
            <button type="button">Go back</button>
            <div>
                <img src={API.imageURL + poster_path} alt="" width={100} height={200} />
                <h1>{title} ({releaseDate})</h1>
                <p></p>
                <h2></h2>
                <p></p>
                <h3></h3>
                <p></p>
            </div>
        </div>
    )
}

export default MovieDetails