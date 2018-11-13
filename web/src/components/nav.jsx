import React, { Component } from 'react';
import NavCharacter from './nav/nav_character.jsx';
import NavIntroduction from './nav/nav_introduction.jsx';
import NavMaterial from './nav/nav_material.jsx';
class Nav extends Component {
    render() {
        return (
            <div className="nav-wrap">
                <NavCharacter/>
                <NavIntroduction/>
                <NavMaterial/>
            </div>
        );
    }
}

export default Nav;
