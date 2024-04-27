import React, { Fragment } from 'react';
import Navbar from '../../layouts/Navbar/Navbar';
import Hero from '../../layouts/Hero/Hero';
import Solutions from '../../layouts/Solutions/Solutions';
import Industries from '../../layouts/Industries/Industries';
import Approach from '../../layouts/Approach/Approach';
import Projects from '../../layouts/Projects/Projects';
import Reviews from '../../layouts/Reviews/Reviews';
import GettingStarted from '../../layouts/GettingStarted/GettingStarted';
import Footer from '../../layouts/Footer/Footer';

const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<Hero />
			<Solutions />
			<Industries />
			<Approach />
			<Projects />
			<Reviews />
			<GettingStarted />
			<Footer />
		</Fragment>
	);
};

export default Home;
