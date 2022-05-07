import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const FeatureArtist = () => {
    return (
        <div
            id="featureArtist"
            className="px-6 mx-auto lg:w-5/6 pt-16 lg:px-16"
        >
            <p className="text-6xl heading font-extrabold mb-10">
                FEATURE ARTISTS
            </p>
            <div className="">
                <p className="font-para mb-2 ">
                    A Foundation collection where each artist made a KGF
                    derivative in their own style. The 1/1s were sold on
                    Foundation for auction with the proceeds going to the
                    following split:
                </p>
                <ul className="list-disc font-para px-8">
                    <li>33% to KGF Team</li>
                    <li>33% to the Artist</li>
                    <li>33% to Charity (Artists pick!)</li>
                </ul>
            </div>
            <Carousel
                className=" flex items-center w-full mt-8 mx-auto"
                autoPlay
                infiniteLoop
                interval={3000}
                showArrows={true}
                showThumbs={false}
                useKeyboardArrows
                showStatus={false}
            >
                <div className="h-128 flex justify-evenly px-12 w-full">
                    <div className="w-5/12 h-full">
                        <img
                            className="object-contain object-left h-5/6"
                            src="killergf10.jpg"
                            alt=""
                        />
                    </div>
                    <div className="h-full w-3/6 items-center py-8">
                        <div className="bg-white p-4 rounded-xl">
                            <p className="font-para text-3xl text-primary font-bold">
                                Sashimi
                            </p>
                            <p className="font-para text-black text-left mt-6">
                                Sashimi is a Japanese Illustrator who is known
                                for her cute and vibrant style, she is a
                                community favorite among uwucrew, Anifam NFT,
                                and other large anime art NFT communities!
                            </p>
                        </div>

                        <div className="text-right flex justify-end px-8 mt-6">
                            <div className="w-6 h-6 " href="/">
                                <img
                                    className="h-10 w-10"
                                    alt="svgImg"
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDUwLjA2MjUgMTAuNDM3NSBDIDQ4LjIxNDg0NCAxMS4yNTc4MTMgNDYuMjM0Mzc1IDExLjgwODU5NCA0NC4xNTIzNDQgMTIuMDU4NTk0IEMgNDYuMjc3MzQ0IDEwLjc4NTE1NiA0Ny45MTAxNTYgOC43Njk1MzEgNDguNjc1NzgxIDYuMzcxMDk0IEMgNDYuNjkxNDA2IDcuNTQ2ODc1IDQ0LjQ4NDM3NSA4LjQwMjM0NCA0Mi4xNDQ1MzEgOC44NjMyODEgQyA0MC4yNjk1MzEgNi44NjMyODEgMzcuNTk3NjU2IDUuNjE3MTg4IDM0LjY0MDYyNSA1LjYxNzE4OCBDIDI4Ljk2MDkzOCA1LjYxNzE4OCAyNC4zNTU0NjkgMTAuMjE4NzUgMjQuMzU1NDY5IDE1Ljg5ODQzOCBDIDI0LjM1NTQ2OSAxNi43MDMxMjUgMjQuNDQ5MjE5IDE3LjQ4ODI4MSAyNC42MjUgMTguMjQyMTg4IEMgMTYuMDc4MTI1IDE3LjgxMjUgOC41MDM5MDYgMTMuNzE4NzUgMy40Mjk2ODggNy40OTYwOTQgQyAyLjU0Mjk2OSA5LjAxOTUzMSAyLjAzOTA2MyAxMC43ODUxNTYgMi4wMzkwNjMgMTIuNjY3OTY5IEMgMi4wMzkwNjMgMTYuMjM0Mzc1IDMuODUxNTYzIDE5LjM4MjgxMyA2LjYxMzI4MSAyMS4yMzA0NjkgQyA0LjkyNTc4MSAyMS4xNzU3ODEgMy4zMzk4NDQgMjAuNzEwOTM4IDEuOTUzMTI1IDE5Ljk0MTQwNiBDIDEuOTUzMTI1IDE5Ljk4NDM3NSAxLjk1MzEyNSAyMC4wMjczNDQgMS45NTMxMjUgMjAuMDcwMzEzIEMgMS45NTMxMjUgMjUuMDU0Njg4IDUuNSAyOS4yMDcwMzEgMTAuMTk5MjE5IDMwLjE1NjI1IEMgOS4zMzk4NDQgMzAuMzkwNjI1IDguNDI5Njg4IDMwLjUxNTYyNSA3LjQ5MjE4OCAzMC41MTU2MjUgQyA2LjgyODEyNSAzMC41MTU2MjUgNi4xODM1OTQgMzAuNDUzMTI1IDUuNTU0Njg4IDMwLjMyODEyNSBDIDYuODY3MTg4IDM0LjQxMDE1NiAxMC42NjQwNjMgMzcuMzkwNjI1IDE1LjE2MDE1NiAzNy40NzI2NTYgQyAxMS42NDQ1MzEgNDAuMjMwNDY5IDcuMjEwOTM4IDQxLjg3MTA5NCAyLjM5MDYyNSA0MS44NzEwOTQgQyAxLjU1ODU5NCA0MS44NzEwOTQgMC43NDIxODggNDEuODI0MjE5IC0wLjA1ODU5MzggNDEuNzI2NTYzIEMgNC40ODgyODEgNDQuNjQ4NDM4IDkuODk0NTMxIDQ2LjM0NzY1NiAxNS43MDMxMjUgNDYuMzQ3NjU2IEMgMzQuNjE3MTg4IDQ2LjM0NzY1NiA0NC45NjA5MzggMzAuNjc5Njg4IDQ0Ljk2MDkzOCAxNy4wOTM3NSBDIDQ0Ljk2MDkzOCAxNi42NDg0MzggNDQuOTQ5MjE5IDE2LjE5OTIxOSA0NC45MzM1OTQgMTUuNzYxNzE5IEMgNDYuOTQxNDA2IDE0LjMxMjUgNDguNjgzNTk0IDEyLjUgNTAuMDYyNSAxMC40Mzc1IFoiPjwvcGF0aD48L3N2Zz4="
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-128 flex justify-evenly px-12 w-full">
                    <div className="w-5/12 h-full">
                        <img
                            className="object-contain object-left h-5/6"
                            src="killergf11.jpg"
                            alt=""
                        />
                    </div>
                    <div className="h-full w-3/6 items-center py-8">
                        <div className="bg-white p-4 rounded-xl">
                            <p className="font-para text-3xl text-primary font-bold">
                                Laur
                            </p>
                            <p className="font-para text-black text-left mt-6">
                                Laur is the co-founder and artist for uwucrew.
                                She has been a pioneer in the Anime NFT space
                                and has inspired new Anime projects like Killer
                                GF to grow.
                            </p>
                        </div>

                        <div className="text-right flex justify-end px-8 mt-6">
                            <div className="w-6 h-6 " href="/">
                                <img
                                    className="h-10 w-10"
                                    alt="svgImg"
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDUwLjA2MjUgMTAuNDM3NSBDIDQ4LjIxNDg0NCAxMS4yNTc4MTMgNDYuMjM0Mzc1IDExLjgwODU5NCA0NC4xNTIzNDQgMTIuMDU4NTk0IEMgNDYuMjc3MzQ0IDEwLjc4NTE1NiA0Ny45MTAxNTYgOC43Njk1MzEgNDguNjc1NzgxIDYuMzcxMDk0IEMgNDYuNjkxNDA2IDcuNTQ2ODc1IDQ0LjQ4NDM3NSA4LjQwMjM0NCA0Mi4xNDQ1MzEgOC44NjMyODEgQyA0MC4yNjk1MzEgNi44NjMyODEgMzcuNTk3NjU2IDUuNjE3MTg4IDM0LjY0MDYyNSA1LjYxNzE4OCBDIDI4Ljk2MDkzOCA1LjYxNzE4OCAyNC4zNTU0NjkgMTAuMjE4NzUgMjQuMzU1NDY5IDE1Ljg5ODQzOCBDIDI0LjM1NTQ2OSAxNi43MDMxMjUgMjQuNDQ5MjE5IDE3LjQ4ODI4MSAyNC42MjUgMTguMjQyMTg4IEMgMTYuMDc4MTI1IDE3LjgxMjUgOC41MDM5MDYgMTMuNzE4NzUgMy40Mjk2ODggNy40OTYwOTQgQyAyLjU0Mjk2OSA5LjAxOTUzMSAyLjAzOTA2MyAxMC43ODUxNTYgMi4wMzkwNjMgMTIuNjY3OTY5IEMgMi4wMzkwNjMgMTYuMjM0Mzc1IDMuODUxNTYzIDE5LjM4MjgxMyA2LjYxMzI4MSAyMS4yMzA0NjkgQyA0LjkyNTc4MSAyMS4xNzU3ODEgMy4zMzk4NDQgMjAuNzEwOTM4IDEuOTUzMTI1IDE5Ljk0MTQwNiBDIDEuOTUzMTI1IDE5Ljk4NDM3NSAxLjk1MzEyNSAyMC4wMjczNDQgMS45NTMxMjUgMjAuMDcwMzEzIEMgMS45NTMxMjUgMjUuMDU0Njg4IDUuNSAyOS4yMDcwMzEgMTAuMTk5MjE5IDMwLjE1NjI1IEMgOS4zMzk4NDQgMzAuMzkwNjI1IDguNDI5Njg4IDMwLjUxNTYyNSA3LjQ5MjE4OCAzMC41MTU2MjUgQyA2LjgyODEyNSAzMC41MTU2MjUgNi4xODM1OTQgMzAuNDUzMTI1IDUuNTU0Njg4IDMwLjMyODEyNSBDIDYuODY3MTg4IDM0LjQxMDE1NiAxMC42NjQwNjMgMzcuMzkwNjI1IDE1LjE2MDE1NiAzNy40NzI2NTYgQyAxMS42NDQ1MzEgNDAuMjMwNDY5IDcuMjEwOTM4IDQxLjg3MTA5NCAyLjM5MDYyNSA0MS44NzEwOTQgQyAxLjU1ODU5NCA0MS44NzEwOTQgMC43NDIxODggNDEuODI0MjE5IC0wLjA1ODU5MzggNDEuNzI2NTYzIEMgNC40ODgyODEgNDQuNjQ4NDM4IDkuODk0NTMxIDQ2LjM0NzY1NiAxNS43MDMxMjUgNDYuMzQ3NjU2IEMgMzQuNjE3MTg4IDQ2LjM0NzY1NiA0NC45NjA5MzggMzAuNjc5Njg4IDQ0Ljk2MDkzOCAxNy4wOTM3NSBDIDQ0Ljk2MDkzOCAxNi42NDg0MzggNDQuOTQ5MjE5IDE2LjE5OTIxOSA0NC45MzM1OTQgMTUuNzYxNzE5IEMgNDYuOTQxNDA2IDE0LjMxMjUgNDguNjgzNTk0IDEyLjUgNTAuMDYyNSAxMC40Mzc1IFoiPjwvcGF0aD48L3N2Zz4="
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-128 flex justify-evenly px-12 w-full">
                    <div className="w-5/12 h-full">
                        <img
                            className="object-contain object-left h-5/6"
                            src="killergf12.jpg"
                            alt=""
                        />
                    </div>
                    <div className="h-full w-3/6 items-center py-8">
                        <div className="bg-white p-4 rounded-xl">
                            <p className="font-para text-3xl text-primary font-bold">
                                Cirilla
                            </p>
                            <p className="font-para text-black text-left mt-6">
                                Cirilla Lin is a Freelance illustrator from
                                Taiwan. They have been drawing for over 4 years
                                and are known for drawing figures and scenery.
                                They are prominent on Twitter amassing a
                                following of over 200,000 fans.
                            </p>
                        </div>

                        <div className="text-right flex justify-end px-8 mt-6">
                            <div className="w-6 h-6 " href="/">
                                <img
                                    className="h-10 w-10"
                                    alt="svgImg"
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDUwLjA2MjUgMTAuNDM3NSBDIDQ4LjIxNDg0NCAxMS4yNTc4MTMgNDYuMjM0Mzc1IDExLjgwODU5NCA0NC4xNTIzNDQgMTIuMDU4NTk0IEMgNDYuMjc3MzQ0IDEwLjc4NTE1NiA0Ny45MTAxNTYgOC43Njk1MzEgNDguNjc1NzgxIDYuMzcxMDk0IEMgNDYuNjkxNDA2IDcuNTQ2ODc1IDQ0LjQ4NDM3NSA4LjQwMjM0NCA0Mi4xNDQ1MzEgOC44NjMyODEgQyA0MC4yNjk1MzEgNi44NjMyODEgMzcuNTk3NjU2IDUuNjE3MTg4IDM0LjY0MDYyNSA1LjYxNzE4OCBDIDI4Ljk2MDkzOCA1LjYxNzE4OCAyNC4zNTU0NjkgMTAuMjE4NzUgMjQuMzU1NDY5IDE1Ljg5ODQzOCBDIDI0LjM1NTQ2OSAxNi43MDMxMjUgMjQuNDQ5MjE5IDE3LjQ4ODI4MSAyNC42MjUgMTguMjQyMTg4IEMgMTYuMDc4MTI1IDE3LjgxMjUgOC41MDM5MDYgMTMuNzE4NzUgMy40Mjk2ODggNy40OTYwOTQgQyAyLjU0Mjk2OSA5LjAxOTUzMSAyLjAzOTA2MyAxMC43ODUxNTYgMi4wMzkwNjMgMTIuNjY3OTY5IEMgMi4wMzkwNjMgMTYuMjM0Mzc1IDMuODUxNTYzIDE5LjM4MjgxMyA2LjYxMzI4MSAyMS4yMzA0NjkgQyA0LjkyNTc4MSAyMS4xNzU3ODEgMy4zMzk4NDQgMjAuNzEwOTM4IDEuOTUzMTI1IDE5Ljk0MTQwNiBDIDEuOTUzMTI1IDE5Ljk4NDM3NSAxLjk1MzEyNSAyMC4wMjczNDQgMS45NTMxMjUgMjAuMDcwMzEzIEMgMS45NTMxMjUgMjUuMDU0Njg4IDUuNSAyOS4yMDcwMzEgMTAuMTk5MjE5IDMwLjE1NjI1IEMgOS4zMzk4NDQgMzAuMzkwNjI1IDguNDI5Njg4IDMwLjUxNTYyNSA3LjQ5MjE4OCAzMC41MTU2MjUgQyA2LjgyODEyNSAzMC41MTU2MjUgNi4xODM1OTQgMzAuNDUzMTI1IDUuNTU0Njg4IDMwLjMyODEyNSBDIDYuODY3MTg4IDM0LjQxMDE1NiAxMC42NjQwNjMgMzcuMzkwNjI1IDE1LjE2MDE1NiAzNy40NzI2NTYgQyAxMS42NDQ1MzEgNDAuMjMwNDY5IDcuMjEwOTM4IDQxLjg3MTA5NCAyLjM5MDYyNSA0MS44NzEwOTQgQyAxLjU1ODU5NCA0MS44NzEwOTQgMC43NDIxODggNDEuODI0MjE5IC0wLjA1ODU5MzggNDEuNzI2NTYzIEMgNC40ODgyODEgNDQuNjQ4NDM4IDkuODk0NTMxIDQ2LjM0NzY1NiAxNS43MDMxMjUgNDYuMzQ3NjU2IEMgMzQuNjE3MTg4IDQ2LjM0NzY1NiA0NC45NjA5MzggMzAuNjc5Njg4IDQ0Ljk2MDkzOCAxNy4wOTM3NSBDIDQ0Ljk2MDkzOCAxNi42NDg0MzggNDQuOTQ5MjE5IDE2LjE5OTIxOSA0NC45MzM1OTQgMTUuNzYxNzE5IEMgNDYuOTQxNDA2IDE0LjMxMjUgNDguNjgzNTk0IDEyLjUgNTAuMDYyNSAxMC40Mzc1IFoiPjwvcGF0aD48L3N2Zz4="
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default FeatureArtist;
