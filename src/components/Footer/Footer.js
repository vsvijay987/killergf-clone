import React from "react";

const Footer = () => {
    return (
        <div className="px-10 lg:flex lg:h-40">
            {/* <div className="flex flex-col justify-center w-full mb-8">
                <p className="font-link text-center lg:text-left text-2xl mb-2 text-black">
                    JOIN THE CLUB
                </p>
                <div className="flex w-full">
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        className="rounded-lg font-para text-primary mr-4 px-2 py-2 outline-none placeholder-slate-300 font-bold relative text-xl bg-white border-0 shadow w-full"
                    />
                    <button class="bg-primary cursor-pointer rounded-full text-gray-800 font-bold py-2 px-4 inline-flex items-center">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABPklEQVRoge3ZQU7CQBjF8Tfq1r1hLx7AqBdQXEhceVG9Ci48gbrAhSVt1KB/F21AtJ0CSmfGfL+EBZQM70EDXwfJGGOMMXJdvyDQk3RZ3b12zj10neHXgCPgGSiqWwYMQudaGXALfLAoB85DZ1sJ8EK9tMoAo5pPJL0ywHEVuElSZQYtZQpgGDrnUqxMrKxMrKzMEoueUI4TU8/Cm/LmOZbTMJv9mH4pp9M7SbtrvbWbl0k6cM49fn1wq+aJQ0nbnURaz47mlwEzdUWSlOKpNZHUbz21nHP3kk4ljSS9d5NtwdRzrJB09b1EVIA+8OT5xor/t8RKxALYtxIx+E8lxi0lLkLn9AIOW0o0DoVRoZyo0y4hScBr8iUk75ZpOiWk2SZ2VoXPKTe0z/5i7RB/K+xpfj1xE/UAaIwxxqTmE58FBVLh0qPdAAAAAElFTkSuQmCC"
                            alt=""
                        />{" "}
                    </button>
                </div>
            </div> */}
            <div className="flex mb-8 flex-col w-full justify-center">
                <a className="flex justify-center lg:justify-start" href="/">
                    <img className="h-16" src="killergf.png" alt="killergf" />
                </a>
            </div>
            <div className="mb-8 flex flex-col justify-center lg:w-1/5">
                <p className="font-link text-center lg:text-left text-2xl mb-2 text-primary">
                    FOLLOW US
                </p>
                <div className=" mt-2 flex justify-between">
                    <a
                        href="https://twitter.com/renaissancetwt?s=20&t=dIUCflyYbIDxida4IEjVTA"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2Q2YjYwMCI+PHBhdGggZD0iTTE2MC41MzMzMywzOS43NzIxM2MtNS40ODY4LDIuNDM2NjcgLTExLjM4MDY3LDQuMDc2NCAtMTcuNTY2OTMsNC44MTZjNi4zMTgxMywtMy43ODQgMTEuMTYyOCwtOS43NzUzMyAxMy40NDQ2NywtMTYuOTE5MDdjLTUuOTA1MzMsMy41MDMwNyAtMTIuNDUyOCw2LjA0ODY3IC0xOS40MjQ1Myw3LjQyNDY3Yy01LjU3ODUzLC01Ljk0NTQ3IC0xMy41MjQ5MywtOS42NjA2NyAtMjIuMzE5ODcsLTkuNjYwNjdjLTE2Ljg5MDQsMCAtMzAuNTgxNiwxMy42OTY5MyAtMzAuNTgxNiwzMC41ODE2YzAsMi4zOTY1MyAwLjI3NTIsNC43MzU3MyAwLjc5MTIsNi45NjZjLTI1LjQxNTg3LC0xLjI3MjggLTQ3Ljk0Nzg3LC0xMy40NTA0IC02My4wMzgsLTMxLjk1NzZjLTIuNjI1ODcsNC41MTc4NyAtNC4xMzM3Myw5Ljc2OTYgLTQuMTMzNzMsMTUuMzgyNTNjMCwxMC42MDY2NyA1LjM5NTA3LDE5Ljk2OTIgMTMuNTk5NDcsMjUuNDUwMjdjLTUuMDEwOTMsLTAuMTYwNTMgLTkuNzI5NDcsLTEuNTM2NTMgLTEzLjg1MTczLC0zLjgyNDEzYzAsMC4xMzE4NyAwLDAuMjUyMjcgMCwwLjM4NDEzYzAsMTQuODIwNjcgMTAuNTM3ODcsMjcuMTgxNzMgMjQuNTMyOTMsMjkuOTg1MzNjLTIuNTYyOCwwLjY5OTQ3IC01LjI2ODkzLDEuMDcyMTMgLTguMDYxMDcsMS4wNzIxM2MtMS45NjY1MywwIC0zLjg4NzIsLTAuMTk0OTMgLTUuNzUwNTMsLTAuNTQ0NjdjMy44OTI5MywxMi4xNDg5MyAxNS4xODc2LDIwLjk5NTQ3IDI4LjU2OTIsMjEuMjQyYy0xMC40NjMzMyw4LjIwNDQgLTIzLjY1LDEzLjA5NDkzIC0zNy45ODMzMywxMy4wOTQ5M2MtMi40NjUzMywwIC00LjkwMiwtMC4xNDMzMyAtNy4yOTg1MywtMC40M2MxMy41MzY0LDguNjc0NTMgMjkuNjA2OTMsMTMuNzM3MDcgNDYuODgxNDcsMTMuNzM3MDdjNTYuMjU1NDcsMCA4Ny4wMDkwNywtNDYuNjAwNTMgODcuMDA5MDcsLTg3LjAxNDhjMCwtMS4zMjQ0IC0wLjAyODY3LC0yLjY0MzA3IC0wLjA4NiwtMy45NTZjNS45Nzk4NywtNC4zMTcyIDExLjE2ODUzLC05LjcwMDggMTUuMjY3ODcsLTE1LjgyOTczeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                        />
                    </a>
                    <a
                        href="https://discord.gg/HPN78NukYb"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2Q2YjYwMCI+PHBhdGggZD0iTTE0NC4wMjEzMywzOS44MjM3M2MtMTMuODk3NiwtMTEuMTY4NTMgLTM1Ljg3MzQ3LC0xMy4wNjA1MyAtMzYuODAyMjcsLTEzLjE0MDhjLTEuNDY3NzMsLTAuMTI2MTMgLTIuODYwOTMsMC43MDUyIC0zLjQ2MjkzLDIuMDQ2OGMtMC4wMjI5MywwLjA0NTg3IC0xLjI0OTg3LDMuNjA2MjcgLTIuNDM2NjcsNy4wNDA1M2MxNi4xNTA4LDIuODI2NTMgMjcuMTI0NCw5LjA5ODggMjcuNzA5Miw5LjQ0MjhjMi43NDA1MywxLjU5Mzg3IDMuNjU3ODcsNS4xMDg0IDIuMDU4MjcsNy44NDMyYy0xLjA2MDY3LDEuODIzMiAtMi45ODEzMywyLjg0MzczIC00Ljk1MzYsMi44NDM3M2MtMC45ODA0LDAgLTEuOTY2NTMsLTAuMjQ2NTMgLTIuODcyNCwtMC43NzRjLTAuMTYwNTMsLTAuMDk3NDcgLTE2LjI1OTczLC05LjI1OTMzIC0zNy4yNDk0NywtOS4yNTkzM2MtMjAuOTk1NDcsMCAtMzcuMTAwNCw5LjE2NzYgLTM3LjI2MDkzLDkuMjU5MzNjLTIuNzM0OCwxLjU4ODEzIC02LjI0MzYsMC42NTM2IC03LjgzMTczLC0yLjA4NjkzYy0xLjU4ODEzLC0yLjcyOTA3IC0wLjY2NTA3LC02LjIzMjEzIDIuMDY0LC03LjgyNmMwLjU4NDgsLTAuMzQ0IDExLjU5ODUzLC02LjYzOTIgMjcuNzk1MiwtOS40NmMtMS4yNDk4NywtMy40NzQ0IC0yLjUxMTIsLTYuOTc3NDcgLTIuNTM0MTMsLTcuMDIzMzNjLTAuNjAyLC0xLjM0NzMzIC0xLjk5NTIsLTIuMTk1ODcgLTMuNDYyOTMsLTIuMDQ2OGMtMC45Mjg4LDAuMDc0NTMgLTIyLjkwNDY3LDEuOTY2NTMgLTM2Ljk4NTczLDEzLjI4OTg3Yy03LjM2MTYsNi43OTk3MyAtMjIuMDYxODcsNDYuNTU0NjcgLTIyLjA2MTg3LDgwLjkyNmMwLDAuNjA3NzMgMC4xNTQ4LDEuMTk4MjcgMC40NTg2NywxLjcyNTczYzEwLjE1MzczLDE3LjgzMDY3IDM3LjgzNDI3LDIyLjQ5NzYgNDQuMTQwOTMsMjIuNjk4MjdjMC4wNDAxMywwLjAwNTczIDAuMDc0NTMsMC4wMDU3MyAwLjEwODkzLDAuMDA1NzNjMS4xMTIyNywwIDIuMTYxNDcsLTAuNTMzMiAyLjgyMDgsLTEuNDMzMzNsNi44MjI2NywtOS4yNDIxM2MtMTQuOTY0LC0zLjYwNjI3IC0yMi44NzYsLTkuMjc2NTMgLTIzLjM1MTg3LC05LjYyNjI3Yy0yLjU0NTYsLTEuODc0OCAtMy4wOTYsLTUuNDYzODcgLTEuMjIxMiwtOC4wMTUyYzEuODY5MDcsLTIuNTM5ODcgNS40NDY2NywtMy4xMDE3MyA3Ljk5MjI3LC0xLjIzODRjMC4yMTIxMywwLjEzNzYgMTQuODE0OTMsMTAuMzYwMTMgNDIuNDk1NDcsMTAuMzYwMTNjMjcuNzg5NDcsMCA0Mi4zNTIxMywtMTAuMjYyNjcgNDIuNDk1NDcsLTEwLjM2NTg3YzIuNTQ1NiwtMS44NDYxMyA2LjEzNDY3LC0xLjI5IDcuOTk4LDEuMjY3MDdjMS44NTc2LDIuNTQ1NiAxLjMxODY3LDYuMTExNzMgLTEuMjE1NDcsNy45ODA4Yy0wLjQ3NTg3LDAuMzQ5NzMgLTguMzQ3NzMsNi4wMDg1MyAtMjMuMjc3MzMsOS42MTQ4bDYuNzM2NjcsOS4yNTkzM2MwLjY1OTMzLDAuOTA1ODcgMS43MDg1MywxLjQzMzMzIDIuODIwOCwxLjQzMzMzYzAuMDQwMTMsMCAwLjA3NDUzLDAgMC4xMDg5MywtMC4wMDU3M2M2LjMxMjQsLTAuMjAwNjcgMzMuOTkyOTMsLTQuODY3NiA0NC4xNDA5MywtMjIuNjk4MjdjMC4zMDM4NywtMC41Mjc0NyAwLjQ1ODY3LC0xLjExOCAwLjQ1ODY3LC0xLjcyNTczYzAsLTM0LjM2NTYgLTE0LjcwMDI3LC03NC4xMjA1MyAtMjIuMjQ1MzMsLTgxLjA2OTMzek02My4wNjY2NywxMDguOTMzMzNjLTYuMzM1MzMsMCAtMTEuNDY2NjcsLTYuNDE1NiAtMTEuNDY2NjcsLTE0LjMzMzMzYzAsLTcuOTE3NzMgNS4xMzEzMywtMTQuMzMzMzMgMTEuNDY2NjcsLTE0LjMzMzMzYzYuMzM1MzMsMCAxMS40NjY2Nyw2LjQxNTYgMTEuNDY2NjcsMTQuMzMzMzNjMCw3LjkxNzczIC01LjEzMTMzLDE0LjMzMzMzIC0xMS40NjY2NywxNC4zMzMzM3pNMTA4LjkzMzMzLDEwOC45MzMzM2MtNi4zMzUzMywwIC0xMS40NjY2NywtNi40MTU2IC0xMS40NjY2NywtMTQuMzMzMzNjMCwtNy45MTc3MyA1LjEzMTMzLC0xNC4zMzMzMyAxMS40NjY2NywtMTQuMzMzMzNjNi4zMzUzMywwIDExLjQ2NjY3LDYuNDE1NiAxMS40NjY2NywxNC4zMzMzM2MwLDcuOTE3NzMgLTUuMTMxMzMsMTQuMzMzMzMgLTExLjQ2NjY3LDE0LjMzMzMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                        />
                    </a>

                    <a
                        href="https://instagram.com/renaissance_labs?igshid=YmMyMTA2M2Y=
"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2Q2YjYwMCI+PHBhdGggZD0iTTU3LjMzMzMzLDIxLjVjLTE5Ljc1ODUsMCAtMzUuODMzMzMsMTYuMDc0ODMgLTM1LjgzMzMzLDM1LjgzMzMzdjU3LjMzMzMzYzAsMTkuNzU4NSAxNi4wNzQ4MywzNS44MzMzMyAzNS44MzMzMywzNS44MzMzM2g1Ny4zMzMzM2MxOS43NTg1LDAgMzUuODMzMzMsLTE2LjA3NDgzIDM1LjgzMzMzLC0zNS44MzMzM3YtNTcuMzMzMzNjMCwtMTkuNzU4NSAtMTYuMDc0ODMsLTM1LjgzMzMzIC0zNS44MzMzMywtMzUuODMzMzN6TTU3LjMzMzMzLDM1LjgzMzMzaDU3LjMzMzMzYzExLjg1MzY3LDAgMjEuNSw5LjY0NjMzIDIxLjUsMjEuNXY1Ny4zMzMzM2MwLDExLjg1MzY3IC05LjY0NjMzLDIxLjUgLTIxLjUsMjEuNWgtNTcuMzMzMzNjLTExLjg1MzY3LDAgLTIxLjUsLTkuNjQ2MzMgLTIxLjUsLTIxLjV2LTU3LjMzMzMzYzAsLTExLjg1MzY3IDkuNjQ2MzMsLTIxLjUgMjEuNSwtMjEuNXpNMTIxLjgzMzMzLDQzYy0zLjk1ODA0LDAgLTcuMTY2NjcsMy4yMDg2MyAtNy4xNjY2Nyw3LjE2NjY3YzAsMy45NTgwNCAzLjIwODYzLDcuMTY2NjcgNy4xNjY2Nyw3LjE2NjY3YzMuOTU4MDQsMCA3LjE2NjY3LC0zLjIwODYzIDcuMTY2NjcsLTcuMTY2NjdjMCwtMy45NTgwNCAtMy4yMDg2MywtNy4xNjY2NyAtNy4xNjY2NywtNy4xNjY2N3pNODYsNTAuMTY2NjdjLTE5Ljc1ODUsMCAtMzUuODMzMzMsMTYuMDc0ODMgLTM1LjgzMzMzLDM1LjgzMzMzYzAsMTkuNzU4NSAxNi4wNzQ4MywzNS44MzMzMyAzNS44MzMzMywzNS44MzMzM2MxOS43NTg1LDAgMzUuODMzMzMsLTE2LjA3NDgzIDM1LjgzMzMzLC0zNS44MzMzM2MwLC0xOS43NTg1IC0xNi4wNzQ4MywtMzUuODMzMzMgLTM1LjgzMzMzLC0zNS44MzMzM3pNODYsNjQuNWMxMS44NTM2NywwIDIxLjUsOS42NDYzMyAyMS41LDIxLjVjMCwxMS44NTM2NyAtOS42NDYzMywyMS41IC0yMS41LDIxLjVjLTExLjg1MzY3LDAgLTIxLjUsLTkuNjQ2MzMgLTIxLjUsLTIxLjVjMCwtMTEuODUzNjcgOS42NDYzMywtMjEuNSAyMS41LC0yMS41eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                        />
                    </a>
                    <a
                        href="https://medium.com/@adonisrenaissance
"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2Q2YjYwMCI+PHBhdGggZD0iTTE1NC44LDEzLjc2aC0xMzcuNmMtMS44OTg4OCwwIC0zLjQ0LDEuNTQxMTIgLTMuNDQsMy40NHYxMzcuNmMwLDEuODk4ODggMS41NDExMiwzLjQ0IDMuNDQsMy40NGgxMzcuNmMxLjg5ODg4LDAgMy40NCwtMS41NDExMiAzLjQ0LC0zLjQ0di0xMzcuNmMwLC0xLjg5ODg4IC0xLjU0MTEyLC0zLjQ0IC0zLjQ0LC0zLjQ0ek0xMzcuNiw0Ni40NGwtNi4yNjQyNCw3LjU1NzY4Yy0wLjM5NTYsMC4zOTIxNiAtMC42MTU3NiwwLjkyMTkyIC0wLjYxNTc2LDEuNDcyMzJ2NTcuMTljMCwwLjU1MDQgMC4yMjAxNiwxLjA4MDE2IDAuNjE1NzYsMS40NzIzMmw2LjI2NDI0LDguMTQ1OTJ2MS41NjE3NmgtMzQuNHYtMS41NjE3Nmw5LjcwNDI0LC04LjE0NTkyYzAuMzk1NiwtMC4zOTIxNiAwLjYxNTc2LC0wLjkyMTkyIDAuNjE1NzYsLTEuNDcyMzJ2LTUxLjE1NjI0bC0yOC4wNDI4OCw2Mi4zMzYyNGgtMC4wMDM0NGgtNS4zMDc5MnYwbC0yOC41NjU3NiwtNjAuNjN2NDUuMDkxNTJjMCwwLjc1NjggMC4yNjE0NCwxLjQ4OTUyIDAuNzM5NiwyLjA4MTJsOS41ODA0LDExLjg5NTUydjEuNTYxNzZoLTI3LjUydi0xLjU2MTc2bDkuNTczNTIsLTExLjgyNjcyYzAuNDgxNiwtMC41OTE2OCAwLjc0NjQ4LC0xLjMzMTI4IDAuNzQ2NDgsLTIuMDkxNTJ2LTUxLjk4NTI4YzAsLTAuNDg4NDggLTAuMTcyLC0wLjk1OTc2IC0wLjQ4ODQ4LC0xLjMzNDcybC02LjM5MTUyLC04LjZ2LTEuNzJoMjQuNDEzNjhsMjYuMjI2NTYsNTUuNjY5NTJsMjUuMDQ2NjQsLTU1LjY2OTUyaDI0LjA3MzEyeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
