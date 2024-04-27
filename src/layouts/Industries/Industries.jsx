import React, { Fragment } from 'react';
import './Industries.css';
import IndustryCards from '../../Components/IndustryCards/IndustryCards';
import icon from '../../Assets/productDesign.png';

const Industries = () => {
	const industries = [
		{
			icons: icon,
			title: 'SaaS',
			criteria: ['CRM', 'HR', 'AI', 'ERP', 'Automation Tools'],
		},
		{
			icons: icon,
			title: 'Fintech',
			criteria: ['Banking', 'Exchanges', 'Digital Payments'],
		},
		{
			icons: icon,
			title: 'Healthcare',
			criteria: ['Mental Health', 'Wellness', 'Insurance', 'Fitness'],
		},
		{
			icons: icon,
			title: 'E-commerce',
			criteria: ['Marketplace', 'Retail', 'B2C', 'B2B'],
		},
	];

	return (
		<Fragment>
			<div className='Industries_Wrapper'>
				<h1 className='Ind_head'>We have broad industry expertise.</h1>
				<p className='ind_subhead'>
					Our engineers have completed projects in various niches and know how
					to bring business value and provide personalized software solutions
					for your digital product.
				</p>

				<div className='industries_cards'>
					{industries.map((ind, index) => {
						return (
							<IndustryCards
								key={index}
								icons={ind.icons}
								title={ind.title}
								criteria={ind.criteria}
							/>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default Industries;
