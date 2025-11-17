import React from 'react'
import Rating from '../Rating'
import { useDispatch, useSelector } from 'react-redux';
import { addFavoritesMovie, removeFavoritesMovie } from '../../../Redux/slices/favoriteSlice';


export default function MainInfoLeft(props) {
	const dataFilm = props.filmInfo.film
	const dispatch = useDispatch()

	// Получаем список избранных фильмов
	const favorites = useSelector(state => state.favorites.favoritesMovies)

	// Проверяем, есть ли фильм в списке избранного
	const isFavorite = favorites.some(movie => movie.id === dataFilm.id)


	return (
		<div className='main__info-left'>
			<div className='main__info-left-favorite-btn'>
				<button
					className={`main__info-left-favorite ${isFavorite ? 'green' : ''}`}
					onClick={() => dispatch(addFavoritesMovie(dataFilm))}
				>
					{!isFavorite ? 'Add in Favorite' : '✔ in Favorites'}
				</button>
				<button
					className={`main__info-left-favorite ${!isFavorite ? 'red' : ''}`}
					onClick={() => dispatch(removeFavoritesMovie(dataFilm))}
				>
					{isFavorite ? 'Unfavorite' : '✖ Out of favor'}
				</button>
			</div>
			<div className='main__info-left-title'>
				<p>{dataFilm.title}</p>
				<Rating />
			</div>
			<div className='main__info-left-categoryes'>
				{dataFilm.categoryes.map((value, index) => (
					<>
						<p key={index}>{value}</p>
					</>
				))}
			</div>
			<div className='main__info-left-about'>
				<p>{dataFilm.description}</p>
			</div>
		</div>
	)
}
