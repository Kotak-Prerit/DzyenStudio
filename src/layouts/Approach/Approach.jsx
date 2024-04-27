import React, { Fragment } from 'react';
import './Approach.css';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';
import about from '../../Assets/about.jpg';

const Approach = () => {
	return (
		<Fragment>
			<div className='approachWrapper'>
				<div className='approachContent'>
					<p className='oa'>Our approach:</p>
					<Link to='/' className='rm'>
						read more <GoArrowUpRight className='upArrow' />
					</Link>
				</div>
				<div className='approachImg'>
					<img src={about} alt='team' className='aboutImg' />
				</div>
				<p className='line'></p>
			</div>
		</Fragment>
	);
};

export default Approach;
