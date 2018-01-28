import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from './actions';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Link } from 'react-router-dom';


class PostSide extends Component {
    componentWillMount() {
        this.props.fetchBlogs()
    }

    renderImagePostSide(imageId, title, slug) {
        if(this.props.state.fetchBlogs.items !== undefined){
            return this.props.state.fetchBlogs.includes.Asset.map((asset, i, array) => {
                const slugPost =  `/post/${slug}`
                if(imageId === asset.sys.id) {
                    return <Link key={i} to={slugPost} title="Recent Posts">
                        <i><img src={asset.fields.file.url}
                                className="wp-post-image" alt={title}
                                width="100" height="80" /></i>
                    </Link>
                }else {
                    return <div key={i} />
                }

            })
        }
    }
    renderPostSide() {
        if(this.props.state.fetchBlogs.items !== undefined){

                return this.props.state.fetchBlogs.items.map((blog, i, ) => {
                    if(blog.sys.contentType.sys.id === "article") {
                        const dateCreated = moment(blog.sys.createdAt).format("MMM DD, YYYY")
                        const slugPost =  `/post/${blog.fields.slug}`
                        if(i < 3) {
                            return <div key={i} className="latest-content">
                                {this.renderImagePostSide(blog.fields.featuredImage.sys.id, blog.fields.title, blog.fields.slug)}

                                <h5><Link to={slugPost}>{blog.fields.title}</Link></h5>
                                <span><Link to={slugPost}>{dateCreated}</Link></span>
                            </div>
                        }else {
                            return <div key={i} />
                        }
                    }else {
                        return <span key={i} />
                    }
                })
        }else {
            return <div />
        }

    }

    render() {
        return (
            <aside className="widget widget_latestposts">
                <h3 className="widget-title">Popular Posts</h3>
                {this.renderPostSide()}
            </aside>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        state
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchBlogs:fetchBlogs
    }, dispatch)
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostSide)

