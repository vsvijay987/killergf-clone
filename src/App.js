import React from "react";

import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import BannerImage from "./components/BannerImage/BannerImage";
import TheStory from "./components/TheStory/TheStory";
import DemoImage from "./components/DemoImage/DemoImage";
import FeatureArtist from "./components/FeatureArtist/FeatureArtist";
import Team from "./components/Team/Team";
import Roadmap from "./components/Roadmap/Roadmap";
import Footer from "./components/Footer/Footer";
import WhyBuy from "./components/WhyBuy/WhyBuy";

const App = () => {
    return (
        <div>
            <Header />
            <Banner />
            <BannerImage />
            <TheStory />
            <DemoImage />
            <Roadmap />
            <WhyBuy />
            <FeatureArtist />
            <Team />
            <Footer />
        </div>
    );
};

export default App;
