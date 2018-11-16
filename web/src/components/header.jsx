import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        this.refs.homeVideo.src=require('../static/ball.mp4');
        setTimeout(()=>{
            this.refs.mask.style.opacity='0';
            this.refs.homeImg.style.opacity='0';
            this.refs.homeVideo.style.opacity='1';
        },1500);
    }
    showVideo = () => {

    }
    init = () => {

    }
    render() {
        // const homeVideoStyle=this.refs.homeVideo.style;
        return (
            <section ref={'header'}className="header">
                {/* <video style={{display:this.state.homeVideoDisplay}}ref={'homeVideo'} onLoadStart={this.showHomeVideo} className="banner-video" src="../src/static/ball.mp4" type="video/mp4" autoPlay muted loop width="100%" height={window.screen.height / 2+"px"}/> */}
                <div ref={'homeImg'} className="banner-image"></div>
                <div ref={'mask'}className="mask"></div>
                <video ref={'homeVideo'} className="banner-video" type="video/mp4" autoPlay muted loop/>
                {/* <div className="go-bottom-button">往下</div> */}
            </section>
        );
    }
}

export default Header;
