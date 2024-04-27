import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './SolCards.css';
import { HiArrowLongRight } from 'react-icons/hi2';

const SolCards = (props) => {
	return (
		<Fragment>
			<div className='sol_card'>
				<div className='top'>
					<div className='title'>
						<p>{props.title}</p>
					</div>
					<div className='sol_img'>
						<img src={props.img} alt='icon' className='sol_icon' />
					</div>
				</div>
				<div className='mid'>
					<div className='mid_head'>
						<p className='mid_head_txt'>{props.head}</p>
						<p className='mid_subhead'>{props.subhead}</p>
					</div>
				</div>
				<Link className='explore_btn'>
					<p>
						Explore <HiArrowLongRight className='arrowright' />
					</p>
				</Link>
			</div>
		</Fragment>
	);
};

export default SolCards;
