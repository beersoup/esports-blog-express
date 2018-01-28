import React, { Component } from 'react';




class SliderHome extends Component {
    render() {
        return (
            <div className="container-fluid no-left-padding no-right-padding slider-section slider-section7">
                <div className="slider-carousel slider-carousel-7 center">
                    <div className="item">
                        <div className="post-box">
                            <img src={this.props.imageBg} alt="Slide" className="img-slide" />
                            <div className="entry-content">
                                <span className="post-category"><a href="/" title="Travel">{this.props.titleSec1}</a></span>
                                <h3><a href="/" title="Great Financial News, Trekking, Hiking and Walking in Nepal">{this.props.titleSec2}</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderHome;