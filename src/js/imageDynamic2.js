import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDynamicBanner } from './actions';
import { bindActionCreators } from 'redux';
import bannerUrl1 from './images/2_eoru_free_1135.jpg';
import bannerUrl991 from './images/2_euro_free_991_90.jpg';
import bannerUrl600 from './images/2_euro_free_600_100.jpg';

import {TRACK_URL} from './config';

class ImageDynamic2 extends Component {

    render() {
        //let bannerUrl;
        /*if(this.props.state.fetchDynamicBanner.fields !== undefined){
            if(this.props.state.fetchDynamicBanner.fields.title === "€2 Free Banners")
            imageId = this.props.state.fetchDynamicBanner.items.fields.images.sys.id
        }else{
            return <div />
        }
        if(this.props.state.fetchDynamicBanner.includes.Asset !== undefined) {
            this.props.state.fetchDynamicBanner.includes.Asset.map((asset) => {
                console.log('TITLE', asset.fields.title)
                if(asset.fields.title === "€2 Free 728x90") {
                    bannerUrl = asset.fields.file.url
                }

            })
        } */
        //console.log('URL', bannerUrl)
        return (
            <div className="container-fluid no-left-padding no-right-padding slider-section slider-section7">
                <div className="container m-t-20">
                    <div className="slider-carousel slider-carousel-7 center">
                        <div className="item">
                            <div className="top-image-wide">
                                <a href={TRACK_URL} target="_blank" rel="noopener noreferrer">
                                    <picture>
                                        <source media="(min-width: 992px)" srcSet={bannerUrl1} />
                                        <source media="(min-width: 600px)" srcSet={bannerUrl991} />
                                        <img src={bannerUrl600} alt="2_euro_free" className="img-slide dynamic-img" />
                                    </picture></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchDynamicBanner:fetchDynamicBanner
    }, dispatch)
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageDynamic2)
