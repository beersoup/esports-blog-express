import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class BlogImageHome extends Component {

    render() {
        const slug = this.props.slug
        const slugPost =  `/post/${slug}`
        if(this.props.state.fetchBlogs.items !== undefined){
            return this.props.state.fetchBlogs.includes.Asset.map((asset, i) => {
                if(this.props.imageId === asset.sys.id) {
                    return <Link key={i} to={slugPost}><img src={asset.fields.file.url} alt={this.props.alt} /></Link>
                } else {
                    return <div key={i}/>
                }

            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        state
    };
}

export default connect(
    mapStateToProps,
    null
)(BlogImageHome)

