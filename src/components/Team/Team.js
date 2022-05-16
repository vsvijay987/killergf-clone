import React from "react";
import Card from "./Card/Card";

const Team = () => {
    return (
        <div id="team" className="px-6 mx-auto lg:w-5/6 py-16 lg:px-16">
            <p className="text-6xl heading font-extrabold mb-10">TEAM</p>
            <div className="">
                <p className="font-para mb-2 ">
                    uwulabs is the talented team of builders behind the uwucrew
                    - an anime-inspired NFT project with a fun art focused
                    community!
                </p>
                <p className="font-para mb-2 ">
                    We have collaborated with Zeronis to assist in development
                    and community management for Killer GF. We are excited to
                    work with Zeronis and are looking forward to Killer GF's
                    future!
                </p>
            </div>
            <div className="flex flex-wrap justify-between">
                <Card
                    image="card-1.jpg"
                    title="Kiwi - Co-Founder and Developer"
                    description="Co-Founder of uwucrew. Designed the Killer GF NFT collection, responsible for leading the team and all technical needs."
                />
                <Card
                    image="card-2.jpg"
                    title="Swag - Community Manager"
                    description="Loves making our community and holders excited, always looking for what we can provide to our community.."
                />
                <Card
                    image="card-3.jpg"
                    title="FatDoinks - Head of Marketing"
                    description="Helps the team strategize and deliver with intention. Brings on Killer ideas for marketing!"
                />
                <Card
                    image="card-4.jpg"
                    title="Desto - Partnerships Manager"
                    description="Responsible for our relationships and collaborations with other projects."
                />
                <Card
                    image="card-5.jpg"
                    title="upsidan - Project Manager"
                    description="Kiwi's #1 fan. As project manager he makes sure everyone is doing their job and that we are fulfilling expectations."
                />
                <Card
                    image="card-6.jpg"
                    title="TylerTakesATrip - Assistant Community Manager"
                    description="While in remission in July of 2021, he found an interest in crypto/NFTs and works full time as our Assistant Community Manager."
                />
            </div>
        </div>
    );
};

export default Team;
