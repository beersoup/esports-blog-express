import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div id="slidepanel-1" className="slidepanel">
                <div className="container-fluid no-right-padding no-left-padding top-header">
                    <div className="container">
                        <HashRouter>
                        <div className="row">
                            <div className="col-lg-4 col-6">
                                <ul className="top-social">
                                </ul>
                            </div>
                            <div className="col-lg-4 logo-block">
                                <Link to="/" title="Logo">EsportsWire</Link>
                            </div>
                        </div>
                        </HashRouter>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;