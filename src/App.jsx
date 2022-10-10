import "./App.css";
import _ from "lodash";
import WebpackLogo from "./webpack.svg";
import { useState } from "react";
const Info = React.lazy(() => import("./Info"))

const App = ({name}) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleShowInfo = () => setShowInfo(!showInfo);

    return (
        <div className="main">
            <div className="logo-box">
                <img src={WebpackLogo} loading="lazy" alt="logo"/>
            </div>
            <h1>{_.join(["Welcome", name], " ")}</h1>
            <button onClick={() => handleShowInfo()}>{showInfo ? "Hide": "Show"} Info</button>
            {
                showInfo && <Info />
            }
        </div>
    )
}

export default App;