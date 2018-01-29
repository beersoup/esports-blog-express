import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { CounterActions } from './actions'
import { bindActionCreators } from 'redux';


class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    click() {
        this.props.CounterActions();
    }
    render() {
        return (
            <div>
                <h1>Hello Redux</h1>
                <h2>Counter : {this.props.state.counterAdd.counter}</h2>
                <button onClick={this.click.bind(this)}>Click Me</button>
            </div>
        );
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        testClick: () => dispatch(CounterActions())
    }
} */


const mapStateToProps = (state) => {
    return {
        state
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        CounterActions:CounterActions
    }, dispatch)
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)