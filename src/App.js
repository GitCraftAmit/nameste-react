import React from "react";   // This react is coming from the node_module
import ReactDOM from "react-dom/client";   // Similarly This react DOM is coming from the node_modules
import {Header} from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
    return(
    <div className="app">
    <Header/>
    <Body/>
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(< AppLayout />);