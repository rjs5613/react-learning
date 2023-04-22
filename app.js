import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    "h1",
    { className: "h1-tag" },
    "Hello World from react!!")
const child = React.createElement("div", { id: "child"}, heading)
const parent = React.createElement("div", { id : "parent" }, child)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent) // render method converts React Element(JS Object) to actual element and append it to root. ̰