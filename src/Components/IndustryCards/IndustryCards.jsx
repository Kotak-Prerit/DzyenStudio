import React, { Fragment } from 'react';
import { LuArrowRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import './IndustryCards.css';

const IndustryCards = (props) => {
	return (
		<Fragment>
			<div className='ind_crd_wrapper'>
				<div className='ind_card_head'>
					<img src={props.icons} alt='icon' className='ind_icon' />
					<Link to='/' className='ind_title_wrapper'>
						<p className='ind_title'>{props.title}</p>
						<LuArrowRight className='ind_arrow' />
					</Link>
				</div>
				<div className='criteria'>
					{props.criteria.map((field, index) => {
						return (
							<Link to='/' key={index}>
								<p className='field'>{field}</p>
							</Link>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default IndustryCards;
