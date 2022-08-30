import PropTypes from 'prop-types'
import TrendingFilmsItem from 'components/TrendingFilmsItem';
export const TrendingFilms = ({ trendingFilms }) => {

    return (
        <ul>
            {trendingFilms.map(({ name, id }) => (
                <TrendingFilmsItem name={name} key={id} />
            ))}
        </ul>
    )
}

export default TrendingFilms;

TrendingFilms.propTypes = {
    trendingFilms: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }))
}