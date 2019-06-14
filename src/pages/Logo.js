import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Button } from 'antd';
import CustomTable from './CustomTable/CustomTable';
import './Logo.css';
import logo from '../assets/images/logo.svg';

function Topic({ match }) {
    return <h3>Requested Param: {match.params.id}</h3>;
}

class LogoEdit extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }
    goBack = e => {
        this.props.history.go(-1);
    };
    render() {
        const {
            match: {
                params: { id },
            },
        } = this.props;
        return (
            <div>
                {id}
                <Button type="primary" onClick={this.goBack}>
                    返回
                </Button>
            </div>
        );
    }
}

function Logo({ match }) {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Topics</h2>
            <CustomTable title="标题" />

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/edit/hh`}>EditLogo</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:id`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
            <Route path={`${match.path}/edit/:id`} component={LogoEdit} />
        </div>
    );
}

export default Logo;
