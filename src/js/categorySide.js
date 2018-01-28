import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from './actions';
import { bindActionCreators } from 'redux';
import { HashRouter, Link } from 'react-router-dom';


class CategorySide extends Component {
    componentWillMount() {
        this.props.fetchBlogs()
    }
    renderCategorySide() {
        let categories = [];

        if(this.props.state.fetchBlogs.items !== undefined){
            this.props.state.fetchBlogs.items.map((blog) => {
                if(blog.sys.contentType.sys.id === "article") {
                    return categories.push(blog.fields.category)
                }else {
                    return <div />
                }
            })
        }

        const notDuplicatedCate = new Set(categories)
        const arrayCategory = Array.from(notDuplicatedCate)

        let result  = []
        arrayCategory.map((category, i) => {
            let categorySlug = `/category/${category}`;
            return result.push(<HashRouter key={i}><Link to={categorySlug}>
                <li className="category-tab-list">{category}</li>
            </Link>
            </HashRouter>)
        })

        return result
    }
    render() {
        if(this.props.state.fetchBlogs.items === undefined){
            return <div>Loading...</div>
        }
        return (
            <aside className="widget widget_categories text-center">
                <h3 className="widget-title">Categories</h3>
                <ul>
                    {this.renderCategorySide()}
                </ul>
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
)(CategorySide)

