import App from "./App";

const root = document.getElementById("root");

root.innerHTML = `
<h1>Webpack Starter</h1>
${App({name: "Rishi"})}
`;