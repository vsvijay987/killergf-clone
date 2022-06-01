import { ParallaxBanner } from "react-scroll-parallax";

const BannerImage = () => {
    return (
        <div className="border-y-2 border-primary">
            <ParallaxBanner
                layers={[
                    // { image: "god_4.jpg", speed: -3 },
                    { image: "god_3.jpg", speed: -30 },
                    { image: "god_2.png", speed: -10, expanded: false },
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
