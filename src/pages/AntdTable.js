import React from 'react';
import {
    Divider,
    Form,
    Input,
    Button,
    Checkbox,
    Table,
    Tag,
    Modal,
} from 'antd';

const { Column } = Table;

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="www.baidu.com">{text}</a>,
    filters: [{
        text: 'Joe',
        value: 'Joe',
    }, {
        text: 'Jim',
        value: 'Jim',
    }, {
        text: 'Submenu',
        value: 'Submenu',
        children: [{
            text: 'Green',
            value: 'Green',
        }, {
            text: 'Black',
            value: 'Black',
        }],
    }],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    filters: [{
        text: 'London',
        value: 'London',
    }, {
        text: 'New York',
        value: 'New York',
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
}, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
        <span>
            {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                    color = 'volcano';
                }
                return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
            })}
        </span>
    ),
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
            <a href="www.baidu.com" onClick={e => { e.preventDefault();console.log(text) }}>Invite {record.name}</a>
            <Divider type="vertical" />
            <a href="www.baidu.com" onClick={e => { e.preventDefault();console.log(text) }}>Delete</a>
        </span>
    ),
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
}, {
    key: '4',
    name: 'Lili Green',
    age: 23,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    children: [
        {
            key: '301',
            name: '你猜',
            age: 22,
            address: '浙江省杭州市',
            tags: ['标签1', '标签2']
        }
    ]
}];

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}

// demo-2
const userList = [{
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
}, {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
}, {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

class UserTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '用户列表',
            loading: false,
            selectedRowKeys: [],
            modalVisible: false
        }
    }

    start = () => {
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.setState({
                loading: false,
                selectedRowKeys: []
            })
        }, 1000);
    }

    onSelectedChange = selectedRowKeys => {
        this.setState({
            selectedRowKeys
        })
    }

    showModal = (record, e) => {
        const { form: { setFieldsValue } } = this.props;
        e.preventDefault();

        setFieldsValue(record);
        this.setState({
            modalVisible: true
        });
    }

    handleOk = () => {
        const { form: { validateFields } } = this.props;
        let currentUser = 0;
        this.setState({
            modalVisible: false,
        });
        validateFields((err, values) => {
            if (!err) {
                userList.forEach((item, index) => {
                    if(item.key === values.key){
                        currentUser = index;
                    }
                })
                userList.splice(currentUser, 1, values)
            }
        });
    }

    handleCancel = () => {
        this.setState({
            modalVisible: false,
        });
    }

    handleSubmit = (e) => {
        const { form: { validateFields } } = this.props;
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    deleteUser = (index, e) => {
        e.preventDefault();
        userList.splice(index, 1);
        console.log(userList);
    }

    render() {
        const { loading, selectedRowKeys } = this.state;
        const { form: { getFieldDecorator } } = this.props
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectedChange,
            hideDefaultSelections: true,
            selections: [
                {
                    key: 'all-data',
                    text: '全部选中',
                    onSelect: () => {
                        this.setState({
                            selectedRowKeys: [...Array(46).keys()], // 0...45
                        });
                    },
                },
                {
                    key: 'odd',
                    text: 'Select Odd Row',
                    onSelect: (changableRowKeys) => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return false;
                            }
                            return true;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
                {
                    key: 'even',
                    text: 'Select Even Row',
                    onSelect: (changableRowKeys) => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return true;
                            }
                            return false;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                }
            ]
        }
        const hasSelected = selectedRowKeys.length > 0;
        const { modalVisible } = this.state;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tagOptions = [
            { label: 'developer', value:'developer' },
            { label: 'loser', value:'loser' },
            { label: 'teacher', value:'teacher' },
            { label: 'cool', value:'cool' },
            { label: 'nice', value:'nice' },
            { label: 'student', value:'student' },
        ]
        return (
            <div>
                <div style={{ marginBottom: '16px' }}>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>Reload</Button>
                    <span style={{ marginLeft: '16px' }}>{hasSelected && `选择了${selectedRowKeys.length}项`}</span>
                </div>
                <Table
                    bordered
                    size="middle"
                    dataSource={userList}
                    rowSelection={rowSelection}
                    title={() => 'Header'}
                    footer={() => 'Footer'}
                    expandedRowRender={record => <p style={{ margin: 0 }}>{record.address}</p>}
                >
                    {/* <ColumnGroup title="Name">
                        <Column
                            title="First Name"
                            dataIndex="firstName"
                            key="firstName"
                        />
                        <Column
                            title="Last Name"
                            dataIndex="lastName"
                            key="lastName"
                        />
                    </ColumnGroup> */}
                    <Column title="Name" dataIndex="firstName" key="firstName" colSpan={2} />
                    <Column title="Name" dataIndex="lastName" key="lastName" colSpan={0} />
                    <Column
                        title="Age"
                        dataIndex="age"
                        key="age"
                    />
                    <Column
                        title="Address"
                        dataIndex="address"
                        key="address"
                    />
                    <Column
                        title="Tags"
                        dataIndex="tags"
                        key="tags"
                        render={tags => (
                            <span>
                                {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                            </span>
                        )}
                    />
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record, index) => (
                            <span>
                                <a href="www.baidu.com" onClick={e => { this.showModal(record, e) }}>编辑</a>
                                <Divider type="vertical" />
                                <a href="www.baidu.com"  onClick={e => { this.deleteUser(index, e) }}>删除</a>
                            </span>
                        )}
                    />
                </Table>
                <Modal
                    title="编辑"
                    visible={modalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div style={{ width: '400px' }}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item {...formItemLayout} label="ID">
                                {getFieldDecorator('key', {
                                    rules: [{ required: true, message: '请填写id' }],
                                })(
                                    <Input placeholder="ID" disabled />,
                                )}
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="姓名">
                                {getFieldDecorator('firstName')(
                                    <Input placeholder="姓名" />,
                                )}
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="姓名">
                                {getFieldDecorator('lastName')(
                                    <Input placeholder="姓名" />,
                                )}
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="年龄">
                                {getFieldDecorator('age', {
                                    rules: [{ required: true, message: '请填写年龄' }],
                                })(
                                    <Input type="number" placeholder="年龄" />,
                                )}
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="住址">
                                {getFieldDecorator('address')(
                                    <Input placeholder="住址" />,
                                )}
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="标签">
                                {getFieldDecorator('tags')(
                                    <Checkbox.Group options={tagOptions} />
                                )}
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </div>
        )
    }
}

const UserTableForm = Form.create({ name: 'user_table_form' })(UserTable);

class AntdTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [
                {
                    id: 0,
                    name: '李雷'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="antd-demo-box">
                    <h1>表格</h1>
                    <p>
                    </p>
                    <div className="antd-demo-content">
                        <Table columns={columns} dataSource={data} onChange={onChange} rowSelection={rowSelection} />
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>jsx风格</h1>
                    <div className="antd-demo-content">
                        <UserTableForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default AntdTable
