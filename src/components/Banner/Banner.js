import React from "react";

const Banner = () => {
    return (
        <div className="p-6 flex mx-auto text-center lg:w-5/6 h-screen flex-col items-center justify-center">
            <p className="lg:text-5xl text-4xl heading mb-10">
                WELCOME TO GODS OF RENAISSANCE
            </p>
            <p className="font-para mb-10 lg:px-48">
                GODS OF RENAISSANCE is the genesis NFT collection of the novel
                value based metaverse project which aims at bringing artists and
                enthusiasts together to usher in Renaissance in art and building
                collective wealth.
            </p>
            <button className=" bg-primary text-white font-para px-6 py-2 rounded-2xl">
                View on OpenSea
            </button>
        </div>
    );
};

export default Banner;
