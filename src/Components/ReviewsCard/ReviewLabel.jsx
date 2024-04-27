import React, { Fragment } from 'react';
import './ReviewCard.css';

const ReviewLabel = (props) => {
	return (
		<Fragment>
			<p className='serviceLabel'>{props.label}</p>
		</Fragment>
	);
};

export default ReviewLabel;
