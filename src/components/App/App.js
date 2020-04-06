import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../mock/mock';
import LayoutBox from '../Layout/LayoutView';

// 修饰器
function testtable(isTesttable) {
    return function(target) {
        target.isTesttable = isTesttable;
    };
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        path="/register"
                        exact
                        render={({ location }) => <h2>注册页</h2>}
                    />
                    <Route
                        path="/login"
                        exact
                        render={({ location }) => <h2>登录页</h2>}
                    />
                    <Route path="/" component={LayoutBox} />
                </Switch>
            </Router>
        );
    }
}

export default App;
