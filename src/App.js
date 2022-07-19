import React, { useEffect } from "react";

import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import BannerImage from "./components/BannerImage/BannerImage";
import TheStory from "./components/TheStory/TheStory";
import DemoImage from "./components/DemoImage/DemoImage";
// import FeatureArtist from "./components/FeatureArtist/FeatureArtist";
// import Team from "./components/Team/Team";
import Roadmap from "./components/Roadmap/Roadmap";
import Footer from "./components/Footer/Footer";
import WhyBuy from "./components/WhyBuy/WhyBuy";
import Particle from "./components/Particle/Particle";
import ReactGA from "react-ga";
import { BrowserRouter as Routers } from "react-router-dom";

const TRACKING_ID = "UA-191680030-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    return (
        <Routers>
            <Particle />
            <Header />
            <Banner />
            <BannerImage />
            <TheStory />
            <DemoImage />
            <Roadmap />
            <WhyBuy />
            {/* <FeatureArtist /> */}
            {/* <Team /> */}
            <Footer />
        </Routers>
    );
};

export default App;
