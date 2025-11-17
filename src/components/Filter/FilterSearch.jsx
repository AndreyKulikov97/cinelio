import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterMovies } from '../../Redux/slices/moviesSlice';

export default function FilterSearch() {

	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const handler = setTimeout(() => {
			dispatch(filterMovies(searchTerm))
		}, 1000)
		return () => clearTimeout(handler)
	}, [searchTerm, dispatch])

	return (
		<div className='filter__search'>
			<input
				type='text'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				placeholder='Search...'
			/>
			<button>
				<i className='fa fa-search'></i>
			</button>
		</div>
	)
}
