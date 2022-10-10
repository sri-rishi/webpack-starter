import "./App.css";
import _ from "lodash";

const App = ({name}) => {
    return (
        <h1>
            {_.join(["Welcome", name], " ")}
        </h1>
    )
}

export default App;