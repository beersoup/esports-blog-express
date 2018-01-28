import React, { Component } from 'react';
import SliderThreeImages from './sliderThreeImages';
import PostItem from './post_item';
import ImageDynamic3 from './imageDynamic3';


class Home extends Component {
    render() {
        return (
            <div className="main-container">
                <main className="site-main">
                    <SliderThreeImages />
                    <PostItem />
                    <ImageDynamic3 />
                </main>
            </div>
        );
    }
}

export default Home;