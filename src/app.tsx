import * as React from "react";
import {Header} from "./components/header";
import {Footer} from "./components/footer";

export const App = () =>{
    return (
        <div>
            <Header voornaam={"Bruni"} achternaam={"Hinnissssen"}/>
            <Footer/>
        </div>
    );
};
