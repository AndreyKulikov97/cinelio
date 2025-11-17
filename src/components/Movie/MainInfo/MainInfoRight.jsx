import React from 'react'

export default function MainInfoRight(props) {
	const dataFilm = props.filmInfo.film;
	
	return (
		<div className='main__info-right'>
			<div className='main__info-rigth-info'>
				<div>
					<p>Type:</p>
					<p>{dataFilm.aboutInfo[0]}</p>
				</div>
				<div>
					<p>Director:</p>
					<p>{dataFilm.aboutInfo[1]}</p>
				</div>
				<div>
					<p>Date aired:</p>
					<p>{dataFilm.aboutInfo[2]}</p>
				</div>
				<div>
					<p>Duration:</p>
					<p>{dataFilm.aboutInfo[3]} min</p>
				</div>
			</div>
		</div>
	)
}
