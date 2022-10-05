import App from "./App";
import WebpackLogo from "./webpack.svg";

const root = document.getElementById("root");

root.innerHTML = `
<div class='logo'><img src=${WebpackLogo} alt='logo' /></div>
<h1>Webpack Starter</h1>
${App({name: "Rishi"})}
`;