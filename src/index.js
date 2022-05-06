import React from "react";
import ReactDOM from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ParallaxProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ParallaxProvider>
);
