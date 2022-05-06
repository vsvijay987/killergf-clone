import { ParallaxBanner } from "react-scroll-parallax";

const BannerImage = () => {
    return (
        <div>
            <ParallaxBanner
                layers={[
                    {
                        image: "killer-girl-bg.png",
                        speed: -40,
                    },
                    { image: "killer-girl-bg2.png", speed: -30 },
                    { image: "killer-girl.png", speed: -5, expanded: false },
                ]}
                className="aspect-[2/1] lg:h-screen"
            >
                <img className="" src="killer-girl-bg3.jpg" />
            </ParallaxBanner>
        </div>
    );
};

export default BannerImage;
