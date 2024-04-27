import React, { Fragment } from 'react';
import './Footer.css';
import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<Fragment>
			<div className='footer'>
				<div className='left'>
					<Link to='/'>
						<img src={logo} alt='logo' className='logo' />
					</Link>
					<p className='socialsTxt'>socials</p>
					<Link to='/' className='socials insta'>
						<p>instagram</p>
					</Link>
					<Link to='/' className='socials upwork'>
						<p>upwork</p>
					</Link>
					<Link to='/' className='socials behance'>
						<p>behance</p>
					</Link>
					<Link to='/' className='socials linkedin'>
						<p>linkedin</p>
					</Link>
					<p className='emailUs'>Drop us a line</p>
					<Link to='/' className='emailTxt'>
						infodzyen@gmail.com
					</Link>
				</div>
				<div className='right'>
					<div className='solutionsContainer'>
						<p className='solutionTxt'>Solutions</p>
						<Link to='/' className='sol_list'>
							<p>MVP Design</p>
						</Link>
						<Link to='/' className='sol_list'>
							<p>Product Redesign</p>
						</Link>
						<Link to='/' className='sol_list'>
							<p>Team Extension</p>
						</Link>
					</div>
					<div className='servicesContainer'>
						<p className='servicestxt'>Services</p>
						<Link to='/' className='serv_list'>
							<p>Product Discovery</p>
						</Link>
						<Link to='/' className='serv_list'>
							<p>UI/UX Design</p>
						</Link>
						<Link to='/' className='serv_list'>
							<p>Web Design</p>
						</Link>
						<Link to='/' className='serv_list'>
							<p>UX Audit</p>
						</Link>
						<Link to='/' className='serv_list'>
							<p>Brand Identity</p>
						</Link>
						<Link to='/' className='serv_list'>
							<p>Graphic Design</p>
						</Link>
					</div>
					<div className='industriesContainer'>
						<p className='industriestxt'>Industries</p>
						<Link to='/' className='ind_list'>
							<p>Web 3, Blockchain</p>
						</Link>
						<Link to='/' className='ind_list'>
							<p>SaaS</p>
						</Link>
						<Link to='/' className='ind_list'>
							<p>Fintech</p>
						</Link>
						<Link to='/' className='ind_list'>
							<p>healthcare & Wellness</p>
						</Link>
						<Link to='/' className='ind_list'>
							<p>AI & ML</p>
						</Link>
					</div>
					<div className='companyContainer'>
						<p className='companytxt'>Industries</p>
						<Link to='/' className='cmp_list'>
							<p>Home</p>
						</Link>
						<Link to='/' className='cmp_list'>
							<p>Works</p>
						</Link>
						<Link to='/' className='cmp_list'>
							<p>About</p>
						</Link>
						<Link to='/' className='cmp_list'>
							<p>Contact</p>
						</Link>
					</div>
				</div>
			</div>
			<div className='copyright'>
				<p className='coprightTxt'>© 2016–2024 Dzyen Studio</p>
			</div>
		</Fragment>
	);
};

export default Footer;
