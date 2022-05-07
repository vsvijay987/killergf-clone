import React from "react";

const DemoImage = () => {
    return (
        <div id="demoImage" className="px-32">
            <div className=" lg:flex justify-evenly px-32">
                <img className="mb-8 lg:h-128" src="k1.jpg" alt="k1" />
                <img className="mb-8 lg:h-128" src="k2.jpg" alt="k2" />
            </div>

            <div className=" lg:flex justify-evenly px-32">
                <img className="mb-8 lg:h-128" src="k3.jpg" alt="k3" />
                <img className="lg:h-128" src="k4.jpg" alt="k4" />
            </div>
        </div>
    );
};

export default DemoImage;
