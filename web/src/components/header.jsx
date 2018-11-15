import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state={
            style:{
                homeVideo:{
                    display:'none'
                },
                homeImg:{
                    display:'block'
                }
            }
        }
    }
    componentDidMount(){

    }
    changeDisplay=()=>{
        this.setState({

        })
    }
    render() {
        return (
            <section className="header" style={{width:'100%',height:window.screen.height / 2+"px"}}>
                <video ref={'homeVideo'} onLoadStart={this.VIChange} className="banner-video" src="../src/static/ball.mp4" type="video/mp4" autoPlay muted loop width="100%" height={window.screen.height / 2+"px"}/>
                <img ref={'homeImg'} className="banner-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHmCsLb6mCrfj5wgUXOVcwZXaYeU3q1KRwhy8r7KkLJQjHMMX" width="100%" height={window.screen.height / 2+"px"} alt=""/>
                {/* <div className="go-bottom-button">往下</div> */}
            </section>
        );
    }
}

export default Header;
