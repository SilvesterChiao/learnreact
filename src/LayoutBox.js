import React from 'react';
import { Route, NavLink } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import './LayoutBox.css'
import Home from './pages/Home'
import Logo from './pages/Logo'
import AntdDemo from './pages/AntdDemo'
import AntdForm from './pages/AntdForm'
import AntdMenu from './pages/AntdMenu'
import AntdTable from './pages/AntdTable'
import AntdData from './pages/AntdData'
import AntdAlert from './pages/AntdAlert'
import AntdFormInput from './pages/AntdFormInput'
import FilmList from './pages/FilmList'
import MobxDemo from './pages/MobxDemo'

const {
    Content, Sider, Footer
} = Layout;

function LayoutBox() {
    return (
        <Layout>
            <Sider style={{
                overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
            }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <NavLink to="/">
                            <Icon type="user" />
                            <span className="nav-text">Home</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to="/logo">
                            <Icon type="video-camera" />
                            <span className="nav-text">Logo</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.SubMenu key="antd" title={<span>
                        <Icon type="mail" />
                        <span>antd练习</span>
                    </span>}>
                        <Menu.Item key="3">
                            <NavLink to="/antd-demo">
                                <Icon type="upload" />
                                <span className="nav-text">antd实践</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <NavLink to="/antd-form-input">
                                <Icon type="bar-chart" />
                                <span className="nav-text">antd表单域</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <NavLink to="/antd-form">
                                <Icon type="cloud-o" />
                                <span className="nav-text">antd表单</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <NavLink to="/antd-menu">
                                <Icon type="appstore-o" />
                                <span className="nav-text">antd导航</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <NavLink to="/antd-table">
                                <Icon type="appstore-o" />
                                <span className="nav-text">antd表格</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <NavLink to="/antd-data">
                                <Icon type="appstore-o" />
                                <span className="nav-text">antd数据</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <NavLink to="/antd-alert">
                                <Icon type="appstore-o" />
                                <span className="nav-text">antd交互</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <NavLink to="/film-list">
                                <Icon type="team" />
                                <span className="nav-text">antd综合</span>
                            </NavLink>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="11">
                        <NavLink to="/mobx-demo">
                            <Icon type="shop" />
                            <span className="nav-text">mobx实践</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
                {/* <Header style={{ background: '#fff', padding: 0 }}>

                </Header> */}
                <Content style={{ margin: '24px 16px 0', padding: '24px', overflow: 'initial', backgroundColor: '#fff' }}>
                    <Route exact path="/" component={Home} />
                    <Route path="/logo" component={Logo} />
                    <Route path="/antd-demo" component={AntdDemo} />
                    <Route path="/antd-form-input" component={AntdFormInput} />
                    <Route path="/antd-form" component={AntdForm} />
                    <Route path="/antd-menu" component={AntdMenu} />
                    <Route path="/antd-table" component={AntdTable} />
                    <Route path="/antd-data" component={AntdData} />
                    <Route path="/antd-alert" component={AntdAlert} />
                    <Route path="/film-list" component={FilmList} />
                    <Route path="/mobx-demo" component={MobxDemo} />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}

export default LayoutBox;
