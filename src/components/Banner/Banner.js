import React from "react";

const Banner = () => {
    return (
        <div className="p-6 mx-auto text-center lg:w-5/6 py-16">
            <p className="text-6xl heading font-extrabold mb-10">
                WELCOME TO KILLER GF
            </p>
            <p className="font-para mb-10 lg:px-48">
                Killer GF is a 7,777 generative portrait art collection by a
                former Riot Games Artist, Zeronis, with over 240 meticulously
                designed features that contrasts cute and aesthetically
                appealing girlfriends that also happen to be dangerous
                assassins.
            </p>
            <button className=" bg-primary text-white font-para px-6 py-2 rounded-2xl">
                View on openSea
            </button>
        </div>
    );
};

export default Banner;
