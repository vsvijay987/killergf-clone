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
                                <li className="cursor-pointer  text-xl font-bold hover:text-primary">
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
                                <li className="cursor-pointer text-xl font-bold hover:text-primary">
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
                                <li className="cursor-pointer text-xl font-bold hover:text-primary">
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
                                {/* <li className="cursor-pointer  text-xl font-bold hover:text-black">
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
                                </li> */}
                            </ul>
                            <div className=" mt-12 flex justify-evenly">
                                <a href="/">
                                    <img
                                        alt=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABxklEQVRIie2WPWsUURRAz41GBBG/SGdpYURstTAGRRBE7ARRyC9Q8C8ItiJ+dIKFYiEWirAEU5gilrKFBCy0cHHBRgVRNMZkj8VuYDKZt5kZp9Kcbt7cd8+7d2beG9jgXyeaSKJuBc4AhwCB10ArIhZycVsiYrEowQF1Z0XpcfWDa+mok+pu9aI6o25PJbmvziUD1sYfUX8WSFdYVJfUnnpBLe6wOj+Y8ErdW0LcHiJdoac+Ua+rl1OJ3mYmfFLPD5GOl5BmeaxuSiV7WjBhTj2db5N6toL0rjqSnT+yWs29gvUcBVpAR72pnlPHgeVUNwqYiYhe8q46qj6o2MIyTOZd+YrbQA/4XKGaMnzMD2zOXXeAqYal34H3+cF8xbcblgLMFu1Wq8QR8Ry41rB4unSkOqV2G3ipvpjYBfOtxv73NgG8AX7VLXPArYj4VjpavdJAtV11V6VlqqHe+QvpsnqianuyCzipPrP42BvG1drSjHy/+rKC9Iap46+EbJt6Sn2k/i4pXDB17K0jm1Bb6jv7B3gVXqgHa1U5kO9QL9n/EViPr+pD9VgdV/JZqGPAYWAfsAcYBX4AXWAeaEfEUh3pBv8HfwCk8tBPONBILwAAAABJRU5ErkJggg=="
                                    />
                                </a>
                                <a href="/">
                                    <img
                                        alt="svgImg"
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTU3LjMzMzMzLDIxLjVjLTE5Ljc1ODUsMCAtMzUuODMzMzMsMTYuMDc0ODMgLTM1LjgzMzMzLDM1LjgzMzMzdjU3LjMzMzMzYzAsMTkuNzU4NSAxNi4wNzQ4MywzNS44MzMzMyAzNS44MzMzMywzNS44MzMzM2g1Ny4zMzMzM2MxOS43NTg1LDAgMzUuODMzMzMsLTE2LjA3NDgzIDM1LjgzMzMzLC0zNS44MzMzM3YtNTcuMzMzMzNjMCwtMTkuNzU4NSAtMTYuMDc0ODMsLTM1LjgzMzMzIC0zNS44MzMzMywtMzUuODMzMzN6TTU3LjMzMzMzLDM1LjgzMzMzaDU3LjMzMzMzYzExLjg1MzY3LDAgMjEuNSw5LjY0NjMzIDIxLjUsMjEuNXY1Ny4zMzMzM2MwLDExLjg1MzY3IC05LjY0NjMzLDIxLjUgLTIxLjUsMjEuNWgtNTcuMzMzMzNjLTExLjg1MzY3LDAgLTIxLjUsLTkuNjQ2MzMgLTIxLjUsLTIxLjV2LTU3LjMzMzMzYzAsLTExLjg1MzY3IDkuNjQ2MzMsLTIxLjUgMjEuNSwtMjEuNXpNMTIxLjgzMzMzLDQzYy0zLjk1ODA0LDAgLTcuMTY2NjcsMy4yMDg2MyAtNy4xNjY2Nyw3LjE2NjY3YzAsMy45NTgwNCAzLjIwODYzLDcuMTY2NjcgNy4xNjY2Nyw3LjE2NjY3YzMuOTU4MDQsMCA3LjE2NjY3LC0zLjIwODYzIDcuMTY2NjcsLTcuMTY2NjdjMCwtMy45NTgwNCAtMy4yMDg2MywtNy4xNjY2NyAtNy4xNjY2NywtNy4xNjY2N3pNODYsNTAuMTY2NjdjLTE5Ljc1ODUsMCAtMzUuODMzMzMsMTYuMDc0ODMgLTM1LjgzMzMzLDM1LjgzMzMzYzAsMTkuNzU4NSAxNi4wNzQ4MywzNS44MzMzMyAzNS44MzMzMywzNS44MzMzM2MxOS43NTg1LDAgMzUuODMzMzMsLTE2LjA3NDgzIDM1LjgzMzMzLC0zNS44MzMzM2MwLC0xOS43NTg1IC0xNi4wNzQ4MywtMzUuODMzMzMgLTM1LjgzMzMzLC0zNS44MzMzM3pNODYsNjQuNWMxMS44NTM2NywwIDIxLjUsOS42NDYzMyAyMS41LDIxLjVjMCwxMS44NTM2NyAtOS42NDYzMywyMS41IC0yMS41LDIxLjVjLTExLjg1MzY3LDAgLTIxLjUsLTkuNjQ2MzMgLTIxLjUsLTIxLjVjMCwtMTEuODUzNjcgOS42NDYzMywtMjEuNSAyMS41LC0yMS41eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                                    />
                                </a>

                                <a href="/">
                                    <img
                                        alt="svgImg"
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE0NC4wMjEzMywzOS44MjM3M2MtMTMuODk3NiwtMTEuMTY4NTMgLTM1Ljg3MzQ3LC0xMy4wNjA1MyAtMzYuODAyMjcsLTEzLjE0MDhjLTEuNDY3NzMsLTAuMTI2MTMgLTIuODYwOTMsMC43MDUyIC0zLjQ2MjkzLDIuMDQ2OGMtMC4wMjI5MywwLjA0NTg3IC0xLjI0OTg3LDMuNjA2MjcgLTIuNDM2NjcsNy4wNDA1M2MxNi4xNTA4LDIuODI2NTMgMjcuMTI0NCw5LjA5ODggMjcuNzA5Miw5LjQ0MjhjMi43NDA1MywxLjU5Mzg3IDMuNjU3ODcsNS4xMDg0IDIuMDU4MjcsNy44NDMyYy0xLjA2MDY3LDEuODIzMiAtMi45ODEzMywyLjg0MzczIC00Ljk1MzYsMi44NDM3M2MtMC45ODA0LDAgLTEuOTY2NTMsLTAuMjQ2NTMgLTIuODcyNCwtMC43NzRjLTAuMTYwNTMsLTAuMDk3NDcgLTE2LjI1OTczLC05LjI1OTMzIC0zNy4yNDk0NywtOS4yNTkzM2MtMjAuOTk1NDcsMCAtMzcuMTAwNCw5LjE2NzYgLTM3LjI2MDkzLDkuMjU5MzNjLTIuNzM0OCwxLjU4ODEzIC02LjI0MzYsMC42NTM2IC03LjgzMTczLC0yLjA4NjkzYy0xLjU4ODEzLC0yLjcyOTA3IC0wLjY2NTA3LC02LjIzMjEzIDIuMDY0LC03LjgyNmMwLjU4NDgsLTAuMzQ0IDExLjU5ODUzLC02LjYzOTIgMjcuNzk1MiwtOS40NmMtMS4yNDk4NywtMy40NzQ0IC0yLjUxMTIsLTYuOTc3NDcgLTIuNTM0MTMsLTcuMDIzMzNjLTAuNjAyLC0xLjM0NzMzIC0xLjk5NTIsLTIuMTk1ODcgLTMuNDYyOTMsLTIuMDQ2OGMtMC45Mjg4LDAuMDc0NTMgLTIyLjkwNDY3LDEuOTY2NTMgLTM2Ljk4NTczLDEzLjI4OTg3Yy03LjM2MTYsNi43OTk3MyAtMjIuMDYxODcsNDYuNTU0NjcgLTIyLjA2MTg3LDgwLjkyNmMwLDAuNjA3NzMgMC4xNTQ4LDEuMTk4MjcgMC40NTg2NywxLjcyNTczYzEwLjE1MzczLDE3LjgzMDY3IDM3LjgzNDI3LDIyLjQ5NzYgNDQuMTQwOTMsMjIuNjk4MjdjMC4wNDAxMywwLjAwNTczIDAuMDc0NTMsMC4wMDU3MyAwLjEwODkzLDAuMDA1NzNjMS4xMTIyNywwIDIuMTYxNDcsLTAuNTMzMiAyLjgyMDgsLTEuNDMzMzNsNi44MjI2NywtOS4yNDIxM2MtMTQuOTY0LC0zLjYwNjI3IC0yMi44NzYsLTkuMjc2NTMgLTIzLjM1MTg3LC05LjYyNjI3Yy0yLjU0NTYsLTEuODc0OCAtMy4wOTYsLTUuNDYzODcgLTEuMjIxMiwtOC4wMTUyYzEuODY5MDcsLTIuNTM5ODcgNS40NDY2NywtMy4xMDE3MyA3Ljk5MjI3LC0xLjIzODRjMC4yMTIxMywwLjEzNzYgMTQuODE0OTMsMTAuMzYwMTMgNDIuNDk1NDcsMTAuMzYwMTNjMjcuNzg5NDcsMCA0Mi4zNTIxMywtMTAuMjYyNjcgNDIuNDk1NDcsLTEwLjM2NTg3YzIuNTQ1NiwtMS44NDYxMyA2LjEzNDY3LC0xLjI5IDcuOTk4LDEuMjY3MDdjMS44NTc2LDIuNTQ1NiAxLjMxODY3LDYuMTExNzMgLTEuMjE1NDcsNy45ODA4Yy0wLjQ3NTg3LDAuMzQ5NzMgLTguMzQ3NzMsNi4wMDg1MyAtMjMuMjc3MzMsOS42MTQ4bDYuNzM2NjcsOS4yNTkzM2MwLjY1OTMzLDAuOTA1ODcgMS43MDg1MywxLjQzMzMzIDIuODIwOCwxLjQzMzMzYzAuMDQwMTMsMCAwLjA3NDUzLDAgMC4xMDg5MywtMC4wMDU3M2M2LjMxMjQsLTAuMjAwNjcgMzMuOTkyOTMsLTQuODY3NiA0NC4xNDA5MywtMjIuNjk4MjdjMC4zMDM4NywtMC41Mjc0NyAwLjQ1ODY3LC0xLjExOCAwLjQ1ODY3LC0xLjcyNTczYzAsLTM0LjM2NTYgLTE0LjcwMDI3LC03NC4xMjA1MyAtMjIuMjQ1MzMsLTgxLjA2OTMzek02My4wNjY2NywxMDguOTMzMzNjLTYuMzM1MzMsMCAtMTEuNDY2NjcsLTYuNDE1NiAtMTEuNDY2NjcsLTE0LjMzMzMzYzAsLTcuOTE3NzMgNS4xMzEzMywtMTQuMzMzMzMgMTEuNDY2NjcsLTE0LjMzMzMzYzYuMzM1MzMsMCAxMS40NjY2Nyw2LjQxNTYgMTEuNDY2NjcsMTQuMzMzMzNjMCw3LjkxNzczIC01LjEzMTMzLDE0LjMzMzMzIC0xMS40NjY2NywxNC4zMzMzM3pNMTA4LjkzMzMzLDEwOC45MzMzM2MtNi4zMzUzMywwIC0xMS40NjY2NywtNi40MTU2IC0xMS40NjY2NywtMTQuMzMzMzNjMCwtNy45MTc3MyA1LjEzMTMzLC0xNC4zMzMzMyAxMS40NjY2NywtMTQuMzMzMzNjNi4zMzUzMywwIDExLjQ2NjY3LDYuNDE1NiAxMS40NjY2NywxNC4zMzMzM2MwLDcuOTE3NzMgLTUuMTMxMzMsMTQuMzMzMzMgLTExLjQ2NjY3LDE0LjMzMzMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
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
                            <li className="cursor-pointer pr-4 text-xl font-bold hover:text-primary">
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
                            <li className="cursor-pointer pr-4 text-xl font-bold hover:text-primary">
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
                            <li className="cursor-pointer pr-4 text-xl font-bold  hover:text-primary">
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
                            {/* <li className="cursor-pointer pr-4 text-xl font-bold hover:text-black">
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
                            </li> */}
                        </ul>
                    </div>
                </section>
            </nav>
            <div className="hidden lg:flex w-48 justify-evenly">
                <a href="/">
                    <img
                        alt=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABxklEQVRIie2WPWsUURRAz41GBBG/SGdpYURstTAGRRBE7ARRyC9Q8C8ItiJ+dIKFYiEWirAEU5gilrKFBCy0cHHBRgVRNMZkj8VuYDKZt5kZp9Kcbt7cd8+7d2beG9jgXyeaSKJuBc4AhwCB10ArIhZycVsiYrEowQF1Z0XpcfWDa+mok+pu9aI6o25PJbmvziUD1sYfUX8WSFdYVJfUnnpBLe6wOj+Y8ErdW0LcHiJdoac+Ua+rl1OJ3mYmfFLPD5GOl5BmeaxuSiV7WjBhTj2db5N6toL0rjqSnT+yWs29gvUcBVpAR72pnlPHgeVUNwqYiYhe8q46qj6o2MIyTOZd+YrbQA/4XKGaMnzMD2zOXXeAqYal34H3+cF8xbcblgLMFu1Wq8QR8Ry41rB4unSkOqV2G3ipvpjYBfOtxv73NgG8AX7VLXPArYj4VjpavdJAtV11V6VlqqHe+QvpsnqianuyCzipPrP42BvG1drSjHy/+rKC9Iap46+EbJt6Sn2k/i4pXDB17K0jm1Bb6jv7B3gVXqgHa1U5kO9QL9n/EViPr+pD9VgdV/JZqGPAYWAfsAcYBX4AXWAeaEfEUh3pBv8HfwCk8tBPONBILwAAAABJRU5ErkJggg=="
                    />
                </a>
                <a href="/">
                    <img
                        alt="svgImg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTU3LjMzMzMzLDIxLjVjLTE5Ljc1ODUsMCAtMzUuODMzMzMsMTYuMDc0ODMgLTM1LjgzMzMzLDM1LjgzMzMzdjU3LjMzMzMzYzAsMTkuNzU4NSAxNi4wNzQ4MywzNS44MzMzMyAzNS44MzMzMywzNS44MzMzM2g1Ny4zMzMzM2MxOS43NTg1LDAgMzUuODMzMzMsLTE2LjA3NDgzIDM1LjgzMzMzLC0zNS44MzMzM3YtNTcuMzMzMzNjMCwtMTkuNzU4NSAtMTYuMDc0ODMsLTM1LjgzMzMzIC0zNS44MzMzMywtMzUuODMzMzN6TTU3LjMzMzMzLDM1LjgzMzMzaDU3LjMzMzMzYzExLjg1MzY3LDAgMjEuNSw5LjY0NjMzIDIxLjUsMjEuNXY1Ny4zMzMzM2MwLDExLjg1MzY3IC05LjY0NjMzLDIxLjUgLTIxLjUsMjEuNWgtNTcuMzMzMzNjLTExLjg1MzY3LDAgLTIxLjUsLTkuNjQ2MzMgLTIxLjUsLTIxLjV2LTU3LjMzMzMzYzAsLTExLjg1MzY3IDkuNjQ2MzMsLTIxLjUgMjEuNSwtMjEuNXpNMTIxLjgzMzMzLDQzYy0zLjk1ODA0LDAgLTcuMTY2NjcsMy4yMDg2MyAtNy4xNjY2Nyw3LjE2NjY3YzAsMy45NTgwNCAzLjIwODYzLDcuMTY2NjcgNy4xNjY2Nyw3LjE2NjY3YzMuOTU4MDQsMCA3LjE2NjY3LC0zLjIwODYzIDcuMTY2NjcsLTcuMTY2NjdjMCwtMy45NTgwNCAtMy4yMDg2MywtNy4xNjY2NyAtNy4xNjY2NywtNy4xNjY2N3pNODYsNTAuMTY2NjdjLTE5Ljc1ODUsMCAtMzUuODMzMzMsMTYuMDc0ODMgLTM1LjgzMzMzLDM1LjgzMzMzYzAsMTkuNzU4NSAxNi4wNzQ4MywzNS44MzMzMyAzNS44MzMzMywzNS44MzMzM2MxOS43NTg1LDAgMzUuODMzMzMsLTE2LjA3NDgzIDM1LjgzMzMzLC0zNS44MzMzM2MwLC0xOS43NTg1IC0xNi4wNzQ4MywtMzUuODMzMzMgLTM1LjgzMzMzLC0zNS44MzMzM3pNODYsNjQuNWMxMS44NTM2NywwIDIxLjUsOS42NDYzMyAyMS41LDIxLjVjMCwxMS44NTM2NyAtOS42NDYzMywyMS41IC0yMS41LDIxLjVjLTExLjg1MzY3LDAgLTIxLjUsLTkuNjQ2MzMgLTIxLjUsLTIxLjVjMCwtMTEuODUzNjcgOS42NDYzMywtMjEuNSAyMS41LC0yMS41eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                    />
                </a>

                <a href="/">
                    <img
                        alt="svgImg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE0NC4wMjEzMywzOS44MjM3M2MtMTMuODk3NiwtMTEuMTY4NTMgLTM1Ljg3MzQ3LC0xMy4wNjA1MyAtMzYuODAyMjcsLTEzLjE0MDhjLTEuNDY3NzMsLTAuMTI2MTMgLTIuODYwOTMsMC43MDUyIC0zLjQ2MjkzLDIuMDQ2OGMtMC4wMjI5MywwLjA0NTg3IC0xLjI0OTg3LDMuNjA2MjcgLTIuNDM2NjcsNy4wNDA1M2MxNi4xNTA4LDIuODI2NTMgMjcuMTI0NCw5LjA5ODggMjcuNzA5Miw5LjQ0MjhjMi43NDA1MywxLjU5Mzg3IDMuNjU3ODcsNS4xMDg0IDIuMDU4MjcsNy44NDMyYy0xLjA2MDY3LDEuODIzMiAtMi45ODEzMywyLjg0MzczIC00Ljk1MzYsMi44NDM3M2MtMC45ODA0LDAgLTEuOTY2NTMsLTAuMjQ2NTMgLTIuODcyNCwtMC43NzRjLTAuMTYwNTMsLTAuMDk3NDcgLTE2LjI1OTczLC05LjI1OTMzIC0zNy4yNDk0NywtOS4yNTkzM2MtMjAuOTk1NDcsMCAtMzcuMTAwNCw5LjE2NzYgLTM3LjI2MDkzLDkuMjU5MzNjLTIuNzM0OCwxLjU4ODEzIC02LjI0MzYsMC42NTM2IC03LjgzMTczLC0yLjA4NjkzYy0xLjU4ODEzLC0yLjcyOTA3IC0wLjY2NTA3LC02LjIzMjEzIDIuMDY0LC03LjgyNmMwLjU4NDgsLTAuMzQ0IDExLjU5ODUzLC02LjYzOTIgMjcuNzk1MiwtOS40NmMtMS4yNDk4NywtMy40NzQ0IC0yLjUxMTIsLTYuOTc3NDcgLTIuNTM0MTMsLTcuMDIzMzNjLTAuNjAyLC0xLjM0NzMzIC0xLjk5NTIsLTIuMTk1ODcgLTMuNDYyOTMsLTIuMDQ2OGMtMC45Mjg4LDAuMDc0NTMgLTIyLjkwNDY3LDEuOTY2NTMgLTM2Ljk4NTczLDEzLjI4OTg3Yy03LjM2MTYsNi43OTk3MyAtMjIuMDYxODcsNDYuNTU0NjcgLTIyLjA2MTg3LDgwLjkyNmMwLDAuNjA3NzMgMC4xNTQ4LDEuMTk4MjcgMC40NTg2NywxLjcyNTczYzEwLjE1MzczLDE3LjgzMDY3IDM3LjgzNDI3LDIyLjQ5NzYgNDQuMTQwOTMsMjIuNjk4MjdjMC4wNDAxMywwLjAwNTczIDAuMDc0NTMsMC4wMDU3MyAwLjEwODkzLDAuMDA1NzNjMS4xMTIyNywwIDIuMTYxNDcsLTAuNTMzMiAyLjgyMDgsLTEuNDMzMzNsNi44MjI2NywtOS4yNDIxM2MtMTQuOTY0LC0zLjYwNjI3IC0yMi44NzYsLTkuMjc2NTMgLTIzLjM1MTg3LC05LjYyNjI3Yy0yLjU0NTYsLTEuODc0OCAtMy4wOTYsLTUuNDYzODcgLTEuMjIxMiwtOC4wMTUyYzEuODY5MDcsLTIuNTM5ODcgNS40NDY2NywtMy4xMDE3MyA3Ljk5MjI3LC0xLjIzODRjMC4yMTIxMywwLjEzNzYgMTQuODE0OTMsMTAuMzYwMTMgNDIuNDk1NDcsMTAuMzYwMTNjMjcuNzg5NDcsMCA0Mi4zNTIxMywtMTAuMjYyNjcgNDIuNDk1NDcsLTEwLjM2NTg3YzIuNTQ1NiwtMS44NDYxMyA2LjEzNDY3LC0xLjI5IDcuOTk4LDEuMjY3MDdjMS44NTc2LDIuNTQ1NiAxLjMxODY3LDYuMTExNzMgLTEuMjE1NDcsNy45ODA4Yy0wLjQ3NTg3LDAuMzQ5NzMgLTguMzQ3NzMsNi4wMDg1MyAtMjMuMjc3MzMsOS42MTQ4bDYuNzM2NjcsOS4yNTkzM2MwLjY1OTMzLDAuOTA1ODcgMS43MDg1MywxLjQzMzMzIDIuODIwOCwxLjQzMzMzYzAuMDQwMTMsMCAwLjA3NDUzLDAgMC4xMDg5MywtMC4wMDU3M2M2LjMxMjQsLTAuMjAwNjcgMzMuOTkyOTMsLTQuODY3NiA0NC4xNDA5MywtMjIuNjk4MjdjMC4zMDM4NywtMC41Mjc0NyAwLjQ1ODY3LC0xLjExOCAwLjQ1ODY3LC0xLjcyNTczYzAsLTM0LjM2NTYgLTE0LjcwMDI3LC03NC4xMjA1MyAtMjIuMjQ1MzMsLTgxLjA2OTMzek02My4wNjY2NywxMDguOTMzMzNjLTYuMzM1MzMsMCAtMTEuNDY2NjcsLTYuNDE1NiAtMTEuNDY2NjcsLTE0LjMzMzMzYzAsLTcuOTE3NzMgNS4xMzEzMywtMTQuMzMzMzMgMTEuNDY2NjcsLTE0LjMzMzMzYzYuMzM1MzMsMCAxMS40NjY2Nyw2LjQxNTYgMTEuNDY2NjcsMTQuMzMzMzNjMCw3LjkxNzczIC01LjEzMTMzLDE0LjMzMzMzIC0xMS40NjY2NywxNC4zMzMzM3pNMTA4LjkzMzMzLDEwOC45MzMzM2MtNi4zMzUzMywwIC0xMS40NjY2NywtNi40MTU2IC0xMS40NjY2NywtMTQuMzMzMzNjMCwtNy45MTc3MyA1LjEzMTMzLC0xNC4zMzMzMyAxMS40NjY2NywtMTQuMzMzMzNjNi4zMzUzMywwIDExLjQ2NjY3LDYuNDE1NiAxMS40NjY2NywxNC4zMzMzM2MwLDcuOTE3NzMgLTUuMTMxMzMsMTQuMzMzMzMgLTExLjQ2NjY3LDE0LjMzMzMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                    />
                </a>
            </div>
        </div>
    );
};

export default Header;
