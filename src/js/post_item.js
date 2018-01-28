import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBlogs } from './actions';
import BlogImageHome from './blogImageHome';
import moment from 'moment';
import TextBlogTitle from './textBlogTitle';
import { HashRouter, Link } from 'react-router-dom';



class PostItem extends Component {

    constructor (props, context) {
        super(props, context);
        this.state = {
           clicked: false
        }
    }
    componentWillMount() {
        this.props.fetchBlogs()
    }

    renderBlogItem() {
        if(this.props.state.fetchBlogs.items !== undefined) {
           return this.props.state.fetchBlogs.items.map((blog, i) => {
               if(blog.sys.contentType.sys.id === "article") {
                   const dateCreated = moment(blog.sys.createdAt).format("MMM DD, YYYY")
                   const slugPost =  `/post/${blog.fields.slug}`
                   const imageId = blog.fields.featuredImage.sys.id;
                   const body = blog.fields.body;

                   return <div key={i} className="col-lg-4 col-md-6 col-sm-6 post-list">
                       <HashRouter>
                           <div className="type-post">
                               <div className="entry-cover post-list-horizontal">
                                   <div className="post-meta">
                                       <span className="byline">by <a href="/">{blog.fields.author}</a></span>
                                       <span className="post-date"><a href="/">{dateCreated}</a></span>
                                   </div>
                                   <BlogImageHome imageId={imageId}
                                                  alt={blog.fields.title}
                                                  slug={blog.fields.slug}
                                   />
                               </div>
                               <Link to={slugPost} className="entry-content post-home">
                                   <div className="entry-header">
                                       <span className="post-category">{blog.fields.category}</span>
                                       <h3 className="entry-title"><div title="Traffic Jams Solved">{blog.fields.title}</div></h3>
                                   </div>
                                   <TextBlogTitle body={body} />
                                   <div className="link-read-more">READ MORE</div>
                               </Link>
                           </div>
                       </HashRouter>
                   </div>
               }else {
                   return <span key={i} />
               }

           })
        }else {
            return <div />
        }

    }
    render() {
        if(this.props.state.fetchBlogs === undefined) {
            return <div>Loading...</div>
        }
        return (
            <div className="container-fluid no-left-padding no-right-padding page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 content-area">
                            <div className="row post-list-wrapper">
                                {this.renderBlogItem()}
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
        fetchBlogs:fetchBlogs
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostItem)

