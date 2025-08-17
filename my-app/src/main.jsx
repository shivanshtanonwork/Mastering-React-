import React from "react";
import ReactDom from "react-dom/client";

import sum from "@shivansh_tandon/my_code_compile";
console.log(sum(5,4));

const myFirstElement = <h1>My First Page</h1>

ReactDom.createRoot(document.getElementById("root")).render(myFirstElement)