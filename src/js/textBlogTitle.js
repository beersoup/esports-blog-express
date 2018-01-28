import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarkdownRenderer from 'react-markdown-renderer';


class TextBlogTitle extends Component {

    render() {
        const body = this.props.body;
        const textShow = body.split(' ', 15).join(' ');

        return <MarkdownRenderer markdown={textShow} />

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
)(TextBlogTitle)

