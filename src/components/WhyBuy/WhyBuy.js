import React from "react";
import { useSpring, animated } from "react-spring";

const WhyBuy = () => {
    const spring = useSpring({
        loop: true,
        to: [{ opacity: 1, color: "#d6b600" }],
        from: { opacity: 0, color: "white" },
    });
    return (
        <div
            id="featureArtist"
            className="px-6 mx-auto lg:w-5/6 pt-16 lg:px-16 mb-10"
        >
            <p
                className="lg:text-5xl text-4xl text-center heading mb-10"
                style={{ wordSpacing: "20px" }}
            >
                WHY BUY OUR NFT
            </p>
            <div className="">
                <ul className="list-disc font-para px-8 space-y-6">
                    <li>
                        <animated.span style={spring}>
                            Passive Income:{" "}
                        </animated.span>
                        Not a boring 2D picture. Real world utilities and
                        Passive income
                    </li>
                    <li>
                        <animated.span style={spring}>
                            Metaverse:{" "}
                        </animated.span>
                        Project is a part of P2E games, multi-storyline spinoffs
                        and metaverse where they will serve as playable,
                        open-storyline characters and avatars.
                    </li>
                    <li>
                        {" "}
                        <animated.span style={spring}>
                            Eco Friendly:{" "}
                        </animated.span>
                        Ensuring the lowest gas fees at the time of minting to
                        avoid wastage of electricity and natural Resources{" "}
                    </li>
                    <li>
                        <animated.span style={spring}>
                            Passive Income:{" "}
                        </animated.span>
                        Paid out quarterly. 20% of all secondary sales will be
                        paid out to nft holders as per holding status. $1 m
                        sales (10% royalty: 100,000$) -$ 20,000 to holders
                    </li>
                    <li>
                        <animated.span style={spring}>Creed: </animated.span>
                        We will be a tight-knit artist and an enthusiastic
                        community, a creed of like-minded people, investing in
                        Startup ideas of our community members. 20% of all
                        Secondary sales will be earmarked for the same
                    </li>
                    <li>
                        <animated.span style={spring}>Charity: </animated.span>
                        After round 1 sales. Up to $25k will be donated to
                        charity to help women empowerment, child education, and
                        environmental protection. 25% of all secondary sales
                        will be donated to the cause collectively decided by the
                        dao. You decide the future of the world
                    </li>
                    <li>
                        <animated.span style={spring}>
                            Frequent Giveways:{" "}
                        </animated.span>{" "}
                        Amounting to $50k in stage 1 and $100k at the end of
                        sale completion. Airdrop on native currency for holders
                        exceeding 3 months. Preference to land sales and elite
                        status in our metaverse. Events in sandbox and
                        decentraland and frequent giveaways.
                    </li>
                    <li>
                        <animated.span style={spring}>Legacy: </animated.span>{" "}
                        After metaverse announcement. A global event where free
                        work from remote locations will be announced. We are not
                        just another project. We are here to rule the blockchain
                        world as gods.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WhyBuy;
