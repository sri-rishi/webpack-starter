import "./App.css";
import _ from "lodash";
import WebpackLogo from "./webpack.svg";

const App = ({name}) => {
    return (
        <div className="main">
            <div className="logo-box">
                <img src={WebpackLogo} loading="lazy" alt="logo"/>
            </div>
            <h1>{_.join(["Welcome", name], " ")}</h1>
        </div>
    )
}

export default App;