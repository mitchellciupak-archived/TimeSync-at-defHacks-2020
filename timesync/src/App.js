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
                <h2>Add Members</h2>
                <p>Name</p>
                <input type="text" id="name"></input>
                <p>City</p>
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
