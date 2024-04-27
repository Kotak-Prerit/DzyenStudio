import React, { useState } from 'react';
import './ReviewCard.css';
import ReviewLabel from './ReviewLabel';

const ReviewsCard = (props) => {
	const [expanded, setExpanded] = useState(false);

	const handleReadClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div className='rcWrapper'>
			<div className='column'>
				<div className='companyNameWrapper'>
					<p className='companyName'>{props.company}</p>
				</div>
				<p className={`servicesTxt ${expanded ? 'expandedServices' : ''}`}>
					Services
				</p>
				<div className='clientNameWrapper'>
					<p className='clientName'>{props.client}</p>
				</div>
				<p
					className={`read ${expanded ? 'open' : ''}`}
					onClick={handleReadClick}
				>
					read
				</p>
			</div>
			<div className={`aboutClient ${expanded ? 'expanded' : ''}`}>
				<p className='services'>Services :</p>
				<div className='serviceLabels'>
					{props.serviceTag.map((tag, index) => {
						return <ReviewLabel label={tag} key={index} />;
					})}
				</div>
				<div className='clientInfo'>
					<p className='clientFn'>{props.client}</p>
					<img src={props.img} alt='clientImg' className='clientImg' />
					<p className='reviewContent'>{props.reviewContent}</p>
				</div>
			</div>
		</div>
	);
};

export default ReviewsCard;
