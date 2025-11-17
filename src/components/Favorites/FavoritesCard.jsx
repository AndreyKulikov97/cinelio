import React from 'react';
import imgFilm from '../../assets/run_laberint.jpg';

export default function FavoritesCard() {
	const topMovie = [
		{
			title: 'Смерть единорога',
			imageUrl: 'https://u.kinogo.online/uploads/mini/fullstory/538/3e91af072caccfaf6d9755521f832.webp',
			editor: 'Алекс Шарфман',
			type: 'Film',
			year: 2025,
			time: 104,
			grade: 6.2,
			id:1
		},
		{
			title: 'Рэкетир. Новые времена',
			imageUrl: 'https://u.kinogo.online/uploads/mini/fullstory/27a/1a3033f79627384aa4be5921325e1.webp',
			editor: 'Акан Сатаев',
			type: 'Film',
			year: 2025,
			time: 90,
			grade: 6.4,
			id:2
		},
		{
			title: 'Микки 17',
			imageUrl: 'https://u.kinogo.online/uploads/mini/fullstory/9b4/52203aac8f8ff0ea127b339f1c9e7.webp',
			editor: 'Пон Джун-хо',
			type: 'Film',
			year: 2025,
			time: 139,
			grade: 6.8,
			id:3
		},
	]
	return (
			<div className='top-movies__card'>
				{/* <div className='top-movies__card-padding'>
					<img src={imgFilm} alt='' />
					<div className='top-movies__card-info'>
						<div className='top-movies__card-info-title'>
							<p>Бегущий по лезвию 2049</p>
							<p>Ридли Скотт</p>
						</div>
						<div className='top-movies__card-info-description'>
							<p>Film</p>
							<p>2019</p>
							<p>180m</p>
							<p>9.1</p>
						</div>
					</div>
				</div> */}
				{topMovie.map(item => (
					<div key={item.id} className='top-movies__card-padding'>
						<img src={item.imageUrl} />
						<div className='top-movies__card-info'>
							<div className='top-movies__card-info-title'>
								<p>{item.title}</p>
								<p>{item.editor}</p>
							</div>
							<div className='top-movies__card-info-description'>
								<p>{item.type}</p>
								<p>{item.year}</p>
								<p>{item.time}m</p>
								<p>{item.grade}</p>
							</div>
						</div>
					</div>
				))}
			</div>
	)
}
