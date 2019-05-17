import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Logo from './pages/Logo'
import AntdDemo from './pages/AntdDemo'
import AntdForm from './pages/AntdForm'
import AntdTable from './pages/AntdTable'
import AntdFormInput from './pages/AntdFormInput'
import FilmList from './pages/FilmList'
import MobxDemo from './pages/MobxDemo'

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/logo/">logo</Link>
                    </li>
                    <li>
                        <Link to="/antd-demo">antd实践</Link>
                    </li>
                    <li>
                        <Link to="/antd-form-input">antd表单域</Link>
                    </li>
                    <li>
                        <Link to="/antd-form">antd表单</Link>
                    </li>
                    <li>
                        <Link to="/antd-table">antd表格</Link>
                    </li>
                    <li>
                        <Link to="/film-list">antd综合</Link>
                    </li>
                    <li>
                        <Link to="/mobx-demo">mobx实践</Link>
                    </li>
                </ul>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/logo" component={Logo} />
            <Route path="/antd-demo" component={AntdDemo} />
            <Route path="/antd-form-input" component={AntdFormInput} />
            <Route path="/antd-form" component={AntdForm} />
            <Route path="/antd-table" component={AntdTable} />
            <Route path="/film-list" component={FilmList} />
            <Route path="/mobx-demo" component={MobxDemo} />
        </Router>
    )
}

export default App;
