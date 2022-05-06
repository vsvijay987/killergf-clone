import React from "react";

import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import BannerImage from "./components/BannerImage/BannerImage";
import TheStory from "./components/TheStory/TheStory";
import DemoImage from "./components/DemoImage/DemoImage";
import FeatureArtist from "./components/FeatureArtist/FeatureArtist";

const App = () => {
    return (
        <div>
            <Header />
            <Banner />
            <BannerImage />
            <TheStory />
            <DemoImage />
            <FeatureArtist />
        </div>
    );
};

export default App;
