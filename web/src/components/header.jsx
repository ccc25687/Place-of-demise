import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state={
            homeVideoDisplay:'none',
            homeImgDisplay:'block'
        }
    }
    componentDidMount(){

    }
    showHomeVideo=()=>{
        this.setState({
            homeVideoDisplay:'block',
            homeImgDisplay:'none'
        })
    }
    render() {
        return (
            <section className="header" style={{width:'100%',height:window.screen.height / 2+"px"}}>
                <video style={{display:this.state.homeVideoDisplay}}ref={'homeVideo'} onLoadStart={this.showHomeVideo} className="banner-video" src="../src/static/ball.mp4" type="video/mp4" autoPlay muted loop width="100%" height={window.screen.height / 2+"px"}/>
                <img style={{display:this.state.homeImgDisplay}}ref={'homeImg'} className="banner-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHmCsLb6mCrfj5wgUXOVcwZXaYeU3q1KRwhy8r7KkLJQjHMMX" width="100%" height={window.screen.height / 2+"px"} alt=""/>
                {/* <div className="go-bottom-button">往下</div> */}
            </section>
        );
    }
}

export default Header;
