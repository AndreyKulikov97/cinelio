import React from 'react'
import img_404 from '../assets/not_found.png'

export default function NotFound() {
  return (
		<div className='not_found_wrapper'>
			<div className='not_found_container'>
				<p className='not_found_title'>404</p>
				<p className='not_found_sub_title'>Not Found</p>
				<p className='not_found_des'>
					The link leads to a page that does not exist. The page has been
					deleted or the URL has been changed (e.g., the page name has been
					changed)
				</p>
			</div>
			<img className='not_found_img' src={img_404} alt='' />
		</div>
	)
}
