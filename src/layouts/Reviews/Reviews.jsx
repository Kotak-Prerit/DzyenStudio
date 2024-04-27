import React, { Fragment } from 'react';
import './Reviews.css';
import chandler from '../../Assets/chandler8.jpg';
import ReviewsCard from '../../Components/ReviewsCard/ReviewsCard';

const Reviews = () => {
	const review = [
		{
			companyName: 'pepsi',
			clientName: 'willy williams',
			clientPic: chandler,
			services: ['graphic design', 'marketing campaign'],
			reviewContent:
				'They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5',
		},
		{
			companyName: 'redbull',
			clientName: 'pasha the boss',
			clientPic: chandler,
			services: ['2d animation'],
			reviewContent:
				'They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5',
		},
		{
			companyName: 'Nike',
			clientName: 'John christian',
			clientPic: chandler,
			services: ['product designing', 'illustrations'],
			reviewContent:
				'They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5',
		},
		{
			companyName: 'porsche',
			clientName: 'jhey geller',
			clientPic: chandler,
			services: ['illustrations', 'videography'],
			reviewContent:
				'They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5',
		},
		{
			companyName: 'apsara',
			clientName: 'sangam pandey',
			clientPic: chandler,
			services: [
				'sales desk',
				'agency',
				'investor deck',
				'product presentation',
				'website design',
			],
			reviewContent:
				'They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5',
		},
		{
			companyName: 'Marvel',
			clientName: 'Joe Manganiello',
			clientPic: chandler,
			services: ['animation'],
			reviewContent:
				'We were surprised by the accuracy with which Dzyen Agency nailed the overall animation that perfectly aligned with our personal preferences and the vision that we have for our production.',
		},
	];
	return (
		<Fragment>
			<div className='reviewsWrapper'>
				<div className='cr'>
					<p className='cr_txt'>Client's reviews</p>
				</div>
				<div className='reviewCardWrapper'>
					{review.map((review, index) => {
						return (
							<ReviewsCard
								key={index}
								company={review.companyName}
								client={review.clientName}
								img={review.clientPic}
								serviceTag={review.services}
								reviewContent={review.reviewContent}
							/>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default Reviews;
