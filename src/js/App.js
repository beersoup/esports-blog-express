import React, { Component } from 'react';
import { HashRouter , Route, Switch } from 'react-router-dom';
import './rtl.css';
import './slick.css';
import './slick-theme.css';
import './style.css';
import './custom.css';
import './dropdown.css';

import Nav from './nav';
import Home from './home';
import Header from './header';
import Footer from './footer';
import BlogDetail from './blogDetail';
import CategoryPage from './categoryPage';



class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="container-fluid no-left-padding no-right-padding header_s header-fix header_s1">
                    <Header />
                    <Nav />
                </header>

                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/post/:slug" component={BlogDetail} />
                        <Route path="/category/:categoryTitle" component={CategoryPage} />
                    </Switch>
                </HashRouter>
                <Footer />
            </div>
        );
    }
}

export default App;
