import React, { useContext } from 'react'

import Video from '../components/Movie/Video'
import MainInfo from '../components/Movie/MainInfo/MainInfo'
import { useParams } from 'react-router-dom'


export default function Movie() {
	return (
		<div>
			<main>
				<Video />
				<MainInfo />
			</main>
		</div>
	)
}
