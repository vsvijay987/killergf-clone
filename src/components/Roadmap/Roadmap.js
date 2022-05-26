import React from "react";

const Roadmap = () => {
    return (
        <div
            id="roadmap"
            className="px-2 mx-auto text-center lg:w-5/6 pt-16 lg:px-16"
        >
            <p className="lg:text-5xl text-4xl heading mb-10">ROADMAP</p>
            <div className="text-left lg:mx-48">
                <div className="flex mb-4 gap-4">
                    <div className="pt-2">
                        <p className="font-para flex items-center gap-4 font-extrabold text-3xl text-primary mb-2 ">
                            <span>
                                <img
                                    alt=""
                                    src="data:image/png;base64,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"
                                />
                            </span>
                            STAGE 1 (UPTO APR 2022)
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
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAKNElEQVRoge2ZaXCVVxnHf88577252W5IQtIkFMJWtmAtDVDa2hawqWNCAgRCRW1dp3WbuqJOR51oRx2VqY5144PWGau0aUlJ0Dhd1XboQqlQEBrSkJAAySUEyM1G7vKe44fkXrYkQMt1Ru3/03vOs/7fszzPfS+8i/9hlNZVLPxN/fT1iYyhEulcXP3pHD3wzUTGSBiB4k33eETs2in0zK+pKfImKk7CCBTkdt0OZKdKSAWThz6TqDgJI2BgXew5S/V/KlFxEkKgeNM9HoGVsfHV9BT9rXqpk4hYCSGQd9WxJUBmbJwuIb2/+PCaRMRKCAFlpeT8uUwJ3ZWQWOMJ769ftKmqpir5cp0ascvPn8tiYMnl+infVp5yf/2iTePpjEugSAXeJ57BF0trqvIuNWjxpns8YuX68+evUv1Zl3MOPrClMj85al6cJ4Gbx9Mbl0DUqpdKnDeLlRPdWVFXseBSAufldl0LXLBqSUTkQHHHHZfio6x29XyPMi+XOG9eH0G/OJ7uuAROhXwP3ahbKdQnJhmj/l5eu/qCrXE+Rnv7MSTLUMXF7Mu2rrxdxL40WZ0qvFG30qedh8bTH5fAl9Ye2NNtUk9XOrvRYvxWbEP5k6tWjZuBMteMJfLZaNG4yW+pLBPYprDpa5zddNn0gftKm/e/bQIAAfw786WXW9RBgCQLj5VtqSwb08ComWOJUlS4cCzZiq0ry5UyT2LFd6tupkCCHDPpOy+W30UJdIdTHwAocRrJlgEAryjz+IonVy0d1UDs9LF8pRLOHm2+rK5iGVBjwZMtA5Q4jQD0SPIP3zGBL1S+9UzA+gc8uKxy3ohNJwP1ZbWr549ikjnKHAA+Ihc0dRV1FdeKUXVY8QFU6L14cAmQ0f/ZFc1PvWMCAB0m42mA2aqL6/SR2HQ6Yrd9sKYq5zz19LH8eHH12ePVtauzrVG1MZsF6ghzdWA4ZjSj4VJyuyQCJ3XSt1w7rLrS2UMqYQAEpjpO9LHq6uq4H4G0sfwkEZXYc1VNlY6I3WJhBkCKhKlw9gLgWsWgTvn2FSNwX2nz/nabeQwglTClzr64zIpd9tp1uzbExxAdy4+ReP4MOdENwG2xcZneR6qEAGgns/OessamK0YAoFMyfhR7XqjbmKGOx2Vi5XtnFbq+sXyErGMAKuoqFlix343NT5cTLNRtcb0j4v/BpeZ1yQQ+Xdby04DxDwAIUOm8gUfcmNhrjfo1FgF6x/IRQUexiGvlIcAL4GCodHYTW5uA8Q/cW9r6iytOAOCQm/Xz2HOO9LNUvRWXWbihfOuqDwGdY9n34x0or1u5XqzE+5tluolcdWbRDtnsn15OTpdF4JMrD91/xGT2xMbLnSZy5UxwCz8UKy1j2Q/i67RW4nd7jvSzVJ95CUfthOAny1sv6fDG4AD8bNucunaTtbDJ5P5L4KCBN5VR232ufuPxdY+7Zxu02MyvTKLnd4JFY6j07GZT+BbssLjQQupYwbpMWhiYAsPbcI1nV3wbWoQWm/1F6DnHpqqmSg9p971GmZsVzLUwY7rqLposPa9sqPjXWgGoqSny+lKONVmksMEt4qiZELPvBbaLlRdEu0/Ur6xvBqjZVvDyfN0R7+8fjy7gNXe4SxA4bGFyTPbjpK3xZH4buTlwwOTkASxWbaz17IrL9roFr9xZ3nEjwIon1lwjyqyxYm8Fbgb8AFdJHyW6kXQ1dHhgIG/munX7wvF7rfrhpb7iifsOTtfHC/a6k3jKnctxe+6VLvCqFfurmTZYX+HddTRPgikAg9bLxvD76ScppmpHXnKcgEH4TriMsHVIJczXkp6N15PjNm3wrz3XXb03OadCxH4OWHx23EwZZJluYrFuo81kBV6zU2dUl78+GFvJOH7eMNM/w5w6ME2dyDMIO80UnonOIWgvaO/bp+nuzR/TOzakSFgB7DJXszmyMCbvY6S6xggEjN99MLJcA6z37GSBGq7oA3jtI5EbNh402Xcysr1iyJDTlDiNLFTtKCytNrvzoGTOua+0OX7TnUMAhreTTjnx+lwVmA/gonjNncKz7hx6re8c3WvU8dZPeF6e5mAAeDi6hDfdPBguZs7ZBF5wZ5g/R9+jZqsuPuV5CRiuuL+PLj50wORNPdtvKmFudd7ifaolfkaabO7+dvFff19pc+hs3QsIxPDItsm1C/SR1TJyPMNotrvT+Xt0FqfxxPUW6CPunc7rWmE5YVN5MLycCGdanhiB30ZuosVk8xXv82TLAAbhUbc4sjt6ddxZElFu0q0scw7gGynoFtjjTvrH+vKjo3a/erRJgNrNvY8tXF+YPlEGb3QworFMUydZ4hxCAUftBFwUAetXPaQwTwVIkTBKLM0mFwEDSInTSMg6bI1eS4nTyDwVwCI8EV3AP93JGsCLy226mbu8O5irAsRWdAiP3ekWbry7vP0jY+U5JgGAuj8Fn762atYzXhVd45chH4AHw0x1nBt0Gy6KDjuBI3YCQZKZq44xVZ1kn82n3/qigC5xGtlrC0wX6XKn88948jvdKTgYbtIt3O3ZwTwdwDOSOMARO+HUHilYfu+KlofHy3FcAgANj3YfnvHHoZ8MHCicmCahYp9EFYBXXGarLhbqdkLWw+tmCgHrZ77uZIr0sMMUaotwh9PIU9G5skLvI5UQm91F7HEnsUi1c7dnB+/VR/GeaUkIWp+710761d6yY8s3zDp5+GL5jXkGRsMva4rS0lL6Nk6Wno/mSe85BavbpvG0O4dTNoWPeV61z0Vny3Yzbeh73oak56KzZalu4g/RxfhliDt0IxOl/xzfx23aYJvNeqRvMP2rn1+371zhlSJwNn5Re01JlndwQ7YavP4q+rK8I71+p/Xzt+gsljit0UcjxV1rnd2ZHqLeV8x0vVQ3kS/DN6BB6LLpwZM2ZVc/KRs/vqLlL28nj7dFoHxL5SKr3SrgFqzMVNiJ+SrINOkeyqPPZqtB1UeS7TAZvhzpxy9DYb+clpM21T1m0+WgyUlqM1mE0d2IbQZeNGJrGlbWX/RH/DsiUFG7usSKfcDCDefLFJaJ0k+BClIgQXKlz9UYLYCLco/ZdN1hM+gwGXTbNMxoocW+YuHbf1lV9+wVJTDSm2yyYpcBJEuEPOmlQILkqyD5EiSPvnjRCZDR3+TmfPhW3VwP8II7s2KWdG3OU8PnJmI1AdLptBl0mgw6bAYB6+e0jZeE55Uy98Z6r3dE4Mv1t3wnyYbuz1e9SfkSJF96Y59XLsApmxJpcnN/2VZ+6KvVgtnfMFwF55Ui1RZV2DD1wVl0fS5TBj2j2Z+wqXRa/wgxfyisPd9/cMX2B8bL76IfW6c5nU+kum5aBkO3p8nQZAvpEXSSB5cQju0jKdRt0lq73bQ/TQj5fvyJdfvCo/mpFgwc+lJNTdHXG1MGv5HJ4PqJqn+an1CSl6hE0FgI+WWoT1kOp+uhp/uVs+Vi+SUU+xuwsVVIFBL6N+t/Av/1BN7Fu/h/x78BN033cauMJRcAAAAASUVORK5CYII="
                                />
                            </span>
                            STAGE 1.1 (MAY/JUNE 2022)
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
                                    src="data:image/png;base64,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"
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
            </div>
        </div>
    );
};

export default Roadmap;
