import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},React.createElement("h1",{},"React heading element inside div")))


const heading = React.createElement(
    "h1",
    {id:"head",abc:"xyz"},
    "Hello world from React"
)

const bigparent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child 1"},[React.createElement("h1",{},"Hello h1"),React.createElement("h2",{},"Hello h2")]),
React.createElement("div",{id:"child 2"},[React.createElement("h1",{},"Hello h1"),React.createElement("h2",{},"Hello h2")])]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(bigparent)


