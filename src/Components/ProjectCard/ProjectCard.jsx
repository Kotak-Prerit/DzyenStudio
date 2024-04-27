import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';
import { GoArrowUpRight } from 'react-icons/go';

const ProjectCard = (props) => {
	return (
		<Fragment>
			<div className='pcWrapper'>
				<div className='pcleft'>
					<div className='index'>
						<p>{props.idx}</p>
					</div>
					<div className='pcHead'>
						<img src={props.logo} alt='logo' className='projectlogo' />
					</div>
					<Link to='/'>
						<GoArrowUpRight className='redirect' />
					</Link>
				</div>
			</div>
		</Fragment>
	);
};

export default ProjectCard;
