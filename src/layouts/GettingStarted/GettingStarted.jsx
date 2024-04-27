import React, { Fragment } from 'react';
import './GettingStarted.css';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';

const GettingStarted = () => {
	return (
		<Fragment>
			<div className='gsWrapper'>
				<div className='gsHead'>
					<span>ready</span> <br />
					<span>to start</span> <br />
					<span>the project?</span>
				</div>
				<Link to='/' className='letsStart'>
					lets get started <GoArrowUpRight className='upArrow' />
				</Link>
				<p className='or'>or</p>
				<Link to='/' className='gsEmail'>
					infodzyen@gmail.com <GoArrowUpRight className='upArrow' />
				</Link>
			</div>
		</Fragment>
	);
};

export default GettingStarted;
