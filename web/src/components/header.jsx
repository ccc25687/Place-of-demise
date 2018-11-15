import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <section className="header">
                <video className="banner-video" src="../src/static/ball.mp4" type="video/mp4" autoPlay muted loop/>
                {/* <div className="go-bottom-button">往下</div> */}
            </section>
        );
    }
}

export default Header;
