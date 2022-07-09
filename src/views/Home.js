import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import DownloadsTiles from '../components/sections/DownloadsTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';


const Home = () => {

	return (
		<>
			<Hero className="illustration-section-01" />
			<DownloadsTiles />
			<FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
		</>
	);
}

export default Home;