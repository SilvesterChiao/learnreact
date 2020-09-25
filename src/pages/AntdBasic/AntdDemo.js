import React from 'react';
import { Button, Icon, Typography, Row, Col, Menu, Pagination, Steps, Divider, DatePicker, message } from 'antd';
import "antd/dist/antd.css";
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const { Title, Paragraph, Text } = Typography;
const { SubMenu, Item } = Menu;
const MenuItemGroup = Menu.ItemGroup;
const Step = Steps.Step;

class AntdDemo extends React.Component {
    state = {
        date: null,
        str: '这里是一个可编辑的段落',
        menuCurrent: 'mail'
    };

    handleChange = (date) => {
        message.info(`您选择的日期是: ${date.format('YYYY-MM-DD')}`);
        this.setState({ date });
        // console.log(this.state.data.film)
    }
    onChange = (str) => {
        console.log('Content change:', str);
        this.setState({ str });
    }
    handleMenuClick = (e) => {
        console.log(e.key)
        this.setState({
            menuCurrent: e.key
        })
    }
    render() {
        const { date } = this.state;
        return (
            <div>
                <div className="component-wrapper">
                    <h1>示例</h1>
                    <div className="antd-demo-content">
                        <div>
                            <DatePicker onChange={this.handleChange} />
                            <div style={{ marginTop: 20 }}>
                                当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="component-wrapper">
                    <h1>Button</h1>
                    <div className="antd-demo-content">
                        <Button.Group size="small">
                            <Button type="primary">
                                <Icon type="left" />上一页
                        </Button>
                            <Button type="primary">
                                下一页<Icon type="right" />
                            </Button>
                        </Button.Group>
                        <Button type="primary" icon="search" loading block>确认</Button>
                        <Button type="dashed" shape="circle" icon="search" />
                        <Button type="primary" icon="download" shape="round" ghost>下载</Button>
                    </div>
                </div>
                <div className="component-wrapper">
                    <h1>Icon</h1>
                    <p>可以使用svg和Iconfont</p>
                    <div className="antd-demo-content">
                        <Icon type="home" style={{ color: 'blue', fontSize: '16px' }} />
                        <Icon type="setting" theme="filled" />
                        <Icon type="smile" theme="outlined" />
                        <Icon type="sync" spin />
                        <Icon type="smile" rotate={180} />
                        <Icon type="loading" />
                        <Icon type="smile" theme="twoTone" />
                        <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                    </div>
                </div>
                <div className="component-wrapper">
                    <h1>Typography</h1>
                    <p>排版</p>
                    <div className="antd-demo-content">
                        <Typography>
                            <Title>文章标题</Title>
                            <Paragraph>
                                In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.
                            </Paragraph>
                            <Divider />
                            <Paragraph>
                                After massive project practice and summaries, Ant Design, a design language for background applications, is refined by Ant UED Team, which aims to <Text strong>uniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development</Text>.
                            </Paragraph>
                            <Title level={2}>Guidelines and Resources</Title>
                            <Paragraph>
                                We supply a series of design principles, practical patterns and high quality design resources (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product prototypes beautifully and efficiently.
                            </Paragraph>
                            <Title level={2}>leave=2</Title>
                            <Title leave={3}>leave=3</Title>
                            <Text type="secondary">secondary</Text><Text type="warning">warning</Text><Text type="danger">danger</Text>
                            <Text disabled>disabled</Text><Text mark>mark</Text><Text code>code</Text>
                            <Text underline>underline</Text><Text delete>delete</Text><Text strong>strong</Text>
                            <Paragraph editable={{ onChange: this.onChange }}>{this.state.str}</Paragraph>
                            <Paragraph copyable>这里是一个可复制的段落</Paragraph>
                            <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>这里是一个指定复制文本的可复制的段落</Paragraph>
                        </Typography>
                    </div>
                </div>
                <div className="component-wrapper">
                    <h1>栅格</h1>
                    <p>栅格布局</p>
                    <div className="antd-demo-content"></div>
                    <div>
                        <Row>
                            <Col span={12}>col-12</Col>
                            <Col span={12}>col-12</Col>
                        </Row>
                        <Row gutter={24} type="flex" justify="end">
                            <Col span={8} style={{ backgroundColor: 'darkyellow' }}>col-8</Col>
                            <Col span={8} style={{ backgroundColor: 'darkyellow' }} offset={8}>col-8</Col>
                        </Row>
                    </div>
                </div>
                <div className="component-wrapper">
                    <h1>Layout</h1>
                    <p>
                        布局
                    </p>
                    <ul>
                        <li>Layout</li>
                        <li>Header</li>
                        <li>Sider</li>
                        <li>Content</li>
                        <li>Footer</li>
                    </ul>
                    <div className="antd-demo-content">

                    </div>
                </div>
                <div className="component-wrapper">
                    <h1>固钉</h1>
                </div>
                <div className="component-wrapper">
                    <h1>面包屑</h1>
                </div>
                <div className="component-wrapper">
                    <h1>下拉菜单</h1>
                </div>
                <div className="component-wrapper">
                    <h1>导航</h1>
                    <p>顶部导航，侧边导航，内嵌菜单（收缩，手风琴）</p>
                    <div className="antd-demo-content">
                        <Menu
                            onClick={this.handleMenuClick}
                            selectedKeys={[this.state.menuCurrent]}
                            mode="horizontal"
                        >
                            <Menu.Item key="mail">
                                <Icon type="mail" />Navigation One
                            </Menu.Item>
                            <Menu.Item key="app" disabled>
                                <Icon type="appstore" />Navigation Two
                            </Menu.Item>
                            <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="Item 2">
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                    <Menu.Divider />
                                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <Item key="alipay">
                                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                            </Item>
                        </Menu>
                    </div>
                </div>
                <div className="component-wrapper">
                    <h1>分页</h1>
                    <p>总数，每页数，迷你，简洁，默认页，显示切换pageSize，显示跳转，显示总数</p>
                    <div className="antd-demo-content">
                        <Pagination size="small" defaultCurrent={1} total={500} simple showSizeChanger showQuickJumper />
                    </div>
                </div>
                <div className="component-wrapper">
                    <h1>页头</h1>
                </div>
                <div className="component-wrapper">
                    <h1>步骤条</h1>
                    <p></p>
                    <div className="antd-demo-content">
                        <Steps current={1}>
                            <Step title="完成" description="描述1" />
                            <Step title="进行中" description="描述2" />
                            <Step title="等待" description="描述3" />
                        </Steps>
                    </div>
                </div>
            </div>
        );
    }
}

export default AntdDemo;
