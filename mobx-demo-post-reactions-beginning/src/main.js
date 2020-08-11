import React from "react";
import ReactDOM from "react-dom";
import './css/main.css'
import Post from "./components/Post";
import storeInstance from './store/Store'



ReactDOM.render(
        <StoreContext.Provider value={storeInstance}>
            <Post />
        </StoreContext.Provider >
    , document.getElementById('app'));

export const StoreContext = React.createContext();