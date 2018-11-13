import React, { Component } from 'react';
import ContentCharacter from './content/content_character.jsx';
import ContentIntroduction from './content/content_introduction.jsx';
import ContentMaterial from './content/content_material.jsx';
class Content extends Component {
    render() {
        return (
            <div className="content-wrap">
                <ContentCharacter/>
                <ContentIntroduction/>
                <ContentMaterial/>
            </div>
        );
    }
}

export default Content;
