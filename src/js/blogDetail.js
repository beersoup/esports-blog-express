import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from './actions';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import MarkdownRenderer from 'react-markdown-renderer';
import PostSide from './postSide';
import CategorySide from './categorySide';
import ImageDynamic2 from "./imageDynamic2";
import ImageDynamic3 from './imageDynamic3';
import BannerSide from './bannerSide.js';


import bannerUrl2 from './images/game_master_345.jpg';
import bannerUrl3 from './images/2_eoru_free_345.jpg';
import bannerUrl4 from './images/master-game-336.jpg';




class BlogDetail extends Component {
    componentWillMount() {
        this.props.fetchBlogs()
    }

    componentDidMount () {
        window.scrollTo(0, 0)
    }
    renderImageBlog(imageId, title) {
        if(this.props.state.fetchBlogs.items !== undefined){
            return this.props.state.fetchBlogs.includes.Asset.map((asset, a) => {
                if(imageId === asset.sys.id) {
                    return <div key={a} className="entry-cover">
                        <img src={asset.fields.file.url} alt={title} />
                    </div>
                }else {
                    return <div key={a}/>
                }

            })
        }
    }

    renderBlogDetail() {
        const pathLength = this.props.location.pathname.length
        const secondSlash = this.props.location.pathname.indexOf('/', 1)
        const postSlug = this.props.location.pathname.slice(secondSlash+1, pathLength)

        if(this.props.state.fetchBlogs.items !== undefined){
            return this.props.state.fetchBlogs.items.map((blog, i) => {
                const dateCreated = moment(blog.sys.createdAt).format("MMM DD, YYYY")
                if(postSlug === blog.fields.slug) {
                    return <article key={i} className="type-post">
                        {this.renderImageBlog(blog.fields.featuredImage.sys.id, blog.fields.title)}
                        <div className="entry-content">
                            <div className="entry-header">
                                <span className="post-category">{blog.fields.category}</span>
                                <h3 className="entry-title">{blog.fields.title}</h3>
                                <div className="post-meta">
                                    <span className="byline">by <span>{blog.fields.author}</span></span>
                                    <span className="post-date"> {dateCreated}</span>
                                </div>
                            </div>
                            <MarkdownRenderer markdown={blog.fields.body} />
                        </div>
                    </article>
                }else {
                    return <div key={i} />
                }
            })
        }

    }

    render() {
        return (
            <div className="main-container">
                <main className="site-main">
                    <ImageDynamic2 />
                    <div className="container-fluid no-left-padding no-right-padding page-content blog-single padding-page-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-8 col-md-6 col-12 content-area">
                                    {this.renderBlogDetail()}
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 widget-area">
                                    <BannerSide imageUrl={bannerUrl2} />
                                    <PostSide />
                                    <BannerSide imageUrl={bannerUrl3} />
                                    <CategorySide />
                                    <BannerSide imageUrl={bannerUrl4} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ImageDynamic3 />
                </main>
            </div>
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
)(BlogDetail)

