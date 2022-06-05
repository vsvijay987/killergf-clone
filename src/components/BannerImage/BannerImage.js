import { ParallaxBanner } from "react-scroll-parallax";
import styles from "./BannerImage.module.css";

const BannerImage = () => {
    return (
        <div className=" border-y-8 border-primary">
            <ParallaxBanner
                layers={[
                    // { image: "god_4.jpg", speed: -3 },
                    { image: "god_logo_4.png", speed: -1 },
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
