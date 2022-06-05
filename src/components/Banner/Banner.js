import React from "react";

const Banner = () => {
    return (
        <div className="p-6 flex mx-auto text-center mt-36 lg:mt-0 lg:w-5/6 h-screen flex-col lg:items-center lg:justify-center">
            <p
                className="lg:text-5xl text-2xl heading mb-10 lg:w-2/3"
                style={{ wordSpacing: "20px" }}
            >
                WELCOME TO GODS OF RENAISSANCE
            </p>

            <p className="font-para mb-10 lg:px-48">
                GODS OF RENAISSANCE is the genesis NFT collection of the novel
                value based metaverse project which aims at bringing artists and
                enthusiasts together to usher in Renaissance in art and building
                collective wealth.
            </p>
            <a
                href="https://discord.gg/HPN78NukYb"
                target="_blank"
                alt="Discord"
                rel="noreferrer"
            >
                <button className=" bg-primary text-white font-para px-6 py-2 rounded-2xl">
                    Join Discord
                </button>
            </a>
        </div>
    );
};

export default Banner;
