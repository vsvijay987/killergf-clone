import React from "react";
import styles from "./Roadmap.module.css";

const Roadmap = () => {
    return (
        <div id="roadmap" className="px-2 mx-auto text-center lg:w-5/6 pt-16">
            <p className="lg:text-5xl text-4xl heading mb-10">ROADMAP</p>
            <div className={styles.timeline}>
                <div className={[styles.timelineBox, styles.left].join(" ")}>
                    <div className={styles.timelineContainer}>
                        <p className="font-para flex items-center gap-4 font-extrabold text-3xl text-primary mb-2 ">
                            <span className="hidden lg:block">
                                <img
                                    alt=""
                                    src="data:image/png;base64,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"
                                />
                            </span>
                            <span> STAGE 1 (UPTO Q3 2022)</span>
                        </p>
                        <ul className="lg:pl-16 pl-8 font-para list-disc list-outside">
                            <li>Concept & Design</li>
                            <li>Community Building </li>
                        </ul>
                    </div>
                </div>

                <div className={[styles.timelineBox, styles.left].join(" ")}>
                    <div className={styles.timelineContainer}>
                        <p className="font-para flex items-center gap-4 font-extrabold text-3xl text-primary mb-2 ">
                            STAGE 1.1 (Q4 2022)
                            <span className="hidden lg:block">
                                <img
                                    alt=""
                                    src="data:image/png;base64,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"
                                />
                            </span>
                        </p>
                        <ul className="lg:pl-16 font-para pl-8 list-disc list-outside">
                            <li>Engaging/Buildup</li>
                            <li>Giveaways/Promoting </li>
                            <li>LAUNCH STAGE</li>
                            <ul className="font-para pl-8 list-decimal list-inside">
                                <li>Whitelist</li>
                                <li>Raffle</li>
                                <li>Public sale</li>
                            </ul>
                            <li>Charity</li>
                            <li>Our own HQ in DCL, OTHERSIDE and SANDBOX</li>
                            <li>
                                Launch of the most elaborate TREASURE HUNT ever
                                seen
                            </li>
                            <li>
                                GRAND REVEAL at the end of the TREASURE HUNT
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={[styles.timelineBox, styles.left].join(" ")}>
                    <div className={styles.timelineContainer}>
                        <p className="font-para flex items-center gap-4 font-extrabold text-3xl text-primary mb-2 ">
                            <span className="hidden lg:block">
                                <img
                                    alt=""
                                    src="data:image/png;base64,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"
                                />
                            </span>
                            STAGE 1.2 (Q1 2023)
                        </p>
                        <ul className="font-para list-disc list-outside font-para pl-8 lg:pl-16">
                            <li>Rewarding with PASSIVE INCOME</li>
                            <li>Investment in first INCUBATOR</li>
                            <li>Roping in MEGA INFLUENCER</li>
                            <li>First party in DCL</li>
                            <li>Launch of $Mohur pre-sale</li>
                            <li>Launch of LAND MAFIA </li>
                        </ul>
                    </div>
                </div>

                <div className={[styles.timelineBox, styles.right].join(" ")}>
                    <div className={styles.timelineContainer}>
                        <p className="font-para flex items-center gap-4 font-extrabold text-3xl text-primary mb-2 ">
                            STAGE 1.3 (Q2&3 2023)
                            <span className="hidden lg:block">
                                <img
                                    alt=""
                                    src="data:image/png;base64,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"
                                />
                            </span>
                        </p>
                        <ul className="font-para list-disc pl-8 lg:pl-16 list-outside">
                            <li>
                                Launch OF Second Collection and loot boxes FOR
                                OUR P2E GAME
                            </li>
                            <li>Launch of RENAISSANCE DAO</li>
                            <li>audit of $Mohur </li>
                            <li>Launch of NEXT COLLECTION</li>
                            <li>Regular PASSIVE INCOME</li>
                            <li>COINMARKETCAP LISTING for $Mohur</li>
                            <li>Listing on DEX for $Mohur</li>
                        </ul>
                    </div>
                </div>
                <div className={[styles.timelineBox, styles.left].join(" ")}>
                    <div className={styles.timelineContainer}>
                        <p className="font-para flex items-center gap-4 font-extrabold text-3xl text-primary mb-2 ">
                            <span className="hidden lg:block">
                                {" "}
                                <img
                                    alt=""
                                    src="data:image/png;base64,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"
                                />
                            </span>
                            STAGE 2.0 (2024)
                        </p>
                        <ul className="font-para pl-8 lg:pl-16 list-disc list-outside">
                            <li>Launch of P2E Game</li>
                            <li>
                                RENAISSANCE DAO begins taking decisions together
                            </li>
                            <li>AIRDROP to all senators</li>
                            <li>
                                PARTIES IN A PLACE IN EVERY CONTINENT TO
                                CELEBRATE STAGE 1 COMPLETION
                            </li>
                            <li>LAND SALES OF OUR METAVERSE</li>
                            <li>FIRST COMMUNITY DRIVEN PROJECT </li>
                        </ul>
                    </div>
                </div>
                <div className={[styles.timelineBox, styles.right].join(" ")}>
                    <div className={styles.timelineContainer}>
                        <p className="font-para flex items-center gap-4 font-extrabold text-3xl text-primary mb-2 ">
                            STAGE 3.0 (Q4 2025 & 2026)
                            <span className="hidden lg:block">
                                {" "}
                                <img
                                    alt=""
                                    src="data:image/png;base64,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"
                                />
                            </span>
                        </p>
                        <ul className="pl-8 lg:pl-16 font-para list-disc list-outside">
                            <li>Listing on MAJOR EXCHANGES</li>
                            <li>Launch of METAVERSE </li>
                            <li>Listing on COINBASE & BINANCE </li>
                            <li>FREE WFH IN SOME PLACES SELECTED </li>
                            <li>
                                BUILDING OF PARALLEL WORLD MINDFULNESS AND YOGA
                                RETREAT
                            </li>
                            <li>TOGETHER WE BUILD ROADMAP AHEAD</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.timelineDivider}>
                    <div className={styles.timelineTraveler}>
                        <div className="h-24 w-24">
                            <img
                                alt=""
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAAKgklEQVRYhb2YeXDV1RXHv/f+1rf+3nvJywIhgYQtCBqEEJbKpFVHGVEJiEBd6grWMkq1jrW4jhW1VdRal46MUrSIBi3a6lSdjihUlGBAiSCJgIBAgLz9937vt97bP0JCkNBqq96/7pxzzzmfe87cc37vAX3WxnUfnDtt2iVh/ECroaEh/Nfm5ml9ZbRnU9D1K4aNHLY64GfLfiggAvH5wZVVzQf37Ln8BCBFVf70cUurJ8nyrHnz5hV/3zANDQ0VwWBo+qqXm72oFnnmOCDXMFYRDvnjLZ/IquyjjsNXft9AsuRbLcsK3b6jQwLncmL/wRd7gagszYDn4dDhLjkWiyGqFZ01Y8bscd8XzIQJkyeVlpQ3RKMxmJYl27aNgF9tAgDKk0mNUKqAcaQzGeo6DiilRJbk1d8XkCxLL4MAplkAY5y6rgtZVpTkzp0aZbJ6LcABAIRQdCW74DEP4ZA2uKlpzi3fNcyECZPviheVVBQKBeRyWQAA5xycMXiCdA1llJ8B3g0kSxIDAJ/qh6ZFEAyEHpg586dV3xVMfX19dWm89E5/IAhJlgEAhHRng3EOKglTKAgpBScAgEEDyy0AyOnd5BEtQgWBvPtdASlK8N1gKEwZ4zALBgBAEiUb6M4SFYRSSglVe0o2fNhQGwAcx4FRMCDLMrRQZMisprlL/1+YcWPr7y8tKa2klCKfz4ExBgCIx4u6gQAQ0ABlfXpR/el1pGefy3UbhcNh+AKBRTNmzK77X2Hq6+rrSsvKb1VVH2zbhmkWenWTJzb0OckppQQu0M1RUTEwJAjde84Z0uk0CCGIRWJEVdR35s+fL31bmKFDhyqhaGStpsUI5xy6njkWnnOc1dgYAgACDhDCKSPc5aS7ZJQQ0njGlFyPge1YyOd1SJIELRwpTiZy674tUDxevq6oKK5RSpDNZuB5rFdXHIvmIlr4aFUIPMfdT8H5AUIJ2NGXdnHThXJfh3o+B9MswHEdKIraMHPm3Ce/KUz9uIbHQsFQves4MPJ52LZ1nP7aKy+XAcD1PACA5zmfUsZIM0DAFRGMcwQCAeXHU49liXMgnUnDsrqdqYr686ameVf+N5ixY8fO07ToDQCQN/LIG/pxek0L66eNGaMUTBOHu7ogSRI8zt8i3UFdBhDCGAM3HTDP8xbc8Ctq2zbpJxYY87yCWRi/Zk3zlv7048dPGhsOBVtEURL6t2f8oSX3eqoiiZlcDuVlZSgpjttqNKJQAGAePwQAlFIIfgVEEoRbFy3M9Oes+5wgqIpvw4wZc2q+rps4ceLgYDDwwclgHMfBqaNHfem4tpjJdRciFo3BMM3NQM+0d9zjRoSoKhg+pjYyc8b0Lsa8fqEEQVBlWd7c1NRU0iMbN25csSz5P5ElWe171rIspFJd2LtnFwiz1825qGlITx+KhDX4fT44jn0n0PPeAbiO3SWItKiPCJxzvLyqueOFF14aJisKZEmGIIrH39h1k8mkWb116/uuFtRaQppWyxmH4zpwbAuWZcHz3KOZiG568vE/1AmCIAIAIQSjRtbCddz2SHnpCADo9W4ZhWm+oP8j17YJoQSiLIMQgovnzh6aSCR3v/b6G0O6nVCIggBBFEEpBaU0FvTjHctyyvfnOysC2TRURTkho4GAf+ujDz9U2wMDAAPKyqHIMs9l0pf2yHq7dEDTWhzTvFdSFRSyOtKdR5BPZ+CYFlmw4Jqqq668rL07awyO68A0CzCMPHQ9B6OQr6+qHFwAAN0oQDcK4EfbCABoEa31qccfr/b5fIFeWTiMAeXlSCVT95XX1LT0yE94RWZe/4fsU8/Rkyk4pt0rJ4TYK5tfbXn9jTennHD9oyuRTHzx+Y7tNZxzIokiwsEAqquq1t+/5L4GQRB6u7wW1jCspgbpdOrNooqK8/r66PdZW4a+SlLVOUY6C8soHKf7Yvfudffc92CD63lyf7bpTPrLbdvaqjhALpx+Xtf1868tlqRjEydeXIyqQZVIpFKvlAyquOjr9v0CAYCVy90h+tW7Xcum+XQWnB1r+aZZ2HbXkt+pe/d9Vd2fbd7Q953ZODU0auSICKUU8Xgc4WAQg6sGIxQKecl05s6yyool/dn2C1RdPXJ6IOB7Nh6PW6+taZb9fl+Jkc7CNo9r/YV/vvf+xueeXznF8zzx6z58qpqcM7tJpATheHExakeMhCTJndcvutlJZdKqaZpXrV+/9u/fCKiysmorpXS0pkXBOe9s+XDdclFRbnFtRzAyWTD3WG9yXXfXsj+vSLy3fkP9Cc4J8RYuuDo7fuzYaOfhQ2/esvju0wmlZalUEoyxttbWjWO+IdCQTQAfJwgiIpEobLuwKiRT8vulj0ycMnVqpWWYpJDTjytjKp1ueWDpY0V9y+g4DrK5LEKh8D5CyEZVUWYlkgm4rgsAm1pbN554if6AqqqqajnHbwDSoKq+YYFAgKcOHzzAHHPgwIqKI8uWr/BGnjKqzMobsHSj9+sPIM6+r/Z99MSy58o7OjpqcroOzjlkWfaikYiQ03UYhtEBkI8AsqS19cPtX4/d77zJZDJd628fZF9Qx6e91WapLpdkXzAkmfksOGMdmUw2yVxGY8XF6VhpPCxIMmGeC86YEAwGK08bc0psbN1peiaTcQ8c7JSikajjeZ5I3Iyx9IKMPquOPXT3itYP+ot9QoY6nmmoEBjuyOv6NZmsTj2idP5suVsWiRRBUeTdv1x43dGOTeBTVYTCYbd8wIDOmmFDi41MVk2lUkgkEr3fOK+s+Vvy07Ztsa5EFx4+P3lIYFZpWAvxYCC4WvC8X1dd37Krb/zeTp1d2VjctWLyYoGhA8B8fyBACSEQuFV2w0+Ez3O5DGzbHtK+c9fBkngcAwcOdELh8GeO4ywcOXr0IElRfZZh3B4KhQ+Oqq3lI4YNh+M4dtu2z2PZbAZX1BvtArNKCSEI+P0E4LM9gX7WuXzy4uzKxt7/EggAJFZMWiQI9B4AYY/hX7mCM9xxefzQoSMAOKhA2XUv4rBLgmVlpSXuZXNm33jFggVPE0IY+lmcc7K15eO7H/7jE4v37N0nECfded85iRLmMQoQlJUWgwr0iF8R2lWJTgGQ5ZzdFb10w6Nk19MTzyeU/zYaEEcAUACgYHlmSndNx7XhWlanoEg3nv+IHqWUrIpEYmDMa9+6dcuI/mB61plnnrtDFOjwrkQCnLO5z15aSLmW8xihtExRVBSFVZ9PoT1T2MqZXrvjYDEl4NWc49SU7rZn8+6Bgykbh7OuSgVa0PzK1eNu21Fbd1Pb25Tyiu5fDVlIkjy8sbFRPRnMpEmTfLIkDc9ks0eHLBlQd1Pb2+Nv21FbpAWvFiWpcDjrKAdTNnTD3a8bbrvj8jEEvFrM5LJ7HdtmrsfGeB6Dz6fujITCd9X8YuNf+gZhjLYQwj3PY4LruvratWvNkwFt2LChcPZZ03TPc4MAPEJI7zQffF3LqwBe3fnUxEuyuew9iSP5GkGgA0WBMlEU9hAAaHmw9mwKPk8QyVt1N29/6WSBBg2qrlcU8UeqKq9ua2vb959KNnXq1EG2zS+yLGvd5s0bN53s3JaHa+d4Lj+HgbxYf+v2d/4N6hS8vOTy2zMAAAAASUVORK5CYII="
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="text-left lg:mx-48">
                <div className="flex mb-4 gap-4">
                    <div className="pt-2">
                        <p className="font-para flex items-center gap-4 font-extrabold text-3xl text-primary mb-2 ">
                            <span>
                                <img
                                    alt=""
                                    src="data:image/png;base64,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"
                                />
                            </span>
                            STAGE 1 (UPTO MAY 2022)
                        </p>
                        <ul className="pl-16 font-para list-disc list-inside">
                            <li>Concept & Design</li>
                            <li>Community Building </li>
                        </ul>
                    </div>
                </div>
                <div className="flex mb-4 gap-4">
                    <div className="pt-2">
                        <p className="font-para flex items-center gap-4 font-extrabold text-3xl text-primary mb-2 ">
                            <span>
                                <img
                                    alt=""
                                    src="data:image/png;base64,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"
                                />
                            </span>
                            STAGE 1.1 (JUNE/JULY 2022)
                        </p>
                        <ul className="font-para pl-16 list-disc list-inside">
                            <li>Engaging/Buildup</li>
                            <li>Giveaways/Promoting </li>
                            <li>Launch stage</li>
                            <ul className="font-para pl-8 list-decimal list-inside">
                                <li>Whitelist</li>
                                <li>Raffle</li>
                                <li>Public sale</li>
                            </ul>
                            <li>Charity</li>
                            <li>Our own HQ in DCL and Sandbox</li>
                            <li>
                                Launch of the most elaborate treasure hunt ever
                                seen
                            </li>
                            <li>Grand reveal at the end of the treasure</li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-4 mb-4">
                    <div className="pt-2">
                        <p className="font-para flex items-center gap-4 font-extrabold text-3xl text-primary mb-2 ">
                            <span>
                                <img
                                    alt=""
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAKNElEQVRoge2ZaXCVVxnHf88577252W5IQtIkFMJWtmAtDVDa2hawqWNCAgRCRW1dp3WbuqJOR51oRx2VqY5144PWGau0aUlJ0Dhd1XboQqlQEBrSkJAAySUEyM1G7vKe44fkXrYkQMt1Ru3/03vOs/7fszzPfS+8i/9hlNZVLPxN/fT1iYyhEulcXP3pHD3wzUTGSBiB4k33eETs2in0zK+pKfImKk7CCBTkdt0OZKdKSAWThz6TqDgJI2BgXew5S/V/KlFxEkKgeNM9HoGVsfHV9BT9rXqpk4hYCSGQd9WxJUBmbJwuIb2/+PCaRMRKCAFlpeT8uUwJ3ZWQWOMJ769ftKmqpir5cp0ascvPn8tiYMnl+infVp5yf/2iTePpjEugSAXeJ57BF0trqvIuNWjxpns8YuX68+evUv1Zl3MOPrClMj85al6cJ4Gbx9Mbl0DUqpdKnDeLlRPdWVFXseBSAufldl0LXLBqSUTkQHHHHZfio6x29XyPMi+XOG9eH0G/OJ7uuAROhXwP3ahbKdQnJhmj/l5eu/qCrXE+Rnv7MSTLUMXF7Mu2rrxdxL40WZ0qvFG30qedh8bTH5fAl9Ye2NNtUk9XOrvRYvxWbEP5k6tWjZuBMteMJfLZaNG4yW+pLBPYprDpa5zddNn0gftKm/e/bQIAAfw786WXW9RBgCQLj5VtqSwb08ComWOJUlS4cCzZiq0ry5UyT2LFd6tupkCCHDPpOy+W30UJdIdTHwAocRrJlgEAryjz+IonVy0d1UDs9LF8pRLOHm2+rK5iGVBjwZMtA5Q4jQD0SPIP3zGBL1S+9UzA+gc8uKxy3ohNJwP1ZbWr549ikjnKHAA+Ihc0dRV1FdeKUXVY8QFU6L14cAmQ0f/ZFc1PvWMCAB0m42mA2aqL6/SR2HQ6Yrd9sKYq5zz19LH8eHH12ePVtauzrVG1MZsF6ghzdWA4ZjSj4VJyuyQCJ3XSt1w7rLrS2UMqYQAEpjpO9LHq6uq4H4G0sfwkEZXYc1VNlY6I3WJhBkCKhKlw9gLgWsWgTvn2FSNwX2nz/nabeQwglTClzr64zIpd9tp1uzbExxAdy4+ReP4MOdENwG2xcZneR6qEAGgns/OessamK0YAoFMyfhR7XqjbmKGOx2Vi5XtnFbq+sXyErGMAKuoqFlix343NT5cTLNRtcb0j4v/BpeZ1yQQ+Xdby04DxDwAIUOm8gUfcmNhrjfo1FgF6x/IRQUexiGvlIcAL4GCodHYTW5uA8Q/cW9r6iytOAOCQm/Xz2HOO9LNUvRWXWbihfOuqDwGdY9n34x0or1u5XqzE+5tluolcdWbRDtnsn15OTpdF4JMrD91/xGT2xMbLnSZy5UxwCz8UKy1j2Q/i67RW4nd7jvSzVJ95CUfthOAny1sv6fDG4AD8bNucunaTtbDJ5P5L4KCBN5VR232ufuPxdY+7Zxu02MyvTKLnd4JFY6j07GZT+BbssLjQQupYwbpMWhiYAsPbcI1nV3wbWoQWm/1F6DnHpqqmSg9p971GmZsVzLUwY7rqLposPa9sqPjXWgGoqSny+lKONVmksMEt4qiZELPvBbaLlRdEu0/Ur6xvBqjZVvDyfN0R7+8fjy7gNXe4SxA4bGFyTPbjpK3xZH4buTlwwOTkASxWbaz17IrL9roFr9xZ3nEjwIon1lwjyqyxYm8Fbgb8AFdJHyW6kXQ1dHhgIG/munX7wvF7rfrhpb7iifsOTtfHC/a6k3jKnctxe+6VLvCqFfurmTZYX+HddTRPgikAg9bLxvD76ScppmpHXnKcgEH4TriMsHVIJczXkp6N15PjNm3wrz3XXb03OadCxH4OWHx23EwZZJluYrFuo81kBV6zU2dUl78+GFvJOH7eMNM/w5w6ME2dyDMIO80UnonOIWgvaO/bp+nuzR/TOzakSFgB7DJXszmyMCbvY6S6xggEjN99MLJcA6z37GSBGq7oA3jtI5EbNh402Xcysr1iyJDTlDiNLFTtKCytNrvzoGTOua+0OX7TnUMAhreTTjnx+lwVmA/gonjNncKz7hx6re8c3WvU8dZPeF6e5mAAeDi6hDfdPBguZs7ZBF5wZ5g/R9+jZqsuPuV5CRiuuL+PLj50wORNPdtvKmFudd7ifaolfkaabO7+dvFff19pc+hs3QsIxPDItsm1C/SR1TJyPMNotrvT+Xt0FqfxxPUW6CPunc7rWmE5YVN5MLycCGdanhiB30ZuosVk8xXv82TLAAbhUbc4sjt6ddxZElFu0q0scw7gGynoFtjjTvrH+vKjo3a/erRJgNrNvY8tXF+YPlEGb3QworFMUydZ4hxCAUftBFwUAetXPaQwTwVIkTBKLM0mFwEDSInTSMg6bI1eS4nTyDwVwCI8EV3AP93JGsCLy226mbu8O5irAsRWdAiP3ekWbry7vP0jY+U5JgGAuj8Fn762atYzXhVd45chH4AHw0x1nBt0Gy6KDjuBI3YCQZKZq44xVZ1kn82n3/qigC5xGtlrC0wX6XKn88948jvdKTgYbtIt3O3ZwTwdwDOSOMARO+HUHilYfu+KlofHy3FcAgANj3YfnvHHoZ8MHCicmCahYp9EFYBXXGarLhbqdkLWw+tmCgHrZ77uZIr0sMMUaotwh9PIU9G5skLvI5UQm91F7HEnsUi1c7dnB+/VR/GeaUkIWp+710761d6yY8s3zDp5+GL5jXkGRsMva4rS0lL6Nk6Wno/mSe85BavbpvG0O4dTNoWPeV61z0Vny3Yzbeh73oak56KzZalu4g/RxfhliDt0IxOl/xzfx23aYJvNeqRvMP2rn1+371zhlSJwNn5Re01JlndwQ7YavP4q+rK8I71+p/Xzt+gsljit0UcjxV1rnd2ZHqLeV8x0vVQ3kS/DN6BB6LLpwZM2ZVc/KRs/vqLlL28nj7dFoHxL5SKr3SrgFqzMVNiJ+SrINOkeyqPPZqtB1UeS7TAZvhzpxy9DYb+clpM21T1m0+WgyUlqM1mE0d2IbQZeNGJrGlbWX/RH/DsiUFG7usSKfcDCDefLFJaJ0k+BClIgQXKlz9UYLYCLco/ZdN1hM+gwGXTbNMxoocW+YuHbf1lV9+wVJTDSm2yyYpcBJEuEPOmlQILkqyD5EiSPvnjRCZDR3+TmfPhW3VwP8II7s2KWdG3OU8PnJmI1AdLptBl0mgw6bAYB6+e0jZeE55Uy98Z6r3dE4Mv1t3wnyYbuz1e9SfkSJF96Y59XLsApmxJpcnN/2VZ+6KvVgtnfMFwF55Ui1RZV2DD1wVl0fS5TBj2j2Z+wqXRa/wgxfyisPd9/cMX2B8bL76IfW6c5nU+kum5aBkO3p8nQZAvpEXSSB5cQju0jKdRt0lq73bQ/TQj5fvyJdfvCo/mpFgwc+lJNTdHXG1MGv5HJ4PqJqn+an1CSl6hE0FgI+WWoT1kOp+uhp/uVs+Vi+SUU+xuwsVVIFBL6N+t/Av/1BN7Fu/h/x78BN033cauMJRcAAAAASUVORK5CYII="
                                />
                            </span>
                            STAGE 1.2 (Q3 2022)
                        </p>
                        <ul className="font-para list-disc list-inside pl-16">
                            <li>Rewarding with passive income</li>
                            <li>Creation of Renaissance DAO</li>
                            <li>Investment in first Incubator</li>
                            <li>Roping in Mega Influencers </li>
                            <li>First party in DCL</li>
                            <li>Launch of $MUDRA pre-sale</li>
                            <li>NFT Staking </li>
                            <li>Launch of Land Mafia </li>
                            <li>Audit of $MUDRA</li>
                            <li>Coinmarketcap listing</li>
                            <li>Listing on first decentralized exchange </li>
                        </ul>
                    </div>
                </div>
                <div className="flex mb-4 gap-4">
                    <div className="pt-2">
                        <p className="font-para flex items-center gap-4 font-extrabold text-3xl text-primary mb-2 ">
                            <span>
                                <img
                                    alt=""
                                    src="data:image/png;base64,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"
                                />
                            </span>
                            STAGE 1.3 (Q4 2022)
                        </p>
                        <ul className="font-para list-disc pl-16 list-inside">
                            <li>Launch of Loot Boxes for our P2E Games</li>
                            <li>Airdrop to all Senators</li>
                            <li>Launch of our P2E Game</li>
                            <li>Launch of next collection</li>
                            <li>Regular passive income</li>
                            <li>
                                Renaissance DAO takes important decisions
                                together
                            </li>
                            <li>LISTING ON MINOR EXCHANGES</li>
                        </ul>
                    </div>
                </div>
                <div className="flex mb-4 gap-4">
                    <div className="pt-2">
                        <p className="font-para flex items-center gap-4 font-extrabold text-3xl text-primary mb-2 ">
                            <span>
                                {" "}
                                <img
                                    alt=""
                                    src="data:image/png;base64,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"
                                />
                            </span>
                            STAGE 2.0 (Q1/Q2 2023)
                        </p>
                        <ul className="font-para pl-16 list-disc list-inside">
                            <li>
                                Parties in a place in every continent to
                                celebrate stage 1 completion
                            </li>
                            <li>Land sales of our Metaverse</li>
                            <li>ICO of $MUDRA on major exchanges</li>
                            <li>Free WFH from remote places on earth</li>
                            <li>First community driven project</li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="pt-2">
                        <p className="font-para flex items-center gap-4 font-extrabold text-3xl text-primary mb-2 ">
                            <span>
                                {" "}
                                <img
                                    alt=""
                                    src="data:image/png;base64,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"
                                />
                            </span>
                            STAGE 3.0 (2023)
                        </p>
                        <ul className="pl-16 font-para list-disc list-inside">
                            <li>Launch of Metaverse</li>
                            <li>Listing on Coinbase & Binance </li>
                            <li>
                                Building of parallel world Mindfulness and Yoga
                                Retreate
                            </li>
                            <li>Together we build a roadmap ahead</li>
                            <li>First community driven project</li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Roadmap;
