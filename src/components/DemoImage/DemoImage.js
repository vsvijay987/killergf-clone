import React from "react";

const DemoImage = () => {
    return (
        <div id="demoImage" className="px-6 mx-auto lg:w-5/6 py-16 lg:px-16">
            <div className=" flex flex-wrap justify-around">
                <img
                    className="mb-8 lg:h-128 max-w-sm"
                    src="gif_1.gif"
                    alt="k1"
                />
                <img
                    className="mb-8 lg:h-128 max-w-sm"
                    src="gif_2.gif"
                    alt="k2"
                />
                {/* <img className="mb-8 lg:h-128 max-w-sm" src="k3.jpg" alt="k3" />
                <img className="lg:h-128 max-w-sm" src="k4.jpg" alt="k4" /> */}
            </div>
        </div>
    );
};

export default DemoImage;
