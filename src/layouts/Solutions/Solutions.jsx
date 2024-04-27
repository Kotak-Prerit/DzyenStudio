import React, { Fragment } from 'react';
import './Solutions.css';
import mvp from '../../Assets/MVP.png';
import pd from '../../Assets/productDesign.png';
import te from '../../Assets/teamExtension.png';
import SolCards from '../../Components/Sol_cards/SolCards';

const cards = [
	{
		title: 'for startups',
		img: mvp,
		head: 'MVP Design',
		subhead: 'Create a digital product, attract investors and new clients',
		index: '1',
	},
	{
		title: 'for startups & existing companies',
		img: pd,
		head: 'Product Redesign',
		subhead:
			'Get a fresh look, improved user experience, or enhanced functionality',
		index: '2',
	},
	{
		title: 'for existing companies',
		img: te,
		head: 'Team Extension',
		subhead: 'Expand your team with our dedicated and talented design experts',
		index: '3',
	},
];

const Solutions = () => {
	return (
		<Fragment>
			<div className='solutions'>
				<div className='sol_head_wrapper'>
					<h1 className='sol_head'>Our Solutions</h1>
					<p className='sol_txt'>
						Whether you're aiming to craft your initial MVP to secure funding,
						re-design your product for enhanced business performance, or enlist
						a remote design team to accelerate growth - our team of product
						designers is ready to assist you every step of the way.
					</p>
				</div>
				<div className='sol_cards_wrapper'>
					{cards.map((card, index) => {
						return (
							<SolCards
								key={index}
								title={card.title}
								img={card.img}
								head={card.head}
								subhead={card.subhead}
							/>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default Solutions;
