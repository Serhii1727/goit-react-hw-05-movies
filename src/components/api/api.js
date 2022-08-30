export const API = {
    key: "7854f1c397fffef57ccff8d2ed97b905",
    requestAPI: "https://api.themoviedb.org",
    trending: "/trending",
    searchMovies: "/search/search-movies",
    moviesDetails: "/movies/get-movie-details",
    moviesCredits: "/movies/get-movie-credits",
    moviesReviews: "/movies/get-movie-reviews"
}

export const fetchTrendingFilms = (objAPI) => {
    const { requestAPI, trending, key } = objAPI;
    return fetch(`${requestAPI}/3${trending}/all/day?api_key=${key}`)
} 