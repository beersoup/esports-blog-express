import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import Media from "react-media";
import { connect } from 'react-redux';
import { fetchBlogs } from './actions';
import { bindActionCreators } from 'redux';



class Nav extends Component {
    constructor (props) {
        super(props)
        this.state = {
            clickBurger: false,
            clickListMenuMobile: false,
            clickSubMenuMobile: false
        }
        this.handleClickBurger = this.handleClickBurger.bind(this);
        this.handleClickDropdownMobile = this.handleClickDropdownMobile.bind(this);
        this.handleClickSubMenuMobile = this.handleClickSubMenuMobile.bind(this);
    }
    componentWillMount() {
        this.props.fetchBlogs()
    }
    handleClickBurger() {
        this.setState({ clickBurger: !this.state.clickBurger })
    }
    handleClickDropdownMobile() {
        this.setState({ clickListMenuMobile: !this.state.clickListMenuMobile })
    }

    handleClickSubMenuMobile() {
        this.setState({ clickSubMenuMobile: true, clickListMenuMobile: false })
    }
    renderSubmenuMobile() {
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
            return result.push(<HashRouter key={i}>
                <li onClick={this.handleClickSubMenuMobile}>
                    <Link to={categorySlug} className="dropdown-item submenu-list">{category}</Link>
                </li></HashRouter>)
        })

        return result
    }
    renderSubmenuDesktop() {
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
            return result.push(<HashRouter key={i}><li><Link to={categorySlug} className="dropdown-item submenu-list">{category}</Link></li></HashRouter>)
        })

        return result
    }

    render() {
        const toggleMenuClass = this.state.clickBurger ? 'navbar-collapse menu-list-show' : 'navbar-collapse menu-list-hide';
        const closeMenuClass = this.state.clickBurger ? 'ion-ios-close-empty close-menu-icon menu-list-show' : 'ion-ios-close-empty close-menu-icon menu-list-hide';
        const burgerMenuClass = this.state.clickBurger ? 'ion-navicon menu-icon-mobile menu-list-hide' : 'ion-navicon menu-icon-mobile menu-list-show';
        const dropdownMobileClass = this.state.clickListMenuMobile ? 'dropdown-menu-mobile menu-list-show' : 'dropdown-menu-mobile menu-list-hide';
        const iconDropdownMobileClass = this.state.clickListMenuMobile ? 'nav-link hide-dropdown' : 'nav-link with-dropdown';

        return (
            <div className="container-fluid no-left-padding no-right-padding menu-block">
                <div className="container contain-nav-custom">
                    <nav className="navbar ownavigation navbar-expand-lg nav-custom">
                        <HashRouter>
                            <Link className="navbar-brand" to="/">esportswire</Link>
                        </HashRouter>
                            <div className="menu-mobile-wrap" onClick={this.handleClickBurger}>
                                <i className={burgerMenuClass}></i>
                                <i className={closeMenuClass}></i>
                            </div>
                        <HashRouter>
                            <div className={toggleMenuClass}>
                                <ul className="navbar-nav nopaddingleft">
                                    <li className="dropdown" onClick={this.handleClickBurger}>
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <Media query="(max-width: 991px)">
                                        {matches =>
                                            matches ? (
                                                <li className="dropdown">
                                                    <div className={iconDropdownMobileClass} onClick={this.handleClickDropdownMobile}>POSTS</div>
                                                    <ul className={dropdownMobileClass}>
                                                        {this.renderSubmenuMobile()}
                                                    </ul>
                                                </li>
                                            ) : (
                                                <li className="dropdown">
                                                    <div className="nav-link">POSTS</div>
                                                    <ul className="dropdown-menu">
                                                        {this.renderSubmenuDesktop()}
                                                    </ul>
                                                </li>
                                            )
                                        }
                                    </Media>
                                </ul>
                            </div>
                        </HashRouter>
                    </nav>
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
)(Nav)
