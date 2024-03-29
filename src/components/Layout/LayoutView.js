import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
// React练习
import HomeView from '../../pages/ReactBasic/HomeView';
import ContextView from '../../pages/ReactBasic/ContextView';
import HOCView from '../../pages/ReactBasic/HOCView';
import JsxView from '../../pages/ReactBasic/JsxView';
import HooksView from '../../pages/ReactBasic/HooksView';
import LifecycleView from '../../pages/ReactBasic/LifecycleView';
import MixinsView from '../../pages/ReactBasic/MixinsView';
import ProptypesView from '../../pages/ReactBasic/ProptypesView';
import RefsView from '../../pages/ReactBasic/RefsView';
// React-router练习
import Logo from '../../pages/RouterBasic/Logo';
// Antd练习
import AntdDemo from '../../pages/AntdBasic/AntdDemo';
import AntdForm from '../../pages/AntdBasic/AntdForm';
import AntdMenu from '../../pages/AntdBasic/AntdMenu';
import AntdTable from '../../pages/AntdBasic/AntdTable';
import AntdData from '../../pages/AntdBasic/AntdData';
import AntdAlert from '../../pages/AntdBasic/AntdAlert';
import AntdFormInput from '../../pages/AntdBasic/AntdFormInput';
import FilmList from '../../pages/AntdBasic/FilmList';
import StudentList from '../../pages/AntdBasic/StudentList';
// Mobx练习
import MobxDemo from '../../pages/MobxBasic/MobxDemo';
import styles from './LayoutStyle.module.scss';
import HOC from '../HOC/HOC';

const { Content, Sider, Header, Footer } = Layout;

function LayoutBox() {
    return (
        <Layout>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <div className={styles.logo}>
                    Learn React
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.SubMenu
                        key="react"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>React</span>
                            </span>
                        }
                    >
                        <Menu.Item key="1">
                            <NavLink to="/">
                                <Icon type="user" />
                                <span className="nav-text">React 基础</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="r-2">
                            <NavLink to="/context">
                                <Icon type="user" />
                                <span className="nav-text">Context</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="r-3">
                            <NavLink to="/hoc">
                                <Icon type="user" />
                                <span className="nav-text">高阶组件</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="r-4">
                            <NavLink to="/jsx">
                                <Icon type="user" />
                                <span className="nav-text">JSX</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="r-5">
                            <NavLink to="/hooks">
                                <Icon type="user" />
                                <span className="nav-text">Hooks</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="r-6">
                            <NavLink to="/lifecycle">
                                <Icon type="user" />
                                <span className="nav-text">生命周期</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="r-7">
                            <NavLink to="/mixins">
                                <Icon type="user" />
                                <span className="nav-text">Mixins</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="r-8">
                            <NavLink to="/proptypes">
                                <Icon type="user" />
                                <span className="nav-text">PropTypes</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="r-9">
                            <NavLink to="/refs">
                                <Icon type="user" />
                                <span className="nav-text">Refs</span>
                            </NavLink>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu
                        key="router"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>React-router</span>
                            </span>
                        }
                    >
                        <Menu.Item key="2">
                            <NavLink to="/logo">
                                <Icon type="video-camera" />
                                <span className="nav-text">Logo</span>
                            </NavLink>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu
                        key="antd"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>antd练习</span>
                            </span>
                        }
                    >
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
                        <Menu.ItemGroup title="antd综合" key="g1">
                            <Menu.Item key="10">
                                <NavLink to="/film-list">
                                    <Icon type="team" />
                                    <span className="nav-text">影片列表</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="11">
                                <NavLink to="/student-list">
                                    <Icon type="team" />
                                    <span className="nav-text">学生列表</span>
                                </NavLink>
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </Menu.SubMenu>
                    <Menu.SubMenu
                        key="mobx"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>Mobx</span>
                            </span>
                        }
                    >
                        <Menu.Item key="mobx-1">
                            <NavLink to="/mobx-demo">
                                <Icon type="shop" />
                                <span className="nav-text">mobx实践</span>
                            </NavLink>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
                <Header style={{ background: '#fff', padding: '0 24px' }}>
                    Header
                </Header>
                <Content
                    style={{
                        margin: '24px 16px 0',
                        padding: '24px',
                        overflow: 'initial',
                        backgroundColor: '#fff',
                    }}
                >
                    {/* react 基础 */}
                    <Route exact path="/" component={HomeView} />
                    <Route path="/context" component={ContextView} />
                    <Route path="/hoc" component={HOCView} />
                    <Route path="/jsx" component={JsxView} />
                    <Route path="/hooks" component={HooksView} />
                    <Route path="/lifecycle" component={LifecycleView} />
                    <Route path="/mixins" component={MixinsView} />
                    <Route path="/proptypes" component={ProptypesView} />
                    <Route path="/refs" component={RefsView} />
                    {/* react-router */}
                    <Route path="/logo" component={Logo} />
                    {/* antd */}
                    <Route path="/antd-demo" component={AntdDemo} />
                    <Route path="/antd-form-input" component={AntdFormInput} />
                    <Route path="/antd-form" component={AntdForm} />
                    <Route path="/antd-menu" component={AntdMenu} />
                    <Route path="/antd-table" component={AntdTable} />
                    <Route path="/antd-data" component={AntdData} />
                    <Route path="/antd-alert" component={AntdAlert} />
                    <Route path="/film-list" component={FilmList} />
                    <Route path="/student-list" component={StudentList} />
                    {/* mobx */}
                    <Route path="/mobx-demo" component={MobxDemo} />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}

export default LayoutBox;
