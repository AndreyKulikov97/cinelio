import React from 'react';
import { useState } from 'react';

export default function FilterCategoryes() {

  const [status, changeSatus] = useState('Popular');
  
    let filter_categories = ['Popular', 'Novelty', 'Featured', 'Short films'];

  return (
		<div id='categoryes' className='filter__categoryes anchor'>
			<div className='filter__categoryes-flex'>
				{filter_categories.map((categorye, index) => (
					<div
						onClick={() => {
							changeSatus(categorye)
						}}
						className={`filter__categoryes-item ${
							categorye === status ? 'active-category' : ''
						}`}
						key={index}
					>
						<p>{categorye}</p>
						<span></span>
					</div>
				))}
			</div>
			<span></span>
		</div>
	)
}
