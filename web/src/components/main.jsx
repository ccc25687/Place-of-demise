import React, { Component } from 'react';
import Nav from './nav.jsx';
import Content from './content.jsx';
class Main extends Component {
    render() {
        return (
            <main>
                <Nav/>
                <Content/>
            </main>
        );
    }
}

export default Main;
