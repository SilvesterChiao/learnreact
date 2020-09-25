import React from 'react'
import {
    Icon,
    Button,
    Select,
    Divider,
    Alert,
    Drawer,
    Radio,
    Modal,
    message,
    notification,
    Progress,
    Popconfirm,
    Spin,
    Skeleton,
    Switch
} from 'antd'

const { Option } = Select
const onClose = e => {
    console.log(e, 'I was closed.')
}
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']

class AntdAlert extends React.Component {
    state = {
        drawerVisible: false,
        drawerPlacement: 'left',
        modalVisible: false,
        percent: 0,
        loading: false
    }
    showDrawer = () => {
        this.setState({
            drawerVisible: true
        })
    }
    handleDrawerClose = () => {
        this.setState({
            drawerVisible: false
        })
    }
    handleDrawerPlacementChange = e => {
        this.setState({
            drawerPlacement: e.target.value
        })
    }
    showModal = () => {
        this.setState({
            modalVisible: true
        })
    }
    handleModalOk = () => {
        this.setState({
            modalVisible: false
        })
    }
    handleModalCancel = () => {
        this.setState({
            modalVisible: false
        })
    }
    showMessage = () => {
        // message.info('通过message发送全局提示', 5)
        // message.warning('通过message发送全局提示')
        // message
        //     .loading('Action in progress..', 2.5)
        //     .then(() => message.success('Loading finished', 2.5))
        //     .then(() => message.error('Loading finished is finished', 2.5));
        const hide = message.loading('Action in progress..', 0)
        // Dismiss manually and asynchronously
        setTimeout(hide, 2500)
    }
    showNotification = () => {
        const key = `open${Date.now()}`
        const btn = (
            <Button
                type="primary"
                size="small"
                onClick={() => notification.close(key)}
            >
                Confirm
            </Button>
        )
        notification.success({
            duration: 0,
            message: 'notification通知',
            description: '详细描述',
            key,
            btn,
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
            style: {
                width: 600,
                marginLeft: 335 - 600
            },
            onClick: () => {
                console.log('点击notification通知')
            }
        })
        setTimeout(() => {
            notification.info({
                key,
                message: '通过唯一的key修改内容'
            })
        }, 1000)
    }
    increase = () => {
        let percent = this.state.percent + 10
        if (percent > 100) {
            percent = 100
        }
        this.setState({ percent })
    }
    decline = () => {
        let percent = this.state.percent - 10
        if (percent < 0) {
            percent = 0
        }
        this.setState({ percent })
    }
    handlePopconfirmConfirm = () => {
        console.log('yes')
        message.success('yes')
    }
    handlePopconfirmCancel = () => {
        console.log('no')
        message.error('no')
    }
    render() {
        return (
            <div>
                <div className="component-wrapper">
                    <h1>alert-警告提示</h1>
                    <p />
                    <div className="antd-demo-content">
                        <Alert message="SUCCESS text" type="success" />
                        <Alert
                            message="alert消息"
                            description="alert详细描述"
                            type="error"
                            closable
                            onClose={onClose}
                        />
                        <Alert
                            message="alert消息"
                            description="alert详细描述"
                            type="error"
                            closable
                            onClose={onClose}
                            closeText="关闭"
                        />
                        <Alert
                            message="alert消息"
                            description="alert详细描述"
                            type="info"
                            showIcon
                            banner
                        />
                    </div>
                </div>
                <div className={`component-wrapper`}>
                    <h1>drawer-抽屉</h1>
                    <p />
                    <div className="antd-demo-content">
                        <Radio.Group
                            defaultValue={this.state.drawerPlacement}
                            onChange={this.handleDrawerPlacementChange}
                            style={{ marginRight: '8px' }}
                        >
                            <Radio value="top">上</Radio>
                            <Radio value="right">右</Radio>
                            <Radio value="bottom">下</Radio>
                            <Radio value="left">左</Radio>
                        </Radio.Group>
                        <Button type="primary" onClick={this.showDrawer}>
                            打开抽屉
                        </Button>
                        <Drawer
                            title="drawer"
                            placement={this.state.drawerPlacement}
                            onClose={this.handleDrawerClose}
                            visible={this.state.drawerVisible}
                            closable={false}
                        >
                            <p>111111</p>
                            <p>111111</p>
                            <p>111111</p>
                        </Drawer>
                    </div>
                </div>
                <div className="component-wrapper">
                    <h1>modal-对话框</h1>
                    <p />
                    <div className="antd-demo-content">
                        <Button type="primary" onClick={this.showModal}>
                            打开对话框
                        </Button>
                        <Modal
                            title="对话框"
                            visible={this.state.modalVisible}
                            onOk={this.handleModalOk}
                            onCancel={this.handleModalCancel}
                        >
                            <p>111111111</p>
                            <p>111111111</p>
                            <p>111111111</p>
                            <p>111111111</p>
                        </Modal>
                    </div>
                </div>
                <div className="component-wrapper">
                    <h1>message-全局提示</h1>
                    <p />
                    <div className="antd-demo-content">
                        <Button type="primary" onClick={this.showMessage}>
                            发送提示
                        </Button>
                    </div>
                </div>
                <div className="component-wrapper">
                    <h1>nitification-通知提醒框</h1>
                    <p />
                    <div className="antd-demo-content">
                        <Select
                            defaultValue="topRight"
                            style={{ width: 120, marginRight: 10 }}
                            onChange={val => {
                                notification.config({
                                    placement: val
                                })
                            }}
                        >
                            {options.map(val => (
                                <Option key={val} value={val}>
                                    {val}
                                </Option>
                            ))}
                        </Select>
                        <Button type="primary" onClick={this.showNotification}>
                            发送通知
                        </Button>
                    </div>
                </div>
                <div className="component-wrapper">
                    <h1>progress-进度条</h1>
                    <p />
                    <div className="antd-demo-content">
                        <Progress percent={35} status="active" />
                        <Progress
                            percent={70}
                            status="exception"
                            size="small"
                        />
                        <Progress
                            percent={70}
                            showInfo={false}
                            strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
                        />
                        <div>
                            <Progress
                                type="circle"
                                percent={this.state.percent}
                                width={80}
                            />
                            <Button.Group>
                                <Button icon="minus" onClick={this.decline} />
                                <Button icon="plus" onClick={this.increase} />
                            </Button.Group>
                        </div>
                        <Progress
                            percent={34}
                            format={percent => `${percent} Days`}
                            type="dashboard"
                        />
                        <Progress
                            percent={34}
                            successPercent={22}
                            strokeLinecap="square"
                        />
                    </div>
                </div>
                <div className="component-wrapper">
                    <h1>popconfirm-气泡确认框</h1>
                    <p />
                    <div className="antd-demo-content">
                        <Popconfirm
                            title="确定删除？"
                            okText="Yes"
                            cancelText="No"
                            placement="left"
                            onConfirm={this.handlePopconfirmConfirm}
                            onCancel={this.handlePopconfirmCancel}
                            icon={
                                <Icon
                                    type="question-circle-o"
                                    style={{ color: 'red' }}
                                />
                            }
                        >
                            <Button>Delete</Button>
                        </Popconfirm>
                    </div>
                </div>
                <div className="component-wrapper">
                    <h1>spin-加载中</h1>
                    <p />
                    <div className="antd-demo-content">
                        <Spin />
                        <div
                            style={{
                                textAlign: 'center',
                                background: 'rgba(0, 0, 0, 0.05)',
                                borderRadius: '4px',
                                marginBottom: '20px',
                                padding: '30px 50px',
                                margin: '20px 0'
                            }}
                        >
                            <Spin size="large" />
                        </div>
                        <Spin
                            tip="Loading..."
                            spinning={this.state.loading}
                            delay={500}
                        >
                            <Alert
                                message="Alert message title"
                                description="Further details about the context of this alert."
                                type="info"
                            />
                        </Spin>
                        <div style={{ marginTop: '16px' }}>
                            Loading state:{' '}
                            <Switch
                                checked={this.state.loading}
                                onChange={value => {
                                    this.setState({ loading: value })
                                }}
                            />
                        </div>
                        <Spin
                            indicator={
                                <Icon
                                    type="loading"
                                    style={{ fontSize: 24 }}
                                    spin
                                />
                            }
                        />
                    </div>
                </div>
                <div className="component-wrapper">
                    <h1>skeleton-骨架屏</h1>
                    <p />
                    <div className="antd-demo-content">
                        <Skeleton />
                    </div>
                </div>
            </div>
        )
    }
}

export default AntdAlert
