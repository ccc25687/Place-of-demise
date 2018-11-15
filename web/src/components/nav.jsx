import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ContentCharacter from './content/content_character.jsx';
import ContentIntroduction from './content/content_introduction.jsx';
import ContentMaterial from './content/content_material.jsx';
class Nav extends Component {
    constructor() {
        super();
        this.state = {
            navarr: [
                {
                    name: '角色',
                    link: '/character',
                    component: {ContentCharacter}
                }, {
                    name: '介紹',
                    link: '/introduction',
                    component: {ContentCharacter}
                }, {
                    name: '人物',
                    link: '/material',
                    component: {ContentMaterial}
                }
            ]
        };

    }

    render() {
        const navarr = this.state.navarr;
        return (
            <Router>
                <div className="nav-wrap">
                    {navarr.map((item, index) => {
                        return (
                            <div key={index}>
                                <Link to={item.link} key={index}>{item.name}</Link>
                                <Route path={item.link} component={ContentMaterial}></Route>
                            </div>
                        )
                    })}
                </div>
            </Router>
        );
    }
}

export default Nav;
