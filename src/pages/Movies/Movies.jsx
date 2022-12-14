export const Movies = () => {
    return (
        <form className="form">
            <button type="submit" className="button">
                <span className="button-label">Search</span>
            </button>

            <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search films"
            />
        </form>
    )
}

export default Movies;