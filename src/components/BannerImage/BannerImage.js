import { ParallaxBanner } from "react-scroll-parallax";

const BannerImage = () => {
    return (
        <div>
            <ParallaxBanner
                layers={[
                    { image: "god_1.png", speed: -30 },
                    { image: "god_2.png", speed: -5, expanded: false },
                ]}
                className="aspect-[2/1] lg:h-screen"
            >
                <img
                    className=""
                    src="linear-gradient(to right, #434343 0%, black 100%)"
                    alt=""
                />
            </ParallaxBanner>
        </div>
    );
};

export default BannerImage;
