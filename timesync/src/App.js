import React from "react";
import "./App.css";
import Header from "./component/header";

function App() {
    return (
        <>
            <Header dark={true} className="Header">
                TimeSync
            </Header>

            <div id="add_members">
                <h1>TimeSync</h1>
                <i type="subtitle">Find meeting times that work for everyone, around the clock, around the globe</i>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2>Add Member</h2>
                <br></br>
                <h3>Name</h3>
                <input type="text" id="name"></input>
                <h3>City</h3>
                <input type="text" id="city"></input>
                <br></br>
                <p></p>
                <button type="button" id="add">
                    ADD
                </button>
                <button type="button" id="delete">
                    DELETE
                </button>
                <button type="button" id="finish">
                    FINISH
                </button>
            </div>
        </>
    );
}

export default App;
