import React from 'react';
import video from '../../assets/videos/trailer_26741.mp4'
import header__banner from '../../assets/background.jpg';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
		<div>
			<div className='header__banner'>
				<div>
					<p style={{ pointerEvents: 'none', userSelect: 'none' }}>CINELIO</p>
					<p style={{ pointerEvents: 'none', userSelect: 'none' }}>
						Today, the best movies are available to you in just one click. You
						can invite your friends to your home and enjoy watching interesting
						movie novelties{' '}
					</p>
					<div>
						<a href='#movies' style={{userSelect: 'none'}}>Movies</a>
						<Link to='/favorites' style={{ backgroundColor: 'red', userSelect: 'none' }}>
							Favorites
						</Link>
					</div>
				</div>
				<video autoPlay muted loop>
					<source src={video} type='video/mp4' />
				</video>
				<img src={header__banner} alt='' />
			</div>
		</div>
	)
}
