import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import agency from '../../Assets/agency.png';
import { FiArrowUpRight } from 'react-icons/fi';

const Hero = () => {
	return (
		<Fragment>
			<div className='HeroWrapper'>
				<div className='agency'>
					<img src={agency} alt='agency' className='roundedLabel' />
				</div>
				<div className='sloganWrapper'>
					<p className='slogan'>
						<span>Enhance</span> the way to launch your business{' '}
						<span>online</span>
					</p>
				</div>
				<div className='hireBtn'>
					<Link to='/'>
						<p className='hireDev'>
							Hire a designer <FiArrowUpRight className='arrowUp' />
						</p>
					</Link>
				</div>
				<div className='para'>
					<div className='txt'>
						Get yourself <span>notified</span> & stay updated to find an{' '}
						<span>experienced professional</span> to work with.
					</div>
				</div>
				<div className='newsletter'>
					<form className='gnform'>
						<input
							type='email'
							className='emailInput'
							name='email'
							placeholder='example@gmail.com'
							id='email'
							required
							pattern='[a-z0-9._%+- ]+@[a-z0-9.-]+\.[a-z]{2,4}$'
						/>
						<button type='submit' className='notified'>
							Get notified
						</button>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

export default Hero;
