import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from './actions';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import PostSide from './postSide';
import CategorySide from './categorySide';
import SliderHome from './slider_home';
import slideImg from './images/cate1.jpg';
import TextBlogTitle from './textBlogTitle';
import { HashRouter, Link } from 'react-router-dom';
import ImageDynamic3 from './imageDynamic3';
import BannerSide from './bannerSide.js';

import bannerUrl4 from './images/master-game-336.jpg';
import bannerUrl3 from './images/2_eoru_free_345.jpg';



class CategoryPage extends Component {
    componentWillMount() {
        this.props.fetchBlogs()
    }

    componentDidMount () {
        window.scrollTo(0, 0)
    }
    renderImageBlog(imageId, title, slug) {
        const slugPost =  `/post/${slug}`
        if(this.props.state.fetchBlogs.items !== undefined){
            return this.props.state.fetchBlogs.includes.Asset.map((asset, a) => {
                if(imageId === asset.sys.id) {
                    return <i key={a} className="entry-cover category-page">
                        <Link to={slugPost}><img className="img-category" src={asset.fields.file.url} alt={title} /></Link>
                    </i>
                }else {
                    return <div key={a}/>
                }

            })
        }
    }

    renderBlogDetail() {
        const pathLength = this.props.location.pathname.length
        const secondSlash = this.props.location.pathname.indexOf('/', 1)
        const categorySlug = this.props.location.pathname.slice(secondSlash+1, pathLength)

        if(this.props.state.fetchBlogs.items !== undefined){
            return this.props.state.fetchBlogs.items.map((blog, i) => {
                const dateCreated = moment(blog.sys.createdAt).format("MMM DD, YYYY")
                if(categorySlug === blog.fields.category) {
                    const body = blog.fields.body;
                    const slugPost =  `/post/${blog.fields.slug}`
                    return <div key={i} className="about-author-box category-block">
                        <HashRouter>
                            <div className="author category-page">
                                {this.renderImageBlog(blog.fields.featuredImage.sys.id, blog.fields.title, blog.fields.slug)}
                                <h4><Link to={slugPost} style={{ color:'#151515'}}>{blog.fields.title}</Link></h4>

                                <p className="post-category category-title-list">{blog.fields.category}</p>
                                <TextBlogTitle body={body} />
                                <div className="link-read-more"><Link to={slugPost} style={{ color:'#a1a1a1'}}>READ MORE</Link></div>
                                <div className="post-meta" style={{ color:'#a1a1a1', marginTop:'20px'}}>
                                    <span className="byline">by <span>{blog.fields.author} /</span></span>
                                    <span className="post-date"> {dateCreated}</span>
                                </div>
                            </div>
                        </HashRouter>
                    </div>
                }else {
                    return <div key={i} />
                }
            })
        }

    }

    render() {
        const pathLength = this.props.location.pathname.length
        const secondSlash = this.props.location.pathname.indexOf('/', 1)
        const categorySlug = this.props.location.pathname.slice(secondSlash+1, pathLength)
        const categoryTitle = `Category/${categorySlug}`

        return (
            <div className="main-container">
                <main className="site-main">
                    <SliderHome titleSec2={categoryTitle} imageBg={slideImg} />
                    <div className="container-fluid no-left-padding no-right-padding page-content blog-single">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-8 col-md-6 col-12 content-area">
                                    {this.renderBlogDetail()}
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 widget-area">
                                    <BannerSide imageUrl={bannerUrl4} />
                                    <PostSide />
                                    <BannerSide imageUrl={bannerUrl3} />
                                    <CategorySide />
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
)(CategoryPage)

