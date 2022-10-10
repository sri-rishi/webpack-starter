import "./App.css";
import _ from "lodash";
import WebpackLogo from "./webpack.svg";
import React, { Suspense, useState } from "react";
const Info = React.lazy(() => import("./Info"))

const App = ({name}) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleShowInfo = () => setShowInfo(!showInfo);

    return (
        <div className="App">
            <div className="logo-box">
                <img src={WebpackLogo} loading="lazy" alt="logo"/>
            </div>
            <h1>{_.join(["Welcome", name], " ")}</h1>
            <button 
                className="toggle-btn" 
                onClick={() => handleShowInfo()}
            >
                {showInfo ? "Hide": "Show"} Info
            </button>
            {
                showInfo && 
                <Suspense fallback={<div>Loading...</div>}>
                    <Info />
                </Suspense>
            }
        </div>
    )
}

export default App;