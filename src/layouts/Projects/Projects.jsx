import React, { Fragment } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { LuArrowRight } from 'react-icons/lu';
import pepsi from '../../Assets/pepsi.jpg';
import redbull from '../../Assets/redbull.png';
import nike from '../../Assets/nike.jpg';
import porsche from '../../Assets/porsche.png';
import apsara from '../../Assets/apsara.png';
import spidy from '../../Assets/spidy.png';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

const Projects = () => {
	const projects = [
		{
			img: pepsi,
		},
		{
			img: redbull,
		},
		{
			img: nike,
		},
		{
			img: porsche,
		},
		{
			img: apsara,
		},
		{
			img: spidy,
		},
	];

	return (
		<Fragment>
			<div className='projectsWrapper'>
				<div className='projectHead'>
					<p>A Glimpse to our Projects</p>
					<Link to='/' className='moreProjects'>
						More projects <LuArrowRight className='arrowRight' />
					</Link>
				</div>
				<div className='projectBox'>
					{projects.map((project, index) => {
						return (
							<Link to='/' className='projectAnchor' key={index}>
								<ProjectCard logo={project.img} idx={'0' + index} />
							</Link>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default Projects;
