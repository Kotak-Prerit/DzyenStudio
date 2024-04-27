import React, { Fragment } from 'react';
import './Navbar.css';
import logoBlack from '../../Assets/logoBlack.png';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ServiceCard from '../../Components/serviceDeck/ServiceCard';
import search from '../../Assets/productDiscovery.png';
import ui from '../../Assets/uiConcept.png';
import ux from '../../Assets/uxAudit.png';
import pitch from '../../Assets/pitchDeck.png';
import uiux from '../../Assets/ui-ux.png';
import website from '../../Assets/webDesign.png';
import bi from '../../Assets/brand-identity.png';
import graphic from '../../Assets/graphic.png';
import webDev from '../../Assets/webDev.png';
import app from '../../Assets/appDev.png';
import landing from '../../Assets/landing.png';

const Navbar = () => {
	const Strategy = [
		{
			img: search,
			name: 'Product Discovery',
			overview: 'Research & product architecture',
		},
		{
			img: ui,
			name: 'UI Concept',
			overview: 'Define the unique style & visual',
		},
		{
			img: ux,
			name: 'UX Audit',
			overview: 'Make your product competitive',
		},
		{
			img: pitch,
			name: 'Pitch Deck',
			overview: 'Winning investor presentation',
		},
	];
	const Design = [
		{
			img: uiux,
			name: 'UI/UX Design',
			overview: 'Web & Mobile App Design',
		},
		{
			img: website,
			name: 'Web Design',
			overview: 'Custom Wesites, Landing page',
		},
		{
			img: bi,
			name: 'Brand Identity',
			overview: 'Logo,Typography,Color',
		},
		{
			img: graphic,
			name: 'Graphic Design',
			overview: 'Illustrations,Icons,Social media',
		},
	];
	const Development = [
		{
			img: webDev,
			name: 'Website Development',
			overview: 'Front-End & Back-End Development',
		},
		{
			img: app,
			name: 'Mobile Development',
			overview: 'Android, IOS, Cross-platform',
		},
		{
			img: landing,
			name: 'Landing page',
			overview: 'High-converting website',
		},
	];

	return (
		<Fragment>
			<div className='navbar'>
				<Link to='/'>
					<img className='logo' src={logoBlack} alt='logo' />
				</Link>
				<div className='linksContainer'>
					<li className='links'>
						<Link to='/' className='link'>
							Works
						</Link>
					</li>
					<li className='links serviceLnk'>
						<p to='/' className='link'>
							Services <MdKeyboardArrowDown className='arrow' />
						</p>
						<div className='Services'>
							<div className='serviceTagWrapper'>
								<p className='serviceTag'>services</p>
							</div>
							<div className='servicesWrapper'>
								<div className='strategy'>
									<p className='strategyTxt'>Strategy</p>
									<div className='strategyCards'>
										{Strategy.map((strategy, index) => {
											return (
												<Link to='/' key={index}>
													<ServiceCard
														// key={index}
														img={strategy.img}
														name={strategy.name}
														overview={strategy.overview}
													/>
												</Link>
											);
										})}
									</div>
								</div>
								<div className='design'>
									<p className='designTxt'>design</p>
									<div className='strategyCards'>
										{Design.map((design, index) => {
											return (
												<Link to='/' key={index}>
													<ServiceCard
														// key={index}
														img={design.img}
														name={design.name}
														overview={design.overview}
													/>
												</Link>
											);
										})}
									</div>
								</div>
								<div className='development'>
									<p className='devTxt'>Development</p>
									<div className='strategyCards'>
										{Development.map((Dev, index) => {
											return (
												<Link to='/' key={index}>
													<ServiceCard
														// key={index}
														img={Dev.img}
														name={Dev.name}
														overview={Dev.overview}
													/>
												</Link>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</li>
					<li className='links'>
						<p to='/' className='link'>
							Industries <MdKeyboardArrowDown className='arrow' />
						</p>
					</li>
					<li className='links'>
						<Link to='/' className='link'>
							About
						</Link>
					</li>
				</div>

				<Link to='/contact' className='contact'>
					Contact
				</Link>
			</div>
		</Fragment>
	);
};

export default Navbar;
