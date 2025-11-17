import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchCategoryesFilms } from '../../Redux/slices/moviesSlice'

export default function FilterButtons() {
	
	const dispatch = useDispatch();
	const { filmsCategory } = useSelector(store => store.movies)

	const [active, changeActive] = useState('All')

	function categoryButtonLogic(value) {
		changeActive(value);
		dispatch(searchCategoryesFilms(value))
	}

	return (
		<div className='filter__buttons'>
			<button
				onClick={() => categoryButtonLogic('All')}
				className={active === 'All' ? 'active' : ''}
			>
				All
			</button>
			{filmsCategory.map((value, index) => (
				<button
					key={index}
					className={value === active ? 'active' : ''}
					onClick={() => {
						categoryButtonLogic(value)
					}}
				>
					{value}
				</button>
			))}
		</div>
	)
}
