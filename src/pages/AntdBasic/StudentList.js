import React from 'react';
import {
    Table,
    Divider,
    Form,
    Input,
    Radio,
    Modal,
    message,
    Button,
    Popconfirm,
} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'antd/dist/antd.css';
import { movieList } from '../../mock/movieList';
import api from '../../axios/api';
import axios from 'axios';

const { Column, ColumnGroup } = Table;

class StudentList extends React.Component {
    state = {
        studentList: [],
        movieList,
        modalVisible: false,
        selectedStudents: [],
        modalType: 'add',
    };

    componentDidMount() {
        api.mockdata('/data/index').then(res => {
            console.log(res);
        });
        this.getStudentList();
    }

    getStudentList = () => {
        axios.get('http://127.0.0.1:3004/student/list').then(res => {
            if (res.data.code === 1) {
                this.setState({
                    studentList: res.data.data,
                });
            }
        });
    };

    showModal = (id = -1) => {
        const {
            form: { setFieldsValue, resetFields },
        } = this.props;
        const { studentList } = this.state;
        let newState = {};
        resetFields();
        if (id === -1) {
            // 新增学生
            newState = {
                modalVisible: true,
                modalType: 'add',
            };
        } else {
            // 修改学生
            let currentStudent = {};
            studentList.forEach(item => {
                if (item.id === id) {
                    currentStudent = item;
                }
            });
            newState = {
                modalVisible: true,
                modalType: 'edit',
                currentStudent: id,
            };
            setFieldsValue(currentStudent);
        }
        this.setState(newState);
    };

    handleOk = () => {
        const { studentList, currentStudent, modalType } = this.state;
        const {
            form: { validateFields },
        } = this.props;
        validateFields((err, values) => {
            if (err) {
                return;
            }
            const newStudents = Array.from(studentList);
            if (modalType === 'add') {
                // 新增
                newStudents.push(values);
            } else {
                // 修改
                let studentIndex = -1;
                newStudents.forEach((item, index) => {
                    if (item.id === currentStudent) {
                        studentIndex = index;
                    }
                });
                newStudents.splice(studentIndex, 1, values);
            }
            this.setState({
                students: newStudents,
                modalVisible: false,
            });
        });
    };

    handleCancel = () => {
        this.setState({
            modalVisible: false,
        });
    };

    deleteStudents = () => {
        const { selectedStudents } = this.state;
        if (selectedStudents.length === 0) {
            message.error('请至少选择一项');
        } else {
            axios
                .get('http://127.0.0.1:3004/student/delete', {
                    params: {
                        students: selectedStudents,
                    },
                })
                .then(res => {
                    if (res.data.code === 1) {
                        this.getStudentList();
                    }
                });
            this.setState({
                selectedStudents: [],
            });
        }
    };

    deleteOneStudent = (id, e) => {
        axios
            .get('http://127.0.0.1:3004/student/delete', {
                params: {
                    students: [id],
                },
            })
            .then(res => {
                if (res.data.code === 1) {
                    this.getStudentList();
                }
            });
    };

    render() {
        const { studentList, modalVisible } = this.state;
        const {
            form: { getFieldDecorator, getFieldError, isFieldTouched },
        } = this.props;
        // Only show error after a field is touched.
        const idError = isFieldTouched('id') && getFieldError('id');
        const nameError = isFieldTouched('name') && getFieldError('name');
        const ageError = isFieldTouched('age') && getFieldError('age');
        const sexError = isFieldTouched('sex') && getFieldError('sex');

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

        // rowSelection object indicates the need for row selection
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                this.setState({
                    selectedStudents: selectedRowKeys,
                });
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };

        const tableTitle = (
            <div>
                <span>
                    三年二班学生名单（共计
                    {studentList.length}
                    人）
                </span>
                <br />
                <br />
                <Button.Group>
                    <Button
                        type="primary"
                        icon="delete"
                        onClick={this.deleteStudents}
                    >
                        批量删除
                    </Button>
                    <Button
                        type="primary"
                        icon="plus"
                        onClick={() => {
                            this.showModal();
                        }}
                    >
                        新增
                    </Button>
                </Button.Group>
            </div>
        );

        return (
            <div>
                <Table
                    bordered
                    rowKey="id"
                    dataSource={studentList}
                    rowSelection={rowSelection}
                    title={() => tableTitle}
                >
                    <Column title="ID" dataIndex="id" />
                    <Column title="姓名" dataIndex="name" />
                    <Column
                        title="性别"
                        dataIndex="sex"
                        render={sex => <span>{sex === 1 ? '男' : '女'}</span>}
                    />
                    <Column title="年龄" dataIndex="age" />
                    <Column title="生日" dataIndex="birthday" />
                    <Column
                        title="幸运色"
                        dataIndex="color"
                        render={color => (
                            <i
                                style={{
                                    display: 'inline-block',
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: color,
                                }}
                            />
                        )}
                    />
                    <Column title="星座" dataIndex="constellation" />
                    <Column title="地址" dataIndex="address" />
                    <Column
                        title="操作"
                        key="Action"
                        render={(text, record) => (
                            <span>
                                <a
                                    href="javascript:;"
                                    onClick={e => this.showModal(record.id, e)}
                                >
                                    修改
                                </a>
                                <Divider type="vertical" />
                                <Popconfirm
                                    title="确认删除此条数据？"
                                    onConfirm={e => {
                                        this.deleteOneStudent(record.id, e);
                                    }}
                                >
                                    <a href="javascript:;">删除</a>
                                </Popconfirm>
                            </span>
                        )}
                    />
                </Table>
                {/* 模态框 */}
                <Modal
                    title="编辑学生信息"
                    visible={modalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div style={{ width: '400px' }}>
                        <Form>
                            <Form.Item
                                {...formItemLayout}
                                label="ID"
                                validateStatus={idError ? 'error' : ''}
                                help={idError || ''}
                            >
                                {getFieldDecorator('id', {
                                    rules: [
                                        { required: true, message: '请填写id' },
                                    ],
                                })(
                                    <Input
                                        placeholder="ID"
                                        disabled={
                                            this.state.modalType === 'edit'
                                        }
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="姓名"
                                validateStatus={nameError ? 'error' : ''}
                                help={nameError || ''}
                            >
                                {getFieldDecorator('name', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请填写姓名',
                                        },
                                    ],
                                })(<Input placeholder="姓名" />)}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="年龄"
                                validateStatus={ageError ? 'error' : ''}
                                help={ageError || ''}
                            >
                                {getFieldDecorator('age', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请填写年龄',
                                        },
                                    ],
                                })(<Input type="number" placeholder="年龄" />)}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="性别"
                                validateStatus={sexError ? 'error' : ''}
                                help={sexError || ''}
                            >
                                {getFieldDecorator('sex')(
                                    <Radio.Group buttonStyle="solid">
                                        <Radio.Button value={1}>
                                            男
                                        </Radio.Button>
                                        <Radio.Button value={0}>
                                            女
                                        </Radio.Button>
                                    </Radio.Group>,
                                )}
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Form.create()(StudentList);
