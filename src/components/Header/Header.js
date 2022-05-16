import React, { useState } from "react";
import { Link } from "react-scroll";

import styles from "./Header.module.css";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className="flex items-center justify-between p-8 top-0 z-50">
            <a href="/">
                <img className="h-16" src="killergf.png" alt="killergf" />
            </a>
            <nav>
                <section className="flex lg:hidden">
                    <div
                        className="space-y-2 flex flex-col"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>

                    <div
                        className={
                            isNavOpen ? styles.showMenuNav : styles.hideMenuNav
                        }
                    >
                        <div className="flex items-center justify-between w-full p-8 absolute top-0">
                            <a href="/">
                                <img
                                    className="h-16"
                                    src="killergf.png"
                                    alt="killergf"
                                />
                            </a>
                            <div
                                className="flex flex-col"
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full px-4 ">
                            <ul className="font-link text-center space-y-10">
                                <li className=" text-xl font-bold  text-primary">
                                    <a href="/">HOME</a>
                                </li>
                                <li className="cursor-pointer  text-xl font-bold hover:text-black">
                                    <Link
                                        to="story"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={1000}
                                    >
                                        THE STORY
                                    </Link>
                                </li>
                                <li className="cursor-pointer text-xl font-bold hover:text-black">
                                    <Link
                                        to="demoImage"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={1000}
                                    >
                                        GALLERY
                                    </Link>
                                </li>
                                <li className="cursor-pointer text-xl font-bold hover:text-black">
                                    <Link
                                        to="roadmap"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={1000}
                                    >
                                        ROADMAP
                                    </Link>
                                </li>
                                <li className="cursor-pointer  text-xl font-bold hover:text-black">
                                    <Link
                                        to="featureArtist"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={1000}
                                    >
                                        ARTIST
                                    </Link>
                                </li>
                                <li className="cursor-pointer text-xl font-bold hover:text-black">
                                    <Link
                                        to="team"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={1000}
                                    >
                                        TEAM
                                    </Link>
                                </li>
                            </ul>
                            <div className=" mt-12 flex justify-evenly">
                                <a href="/">
                                    <img
                                        alt="svgImg"
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDUwLjA2MjUgMTAuNDM3NSBDIDQ4LjIxNDg0NCAxMS4yNTc4MTMgNDYuMjM0Mzc1IDExLjgwODU5NCA0NC4xNTIzNDQgMTIuMDU4NTk0IEMgNDYuMjc3MzQ0IDEwLjc4NTE1NiA0Ny45MTAxNTYgOC43Njk1MzEgNDguNjc1NzgxIDYuMzcxMDk0IEMgNDYuNjkxNDA2IDcuNTQ2ODc1IDQ0LjQ4NDM3NSA4LjQwMjM0NCA0Mi4xNDQ1MzEgOC44NjMyODEgQyA0MC4yNjk1MzEgNi44NjMyODEgMzcuNTk3NjU2IDUuNjE3MTg4IDM0LjY0MDYyNSA1LjYxNzE4OCBDIDI4Ljk2MDkzOCA1LjYxNzE4OCAyNC4zNTU0NjkgMTAuMjE4NzUgMjQuMzU1NDY5IDE1Ljg5ODQzOCBDIDI0LjM1NTQ2OSAxNi43MDMxMjUgMjQuNDQ5MjE5IDE3LjQ4ODI4MSAyNC42MjUgMTguMjQyMTg4IEMgMTYuMDc4MTI1IDE3LjgxMjUgOC41MDM5MDYgMTMuNzE4NzUgMy40Mjk2ODggNy40OTYwOTQgQyAyLjU0Mjk2OSA5LjAxOTUzMSAyLjAzOTA2MyAxMC43ODUxNTYgMi4wMzkwNjMgMTIuNjY3OTY5IEMgMi4wMzkwNjMgMTYuMjM0Mzc1IDMuODUxNTYzIDE5LjM4MjgxMyA2LjYxMzI4MSAyMS4yMzA0NjkgQyA0LjkyNTc4MSAyMS4xNzU3ODEgMy4zMzk4NDQgMjAuNzEwOTM4IDEuOTUzMTI1IDE5Ljk0MTQwNiBDIDEuOTUzMTI1IDE5Ljk4NDM3NSAxLjk1MzEyNSAyMC4wMjczNDQgMS45NTMxMjUgMjAuMDcwMzEzIEMgMS45NTMxMjUgMjUuMDU0Njg4IDUuNSAyOS4yMDcwMzEgMTAuMTk5MjE5IDMwLjE1NjI1IEMgOS4zMzk4NDQgMzAuMzkwNjI1IDguNDI5Njg4IDMwLjUxNTYyNSA3LjQ5MjE4OCAzMC41MTU2MjUgQyA2LjgyODEyNSAzMC41MTU2MjUgNi4xODM1OTQgMzAuNDUzMTI1IDUuNTU0Njg4IDMwLjMyODEyNSBDIDYuODY3MTg4IDM0LjQxMDE1NiAxMC42NjQwNjMgMzcuMzkwNjI1IDE1LjE2MDE1NiAzNy40NzI2NTYgQyAxMS42NDQ1MzEgNDAuMjMwNDY5IDcuMjEwOTM4IDQxLjg3MTA5NCAyLjM5MDYyNSA0MS44NzEwOTQgQyAxLjU1ODU5NCA0MS44NzEwOTQgMC43NDIxODggNDEuODI0MjE5IC0wLjA1ODU5MzggNDEuNzI2NTYzIEMgNC40ODgyODEgNDQuNjQ4NDM4IDkuODk0NTMxIDQ2LjM0NzY1NiAxNS43MDMxMjUgNDYuMzQ3NjU2IEMgMzQuNjE3MTg4IDQ2LjM0NzY1NiA0NC45NjA5MzggMzAuNjc5Njg4IDQ0Ljk2MDkzOCAxNy4wOTM3NSBDIDQ0Ljk2MDkzOCAxNi42NDg0MzggNDQuOTQ5MjE5IDE2LjE5OTIxOSA0NC45MzM1OTQgMTUuNzYxNzE5IEMgNDYuOTQxNDA2IDE0LjMxMjUgNDguNjgzNTk0IDEyLjUgNTAuMDYyNSAxMC40Mzc1IFoiPjwvcGF0aD48L3N2Zz4="
                                    />
                                </a>
                                <a href="/">
                                    <img
                                        alt="svgImg"
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDQxLjYyNSAxMC43Njk1MzEgQyAzNy42NDQ1MzEgNy41NjY0MDYgMzEuMzQ3NjU2IDcuMDIzNDM4IDMxLjA3ODEyNSA3LjAwMzkwNiBDIDMwLjY2MDE1NiA2Ljk2ODc1IDMwLjI2MTcxOSA3LjIwMzEyNSAzMC4wODk4NDQgNy41ODk4NDQgQyAzMC4wNzQyMTkgNy42MTMyODEgMjkuOTM3NSA3LjkyOTY4OCAyOS43ODUxNTYgOC40MjE4NzUgQyAzMi40MTc5NjkgOC44NjcxODggMzUuNjUyMzQ0IDkuNzYxNzE5IDM4LjU3ODEyNSAxMS41NzgxMjUgQyAzOS4wNDY4NzUgMTEuODY3MTg4IDM5LjE5MTQwNiAxMi40ODQzNzUgMzguOTAyMzQ0IDEyLjk1MzEyNSBDIDM4LjcxMDkzOCAxMy4yNjE3MTkgMzguMzg2NzE5IDEzLjQyOTY4OCAzOC4wNTA3ODEgMTMuNDI5Njg4IEMgMzcuODcxMDk0IDEzLjQyOTY4OCAzNy42ODc1IDEzLjM3ODkwNiAzNy41MjM0MzggMTMuMjc3MzQ0IEMgMzIuNDkyMTg4IDEwLjE1NjI1IDI2LjIxMDkzOCAxMCAyNSAxMCBDIDIzLjc4OTA2MyAxMCAxNy41MDM5MDYgMTAuMTU2MjUgMTIuNDc2NTYzIDEzLjI3NzM0NCBDIDEyLjAwNzgxMyAxMy41NzAzMTMgMTEuMzkwNjI1IDEzLjQyNTc4MSAxMS4xMDE1NjMgMTIuOTU3MDMxIEMgMTAuODA4NTk0IDEyLjQ4NDM3NSAxMC45NTMxMjUgMTEuODcxMDk0IDExLjQyMTg3NSAxMS41NzgxMjUgQyAxNC4zNDc2NTYgOS43NjU2MjUgMTcuNTgyMDMxIDguODY3MTg4IDIwLjIxNDg0NCA4LjQyNTc4MSBDIDIwLjA2MjUgNy45Mjk2ODggMTkuOTI1NzgxIDcuNjE3MTg4IDE5LjkxNDA2MyA3LjU4OTg0NCBDIDE5LjczODI4MSA3LjIwMzEyNSAxOS4zNDM3NSA2Ljk2MDkzOCAxOC45MjE4NzUgNy4wMDM5MDYgQyAxOC42NTIzNDQgNy4wMjM0MzggMTIuMzU1NDY5IDcuNTY2NDA2IDguMzIwMzEzIDEwLjgxMjUgQyA2LjIxNDg0NCAxMi43NjE3MTkgMiAyNC4xNTIzNDQgMiAzNCBDIDIgMzQuMTc1NzgxIDIuMDQ2ODc1IDM0LjM0Mzc1IDIuMTMyODEzIDM0LjQ5NjA5NCBDIDUuMDM5MDYzIDM5LjYwNTQ2OSAxMi45NzI2NTYgNDAuOTQxNDA2IDE0Ljc4MTI1IDQxIEMgMTQuNzg5MDYzIDQxIDE0LjgwMDc4MSA0MSAxNC44MTI1IDQxIEMgMTUuMTMyODEzIDQxIDE1LjQzMzU5NCA0MC44NDc2NTYgMTUuNjIxMDk0IDQwLjU4OTg0NCBMIDE3LjQ0OTIxOSAzOC4wNzQyMTkgQyAxMi41MTU2MjUgMzYuODAwNzgxIDkuOTk2MDk0IDM0LjYzNjcxOSA5Ljg1MTU2MyAzNC41MDc4MTMgQyA5LjQzNzUgMzQuMTQ0NTMxIDkuMzk4NDM4IDMzLjUxMTcxOSA5Ljc2NTYyNSAzMy4wOTc2NTYgQyAxMC4xMjg5MDYgMzIuNjgzNTk0IDEwLjc2MTcxOSAzMi42NDQ1MzEgMTEuMTc1NzgxIDMzLjAwNzgxMyBDIDExLjIzNDM3NSAzMy4wNjI1IDE1Ljg3NSAzNyAyNSAzNyBDIDM0LjE0MDYyNSAzNyAzOC43ODEyNSAzMy4wNDY4NzUgMzguODI4MTI1IDMzLjAwNzgxMyBDIDM5LjI0MjE4OCAzMi42NDg0MzggMzkuODcxMDk0IDMyLjY4MzU5NCA0MC4yMzgyODEgMzMuMTAxNTYzIEMgNDAuNjAxNTYzIDMzLjUxNTYyNSA0MC41NjI1IDM0LjE0NDUzMSA0MC4xNDg0MzggMzQuNTA3ODEzIEMgNDAuMDAzOTA2IDM0LjYzNjcxOSAzNy40ODQzNzUgMzYuODAwNzgxIDMyLjU1MDc4MSAzOC4wNzQyMTkgTCAzNC4zNzg5MDYgNDAuNTg5ODQ0IEMgMzQuNTY2NDA2IDQwLjg0NzY1NiAzNC44NjcxODggNDEgMzUuMTg3NSA0MSBDIDM1LjE5OTIxOSA0MSAzNS4yMTA5MzggNDEgMzUuMjE4NzUgNDEgQyAzNy4wMjczNDQgNDAuOTQxNDA2IDQ0Ljk2MDkzOCAzOS42MDU0NjkgNDcuODY3MTg4IDM0LjQ5NjA5NCBDIDQ3Ljk1MzEyNSAzNC4zNDM3NSA0OCAzNC4xNzU3ODEgNDggMzQgQyA0OCAyNC4xNTIzNDQgNDMuNzg1MTU2IDEyLjc2MTcxOSA0MS42MjUgMTAuNzY5NTMxIFogTSAxOC41IDMwIEMgMTYuNTY2NDA2IDMwIDE1IDI4LjIxMDkzOCAxNSAyNiBDIDE1IDIzLjc4OTA2MyAxNi41NjY0MDYgMjIgMTguNSAyMiBDIDIwLjQzMzU5NCAyMiAyMiAyMy43ODkwNjMgMjIgMjYgQyAyMiAyOC4yMTA5MzggMjAuNDMzNTk0IDMwIDE4LjUgMzAgWiBNIDMxLjUgMzAgQyAyOS41NjY0MDYgMzAgMjggMjguMjEwOTM4IDI4IDI2IEMgMjggMjMuNzg5MDYzIDI5LjU2NjQwNiAyMiAzMS41IDIyIEMgMzMuNDMzNTk0IDIyIDM1IDIzLjc4OTA2MyAzNSAyNiBDIDM1IDI4LjIxMDkzOCAzMy40MzM1OTQgMzAgMzEuNSAzMCBaIj48L3BhdGg+PC9zdmc+"
                                    />
                                </a>

                                <a href="/">
                                    <img
                                        alt="svgImg"
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNNDYuMTM3LDYuNTUyYy0wLjc1LTAuNjM2LTEuOTI4LTAuNzI3LTMuMTQ2LTAuMjM4bC0wLjAwMiwwQzQxLjcwOCw2LjgyOCw2LjcyOCwyMS44MzIsNS4zMDQsMjIuNDQ1CWMtMC4yNTksMC4wOS0yLjUyMSwwLjkzNC0yLjI4OCwyLjgxNGMwLjIwOCwxLjY5NSwyLjAyNiwyLjM5NywyLjI0OCwyLjQ3OGw4Ljg5MywzLjA0NWMwLjU5LDEuOTY0LDIuNzY1LDkuMjEsMy4yNDYsMTAuNzU4CWMwLjMsMC45NjUsMC43ODksMi4yMzMsMS42NDYsMi40OTRjMC43NTIsMC4yOSwxLjUsMC4wMjUsMS45ODQtMC4zNTVsNS40MzctNS4wNDNsOC43NzcsNi44NDVsMC4yMDksMC4xMjUJYzAuNTk2LDAuMjY0LDEuMTY3LDAuMzk2LDEuNzEyLDAuMzk2YzAuNDIxLDAsMC44MjUtMC4wNzksMS4yMTEtMC4yMzdjMS4zMTUtMC41NCwxLjg0MS0xLjc5MywxLjg5Ni0xLjkzNWw2LjU1Ni0zNC4wNzcJQzQ3LjIzMSw3LjkzMyw0Ni42NzUsNy4wMDcsNDYuMTM3LDYuNTUyeiBNMjIsMzJsLTMsOGwtMy0xMGwyMy0xN0wyMiwzMnoiPjwvcGF0aD48L3N2Zz4="
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="hidden lg:block flex">
                    <div className="w-full px-4">
                        <ul className="flex font-link">
                            <li className="pr-4 text-xl font-bold text-primary">
                                <a href="/">HOME</a>
                            </li>
                            <li className="cursor-pointer pr-4 text-xl font-bold hover:text-black">
                                <Link
                                    to="story"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                >
                                    THE STORY
                                </Link>
                            </li>
                            <li className="cursor-pointer pr-4 text-xl font-bold hover:text-black">
                                <Link
                                    to="demoImage"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={1000}
                                >
                                    GALLERY
                                </Link>
                            </li>
                            <li className="cursor-pointer pr-4 text-xl font-bold hover:text-black">
                                <Link
                                    to="roadmap"
                                    spy={true}
                                    smooth={true}
                                    offset={-20}
                                    duration={1000}
                                >
                                    ROADMAP
                                </Link>
                            </li>
                            <li className="cursor-pointer pr-4 text-xl font-bold hover:text-black">
                                <Link
                                    to="featureArtist"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                >
                                    ARTIST
                                </Link>
                            </li>
                            <li className="cursor-pointer text-xl font-bold hover:text-black">
                                <Link
                                    to="team"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                >
                                    TEAM
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </nav>
            <div className="hidden lg:flex w-48 justify-evenly">
                <a href="/">
                    <img
                        alt="svgImg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDUwLjA2MjUgMTAuNDM3NSBDIDQ4LjIxNDg0NCAxMS4yNTc4MTMgNDYuMjM0Mzc1IDExLjgwODU5NCA0NC4xNTIzNDQgMTIuMDU4NTk0IEMgNDYuMjc3MzQ0IDEwLjc4NTE1NiA0Ny45MTAxNTYgOC43Njk1MzEgNDguNjc1NzgxIDYuMzcxMDk0IEMgNDYuNjkxNDA2IDcuNTQ2ODc1IDQ0LjQ4NDM3NSA4LjQwMjM0NCA0Mi4xNDQ1MzEgOC44NjMyODEgQyA0MC4yNjk1MzEgNi44NjMyODEgMzcuNTk3NjU2IDUuNjE3MTg4IDM0LjY0MDYyNSA1LjYxNzE4OCBDIDI4Ljk2MDkzOCA1LjYxNzE4OCAyNC4zNTU0NjkgMTAuMjE4NzUgMjQuMzU1NDY5IDE1Ljg5ODQzOCBDIDI0LjM1NTQ2OSAxNi43MDMxMjUgMjQuNDQ5MjE5IDE3LjQ4ODI4MSAyNC42MjUgMTguMjQyMTg4IEMgMTYuMDc4MTI1IDE3LjgxMjUgOC41MDM5MDYgMTMuNzE4NzUgMy40Mjk2ODggNy40OTYwOTQgQyAyLjU0Mjk2OSA5LjAxOTUzMSAyLjAzOTA2MyAxMC43ODUxNTYgMi4wMzkwNjMgMTIuNjY3OTY5IEMgMi4wMzkwNjMgMTYuMjM0Mzc1IDMuODUxNTYzIDE5LjM4MjgxMyA2LjYxMzI4MSAyMS4yMzA0NjkgQyA0LjkyNTc4MSAyMS4xNzU3ODEgMy4zMzk4NDQgMjAuNzEwOTM4IDEuOTUzMTI1IDE5Ljk0MTQwNiBDIDEuOTUzMTI1IDE5Ljk4NDM3NSAxLjk1MzEyNSAyMC4wMjczNDQgMS45NTMxMjUgMjAuMDcwMzEzIEMgMS45NTMxMjUgMjUuMDU0Njg4IDUuNSAyOS4yMDcwMzEgMTAuMTk5MjE5IDMwLjE1NjI1IEMgOS4zMzk4NDQgMzAuMzkwNjI1IDguNDI5Njg4IDMwLjUxNTYyNSA3LjQ5MjE4OCAzMC41MTU2MjUgQyA2LjgyODEyNSAzMC41MTU2MjUgNi4xODM1OTQgMzAuNDUzMTI1IDUuNTU0Njg4IDMwLjMyODEyNSBDIDYuODY3MTg4IDM0LjQxMDE1NiAxMC42NjQwNjMgMzcuMzkwNjI1IDE1LjE2MDE1NiAzNy40NzI2NTYgQyAxMS42NDQ1MzEgNDAuMjMwNDY5IDcuMjEwOTM4IDQxLjg3MTA5NCAyLjM5MDYyNSA0MS44NzEwOTQgQyAxLjU1ODU5NCA0MS44NzEwOTQgMC43NDIxODggNDEuODI0MjE5IC0wLjA1ODU5MzggNDEuNzI2NTYzIEMgNC40ODgyODEgNDQuNjQ4NDM4IDkuODk0NTMxIDQ2LjM0NzY1NiAxNS43MDMxMjUgNDYuMzQ3NjU2IEMgMzQuNjE3MTg4IDQ2LjM0NzY1NiA0NC45NjA5MzggMzAuNjc5Njg4IDQ0Ljk2MDkzOCAxNy4wOTM3NSBDIDQ0Ljk2MDkzOCAxNi42NDg0MzggNDQuOTQ5MjE5IDE2LjE5OTIxOSA0NC45MzM1OTQgMTUuNzYxNzE5IEMgNDYuOTQxNDA2IDE0LjMxMjUgNDguNjgzNTk0IDEyLjUgNTAuMDYyNSAxMC40Mzc1IFoiPjwvcGF0aD48L3N2Zz4="
                    />
                </a>
                <a href="/">
                    <img
                        alt="svgImg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDQxLjYyNSAxMC43Njk1MzEgQyAzNy42NDQ1MzEgNy41NjY0MDYgMzEuMzQ3NjU2IDcuMDIzNDM4IDMxLjA3ODEyNSA3LjAwMzkwNiBDIDMwLjY2MDE1NiA2Ljk2ODc1IDMwLjI2MTcxOSA3LjIwMzEyNSAzMC4wODk4NDQgNy41ODk4NDQgQyAzMC4wNzQyMTkgNy42MTMyODEgMjkuOTM3NSA3LjkyOTY4OCAyOS43ODUxNTYgOC40MjE4NzUgQyAzMi40MTc5NjkgOC44NjcxODggMzUuNjUyMzQ0IDkuNzYxNzE5IDM4LjU3ODEyNSAxMS41NzgxMjUgQyAzOS4wNDY4NzUgMTEuODY3MTg4IDM5LjE5MTQwNiAxMi40ODQzNzUgMzguOTAyMzQ0IDEyLjk1MzEyNSBDIDM4LjcxMDkzOCAxMy4yNjE3MTkgMzguMzg2NzE5IDEzLjQyOTY4OCAzOC4wNTA3ODEgMTMuNDI5Njg4IEMgMzcuODcxMDk0IDEzLjQyOTY4OCAzNy42ODc1IDEzLjM3ODkwNiAzNy41MjM0MzggMTMuMjc3MzQ0IEMgMzIuNDkyMTg4IDEwLjE1NjI1IDI2LjIxMDkzOCAxMCAyNSAxMCBDIDIzLjc4OTA2MyAxMCAxNy41MDM5MDYgMTAuMTU2MjUgMTIuNDc2NTYzIDEzLjI3NzM0NCBDIDEyLjAwNzgxMyAxMy41NzAzMTMgMTEuMzkwNjI1IDEzLjQyNTc4MSAxMS4xMDE1NjMgMTIuOTU3MDMxIEMgMTAuODA4NTk0IDEyLjQ4NDM3NSAxMC45NTMxMjUgMTEuODcxMDk0IDExLjQyMTg3NSAxMS41NzgxMjUgQyAxNC4zNDc2NTYgOS43NjU2MjUgMTcuNTgyMDMxIDguODY3MTg4IDIwLjIxNDg0NCA4LjQyNTc4MSBDIDIwLjA2MjUgNy45Mjk2ODggMTkuOTI1NzgxIDcuNjE3MTg4IDE5LjkxNDA2MyA3LjU4OTg0NCBDIDE5LjczODI4MSA3LjIwMzEyNSAxOS4zNDM3NSA2Ljk2MDkzOCAxOC45MjE4NzUgNy4wMDM5MDYgQyAxOC42NTIzNDQgNy4wMjM0MzggMTIuMzU1NDY5IDcuNTY2NDA2IDguMzIwMzEzIDEwLjgxMjUgQyA2LjIxNDg0NCAxMi43NjE3MTkgMiAyNC4xNTIzNDQgMiAzNCBDIDIgMzQuMTc1NzgxIDIuMDQ2ODc1IDM0LjM0Mzc1IDIuMTMyODEzIDM0LjQ5NjA5NCBDIDUuMDM5MDYzIDM5LjYwNTQ2OSAxMi45NzI2NTYgNDAuOTQxNDA2IDE0Ljc4MTI1IDQxIEMgMTQuNzg5MDYzIDQxIDE0LjgwMDc4MSA0MSAxNC44MTI1IDQxIEMgMTUuMTMyODEzIDQxIDE1LjQzMzU5NCA0MC44NDc2NTYgMTUuNjIxMDk0IDQwLjU4OTg0NCBMIDE3LjQ0OTIxOSAzOC4wNzQyMTkgQyAxMi41MTU2MjUgMzYuODAwNzgxIDkuOTk2MDk0IDM0LjYzNjcxOSA5Ljg1MTU2MyAzNC41MDc4MTMgQyA5LjQzNzUgMzQuMTQ0NTMxIDkuMzk4NDM4IDMzLjUxMTcxOSA5Ljc2NTYyNSAzMy4wOTc2NTYgQyAxMC4xMjg5MDYgMzIuNjgzNTk0IDEwLjc2MTcxOSAzMi42NDQ1MzEgMTEuMTc1NzgxIDMzLjAwNzgxMyBDIDExLjIzNDM3NSAzMy4wNjI1IDE1Ljg3NSAzNyAyNSAzNyBDIDM0LjE0MDYyNSAzNyAzOC43ODEyNSAzMy4wNDY4NzUgMzguODI4MTI1IDMzLjAwNzgxMyBDIDM5LjI0MjE4OCAzMi42NDg0MzggMzkuODcxMDk0IDMyLjY4MzU5NCA0MC4yMzgyODEgMzMuMTAxNTYzIEMgNDAuNjAxNTYzIDMzLjUxNTYyNSA0MC41NjI1IDM0LjE0NDUzMSA0MC4xNDg0MzggMzQuNTA3ODEzIEMgNDAuMDAzOTA2IDM0LjYzNjcxOSAzNy40ODQzNzUgMzYuODAwNzgxIDMyLjU1MDc4MSAzOC4wNzQyMTkgTCAzNC4zNzg5MDYgNDAuNTg5ODQ0IEMgMzQuNTY2NDA2IDQwLjg0NzY1NiAzNC44NjcxODggNDEgMzUuMTg3NSA0MSBDIDM1LjE5OTIxOSA0MSAzNS4yMTA5MzggNDEgMzUuMjE4NzUgNDEgQyAzNy4wMjczNDQgNDAuOTQxNDA2IDQ0Ljk2MDkzOCAzOS42MDU0NjkgNDcuODY3MTg4IDM0LjQ5NjA5NCBDIDQ3Ljk1MzEyNSAzNC4zNDM3NSA0OCAzNC4xNzU3ODEgNDggMzQgQyA0OCAyNC4xNTIzNDQgNDMuNzg1MTU2IDEyLjc2MTcxOSA0MS42MjUgMTAuNzY5NTMxIFogTSAxOC41IDMwIEMgMTYuNTY2NDA2IDMwIDE1IDI4LjIxMDkzOCAxNSAyNiBDIDE1IDIzLjc4OTA2MyAxNi41NjY0MDYgMjIgMTguNSAyMiBDIDIwLjQzMzU5NCAyMiAyMiAyMy43ODkwNjMgMjIgMjYgQyAyMiAyOC4yMTA5MzggMjAuNDMzNTk0IDMwIDE4LjUgMzAgWiBNIDMxLjUgMzAgQyAyOS41NjY0MDYgMzAgMjggMjguMjEwOTM4IDI4IDI2IEMgMjggMjMuNzg5MDYzIDI5LjU2NjQwNiAyMiAzMS41IDIyIEMgMzMuNDMzNTk0IDIyIDM1IDIzLjc4OTA2MyAzNSAyNiBDIDM1IDI4LjIxMDkzOCAzMy40MzM1OTQgMzAgMzEuNSAzMCBaIj48L3BhdGg+PC9zdmc+"
                    />
                </a>
                <a href="/">
                    <img
                        alt="svgImg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNNDYuMTM3LDYuNTUyYy0wLjc1LTAuNjM2LTEuOTI4LTAuNzI3LTMuMTQ2LTAuMjM4bC0wLjAwMiwwQzQxLjcwOCw2LjgyOCw2LjcyOCwyMS44MzIsNS4zMDQsMjIuNDQ1CWMtMC4yNTksMC4wOS0yLjUyMSwwLjkzNC0yLjI4OCwyLjgxNGMwLjIwOCwxLjY5NSwyLjAyNiwyLjM5NywyLjI0OCwyLjQ3OGw4Ljg5MywzLjA0NWMwLjU5LDEuOTY0LDIuNzY1LDkuMjEsMy4yNDYsMTAuNzU4CWMwLjMsMC45NjUsMC43ODksMi4yMzMsMS42NDYsMi40OTRjMC43NTIsMC4yOSwxLjUsMC4wMjUsMS45ODQtMC4zNTVsNS40MzctNS4wNDNsOC43NzcsNi44NDVsMC4yMDksMC4xMjUJYzAuNTk2LDAuMjY0LDEuMTY3LDAuMzk2LDEuNzEyLDAuMzk2YzAuNDIxLDAsMC44MjUtMC4wNzksMS4yMTEtMC4yMzdjMS4zMTUtMC41NCwxLjg0MS0xLjc5MywxLjg5Ni0xLjkzNWw2LjU1Ni0zNC4wNzcJQzQ3LjIzMSw3LjkzMyw0Ni42NzUsNy4wMDcsNDYuMTM3LDYuNTUyeiBNMjIsMzJsLTMsOGwtMy0xMGwyMy0xN0wyMiwzMnoiPjwvcGF0aD48L3N2Zz4="
                    />
                </a>
            </div>
        </div>
    );
};

export default Header;
