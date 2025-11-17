import MoviesCard from './MoviesCard'

const FavoriteMoviesList = ({ favorites }) => {
	console.log(favorites)
	// favoritesMovies, filteredMovies, filteredMoviesCategoryes
	let moviesToShow = []

	if (favorites.filteredMovies.length > 0) {
		moviesToShow = favorites.filteredMovies.filter(searchFilms => {
			return favorites.favoritesMovies.some(
				searchTitle => searchTitle.title === searchFilms.title
			)
		})
	} else if (favorites.filteredMoviesCategoryes.length > 0) {
		moviesToShow = favorites.filteredMoviesCategoryes.filter(searchFilms => {
			return favorites.favoritesMovies.some(
				searchTitle => searchTitle.title === searchFilms.title
			)
		})
    } else if (favorites.favoritesMovies.length === 0) {
        return <p style={{ color: 'white', fontSize: 40 }}>У вас нет избранных фильмов</p>
    } else {
		moviesToShow = favorites.favoritesMovies
	}

	// if (favorites.favoritesMovies.length === 0) {
	// 	return <p>У вас нет избранных фильмов</p>
	// }
	return moviesToShow.map((value, index) => (
		<MoviesCard key={index} {...value} />
	))
}

export default FavoriteMoviesList
