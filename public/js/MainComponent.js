import React, { PropTypes } from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Counter from './Counter'
import AnotherComponent from './AnotherComponent'



class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Counter} />
                        <Route path="/test" component={AnotherComponent} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default MainComponent;