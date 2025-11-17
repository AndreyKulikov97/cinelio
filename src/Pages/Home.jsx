import React from 'react'
import Banner from '../components/Home/Banner'
import Filter from '../components/Filter/Filter'
import MoviesList from '../components/Movies/MoviesList'
import MoviesScroll from '../components/Movies/MoviesScroll'


export default function Home() {
	return (
		<div>
			<Banner />
			<div className='container'>
				<Filter />
				<MoviesList />
				<MoviesScroll />
			</div>
		</div>
	)
}
