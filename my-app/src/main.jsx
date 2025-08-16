import React from "react";
import ReactDom from "react-dom/client";

const myFirstElement = <h1>My First Page</h1>

ReactDom.createRoot(document.getElementById("root")).render(myFirstElement)