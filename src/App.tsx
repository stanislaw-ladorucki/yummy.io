import React = require("react");
import { Component } from "react";

interface IRecipeProps {
}

interface IRecipeState {
}

export default class App extends Component<IRecipeProps, IRecipeProps> {
    render() : JSX.Element {
        return (
            <>
                <header></header>
                <main>
                    {this.props.children}
                </main>
            </>
        );
    }
}