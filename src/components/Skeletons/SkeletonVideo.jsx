import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonVideo = props => (
	<ContentLoader
		speed={2}
		width={1238}
		height={700}
		viewBox='0 0 1238 700'
		backgroundColor='#696969'
		foregroundColor='#bababa'
		{...props}
	>
		<rect x='0' y='0' rx='10' ry='10' width='1024' height='700' />
	</ContentLoader>
)

export default SkeletonVideo
