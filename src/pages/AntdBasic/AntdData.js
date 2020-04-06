import React from 'react'
import { Alert, Icon, Button, Divider, Avatar, Badge, Tabs, Tag, Timeline, Tooltip, Statistic, Card, Popover, List, Typography, Empty, Calendar, } from 'antd'
import moment from 'moment'

const ListData = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 3
const operations = <Button>Extra Action</Button>;

class AntdMenu extends React.Component {
    state = {
        date: moment('2017-01-23'),
        selectedDate: moment('2017-01-23'),
        tagChecked: true
    }
    handleCalendarPanelChange = (value, mode) => {
        console.log(value, mode)
        this.setState({ date: value })
    }
    handleCalendarSelect = value => {
        this.setState({
            date: value,
            selectedDate: value
        })
    }
    handleTagClose = e => {
        console.log('关闭标签')
    }
    handleTagChange = tagChecked => {
        this.setState({ tagChecked })
    }
    handleTabsChanage = key => {
        console.log(`切换标签页${key}`)
    }
    render() {
        return (
            <div>
                <div className="antd-demo-box">
                    <h1>avatar-头像</h1>
                    <p></p>
                    <div className="antd-demo-content">
                        <Avatar icon="user" />
                        <Avatar icon="user" size="large" />
                        <Avatar icon="user" shape="square" style={{ backgroundColor: '#f56a00' }} />
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <Badge count={1}>
                            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} shape="square">U</Avatar>
                        </Badge>
                        <Badge dot>
                            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} shape="square">U</Avatar>
                        </Badge>
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>badge-徽记</h1>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>comment-评论</h1>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>collapse-折叠面板</h1>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>carousel-走马灯</h1>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>card-卡片</h1>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>calendar-日历</h1>
                    <div className="antd-demo-content">
                        <div className="calendar-box" style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                            <Alert
                                message={`You selected date: ${this.state.selectedDate && this.state.selectedDate.format('YYYY-MM-DD')}`}
                            />
                            <Calendar fullscreen={false} onPanelChange={this.handleCalendarPanelChange} onSelect={this.handleCalendarSelect} />
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>empty-空状态</h1>
                    <div className="antd-demo-content">
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        <Empty
                            image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                            imageStyle={{ height: 60 }}
                            description={
                                <span>
                                    Cusc
                                </span>
                            }
                        >
                            <Button type="primary">Create Now</Button>
                        </Empty>
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>list-列表</h1>
                    <div className="antd-demo-content">
                        <List size="small" header={<div>Header</div>} footer={<div>footer</div>} bordered dataSource={ListData} renderItem={item => (
                            <List.Item>
                                <Typography.Text mark>[ITEM]</Typography.Text> {item}
                            </List.Item>
                        )}></List>
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>popover-气泡卡片</h1>
                    <div className="antd-demo-content">
                        <Popover title="气泡卡片" content={content} placement="bottomLeft" trigger="click" arrowPointAtCenter>
                            <Button type="primary">Hover me</Button>
                        </Popover>
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>statistic</h1>
                    <p></p>
                    <div className="antd-demo-box">
                        <Statistic title="Active Users" value={112122} precision={2} />
                        <Card>
                            <Statistic title="Active" value={11.23} precision={2} valueStyle={{ color: '#3f8600' }} prefix={<Icon type="arrow-up" />} suffix="%" />
                        </Card>
                        <Statistic.Countdown title="倒计时" value={deadline} />
                        <Statistic.Countdown title="毫秒" value={deadline} format="HH:mm:ss:SSS" />
                        <Statistic.Countdown title="天" value={deadline} format="D 天 H 时 m 分 s 秒" />
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>tooltip-文字提示</h1>
                    <p></p>
                    <div className="antd-demo-content">
                        <Tooltip title="文字提示" placement="topLeft">
                            <span>Tooltip will show on mouse enter.</span>
                        </Tooltip>
                        <Tooltip title="文字提示" placement="topRight" arrowPointAtCenter>
                            <span>Tooltip will show on mouse enter.</span>
                        </Tooltip>
                        <Tooltip title="文字提示" placement="topLeft" arrowPointAtCenter>
                            <span>Tooltip will show on mouse enter.</span>
                        </Tooltip>
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>timelie-时间轴</h1>
                    <p></p>
                    <div className="antd-demo-content">
                        <Timeline pending="Recording..." reverse={true} mode="alternate">
                            <Timeline.Item color="green">1</Timeline.Item>
                            <Timeline.Item color="red">2</Timeline.Item>
                            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
                                Technical testing 2015-09-01
                            </Timeline.Item>
                            <Timeline.Item>3</Timeline.Item>
                        </Timeline>
                    </div>
                </div>
                <div className="antd-demo-box">
                    <h1>标签</h1>
                    <p></p>
                    <div className="antd-demo-content">
                        <Tag color="geekblue" closable onClose={this.handleTagClose}>Tag 1</Tag>
                        <Tag color="#87d068">#87d068</Tag>
                        <Tag.CheckableTag checked={this.state.tagChecked} onChange={this.handleTagChange}>可选标签</Tag.CheckableTag>
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>tab-标签页</h1>
                    <div className="antd-demo-content">
                        <Tabs type="card" defaultActiveKey="1" tabPosition="top" onChange={this.handleTabsChanage} style={{ height: '220px' }} tabBarExtraContent={operations}>
                            <Tabs.TabPane tab="标签1" key="1">11111111</Tabs.TabPane>
                            <Tabs.TabPane tab="标签2" key="2">2</Tabs.TabPane>
                            <Tabs.TabPane tab="标签3" key="3" disabled>3</Tabs.TabPane>
                            <Tabs.TabPane tab={<span><Icon type="apple" />Apple</span>} key="4">苹果</Tabs.TabPane>
                            <Tabs.TabPane tab={<span><Icon type="android" />Android</span>} key="5">安卓</Tabs.TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}

export default AntdMenu
