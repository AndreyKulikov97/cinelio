import React from 'react';
import FavoritesCard from './FavoritesCard';


export default function FavoritesList() {
	return (
		<div>
			<div className='top-movies'>
				<p>New movie releases</p>
				<FavoritesCard />
			</div>
		</div>
	)
}
