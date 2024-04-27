import React, { Fragment } from 'react';
import './ServiceCard.css';
import { HiArrowLongRight } from 'react-icons/hi2';

const ServiceCard = (props) => {
	return (
		<Fragment>
			<div className='srvs_crd_wrapper'>
				<img src={props.img} alt='icon' className='iconImg' />
				<div className='serviceTitle'>
					<p className='serviceName'>
						{props.name} <HiArrowLongRight className='arrow-right' />
					</p>
					<p className='overview'>{props.overview}</p>
				</div>
			</div>
		</Fragment>
	);
};

export default ServiceCard;
