import * as React from "react";

export interface IHeaderProps { voornaam: string; achternaam: string; }

export const Header = (props: IHeaderProps) =>{
    return (
        <h1>{props.achternaam}, {props.voornaam}</h1>
    );
};
