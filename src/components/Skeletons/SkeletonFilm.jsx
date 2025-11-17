import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonFilm = props => (
	<ContentLoader
		speed={2}
		width={130}
		height={200}
		viewBox='0 0 130 200'
		backgroundColor='#696969'
		foregroundColor='#bababa'
		{...props}
	>
		<rect x='94' y='137' rx='0' ry='0' width='1' height='0' />
		<rect x='0' y='0' rx='10' ry='10' width='130' height='200' />
	</ContentLoader>
)

export default SkeletonFilm
