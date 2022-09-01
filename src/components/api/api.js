export const API = {
    key: "7854f1c397fffef57ccff8d2ed97b905",
    requestAPI: "https://api.themoviedb.org/3",
    trending: "/trending",
    imageURL: "https://image.tmdb.org/t/p/w500",
    searchMovies: "/search/search-movies",
    moviesDetails: "/movies/",
    moviesCredits: "/movies/get-movie-credits",
    moviesReviews: "/movies/get-movie-reviews"
}

export const getTrendingFilms = (objAPI) => {
    const { requestAPI, trending, key } = objAPI;
    return fetch(`${requestAPI}${trending}/all/day?api_key=${key}`)
}

export const getMovieDetails = (objAPI, id) => {
    const { requestAPI, key } = objAPI;
    return fetch(`${requestAPI}/movie/${id}?api_key=${key}&language=en-US`)
        .then(res => res.json())
}