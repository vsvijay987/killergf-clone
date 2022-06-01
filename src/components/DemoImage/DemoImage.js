import React from "react";

const DemoImage = () => {
    return (
        <div id="demoImage" className="px-6 mx-auto lg:w-5/6 py-16 lg:px-16">
            <div className=" flex flex-wrap justify-around">
                <img
                    className="p-2 mb-8 border-2 border-primary lg:h-128 max-w-sm"
                    src="gif_1.gif"
                    alt="k1"
                />
                <img
                    className="p-2 mb-8 border-2 border-primary lg:h-128 max-w-sm"
                    src="gif_2.gif"
                    alt="k2"
                />
                {/* <img className="lg:h-128 max-w-sm" src="god_gif.gif" alt="k4" /> */}
                {/* <img className="mb-8 lg:h-128 max-w-sm" src="k3.jpg" alt="k3" /> */}
            </div>
            <div className=" flex flex-wrap justify-around">
                <img
                    className="p-2 border-2 border-primary lg:h-128 max-w-sm"
                    src="god_gif.gif"
                    alt="k4"
                />
                {/* <img className="mb-8 lg:h-128 max-w-sm" src="k3.jpg" alt="k3" /> */}
            </div>
        </div>
    );
};

export default DemoImage;
