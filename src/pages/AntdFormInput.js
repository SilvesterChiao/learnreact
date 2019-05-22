import React from 'react';
import { Row, Col, Divider, Button, AutoComplete, Checkbox, Cascader, DatePicker, InputNumber, Input, Select, Icon, Radio, Switch, } from 'antd'
import "antd/dist/antd.css";
import moment from 'moment';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const Option = Select.Option;
const { Password, Search, TextArea } = Input;

const cascaderOptions = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    disabled: true,
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

let onCascaderChange = (value) => {
    console.log(value)
}

function cascaderFilter(inputValue, path) {
    return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
}

function onDateChange(date, dateString) {
    console.log(date, dateString);
}

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']

const selectBefore = (
    <Select defaultValue="Http://" style={{ width: 90 }}>
        <Option value="Http://">Http://</Option>
        <Option value="Https://">Https://</Option>
    </Select>
)

const selectAfter = (
    <Select defaultValue=".com" style={{ width: 80 }}>
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
    </Select>
)

class AntdFormInput extends React.Component {
    state = {
        dataSource: [],
        checkboxChecked: true,
        checkboxDisabled: false
    }
    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }
    toggleCheckboxChecked = () => {
        this.setState({
            checkboxChecked: !this.state.checkboxChecked
        })
    }
    toggleCheckboxDisabled = () => {
        this.setState({
            checkboxDisabled: !this.state.checkboxDisabled
        })
    }
    onCheckboxChange = (e) => {
        console.log('选中：' + e.target.checked)
        this.setState({
            checkboxChecked: e.target.checked
        })
    }
    render() {
        const label = `${this.state.checkboxChecked ? 'Checked' : 'Unchecked'}-${this.state.checkboxDisabled ? 'Disabled' : 'Enabled'}`;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <div>
                <div className="antd-demo-box">
                    <h1>综合练习</h1>
                    <div className="antd-demo-content">
                        <Row>
                            <Col span={4}>
                                多选框
                            </Col>
                            <Col span={8}>
                                <Checkbox.Group name="FE" defaultValue={[2]} disabled={false} onChange={checkedValue => {console.log(checkedValue)}}>
                                    <Checkbox value={1} autoFocus>
                                        HTML
                                    </Checkbox>
                                    <Checkbox value={2} checked disabled={false}>
                                        CSS
                                    </Checkbox>
                                    <Checkbox value={3} onChange={e => {console.log(e.target.value)}} defaultChecked={false}>
                                        JavaScript
                                    </Checkbox>
                                </Checkbox.Group>
                            </Col>
                            <Col span={8}>
                                <Checkbox.Group name="zuowu" defaultValue={[1,2,3]} onChange={checkedValue => {console.log(checkedValue);}}>
                                    <Checkbox value={1}>水稻</Checkbox>
                                    <Checkbox value={2}>玉米</Checkbox>
                                    <Checkbox value={2}>大豆</Checkbox>
                                </Checkbox.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={4}>
                                单选框
                            </Col>
                            <Col span={8}>
                                <Radio.Group size="small" buttonStyle="solid" defaultValue={0}>
                                    <Radio.Button value={0} defaultChecked autoFocus>中国</Radio.Button>
                                    <Radio.Button value={1}>美国</Radio.Button>
                                    <Radio.Button value={2}>日本</Radio.Button>
                                    <Radio.Button value={3}>欧盟</Radio.Button>
                                </Radio.Group>
                            </Col>
                            <Col span={8}>

                            </Col>
                        </Row>
                        <Row>
                            <Col span={4}>输入框</Col>
                            <Col span={8}>
                                <Input addonBefore="前缀" addonAfter="后缀" placeholder="占位符" />
                            </Col>
                        </Row>

                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>自动补全</h1>
                    <div className="antd-demo-content">
                        <AutoComplete
                            dataSource={this.state.dataSource}
                            style={{ width: 200 }}
                            onSearch={this.handleSearch}
                            placeholder="输入"
                        />
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>多选框</h1>
                    <div className="antd-demo-content">
                        <p style={{ marginBottom: '20px' }}>
                            <Checkbox
                                checked={this.state.checkboxChecked}
                                disabled={this.state.checkboxDisabled}
                                onChange={this.onCheckboxChange}
                            >
                                {label}
                            </Checkbox>
                            <Checkbox indeterminate={true}>全选</Checkbox>
                        </p>
                        <p>
                            <Button
                                type="primary"
                                size="small"
                                onClick={this.toggleCheckboxChecked}
                            >
                                {!this.state.checkboxChecked ? 'Check' : 'Uncheck'}
                            </Button>
                            <Button
                                style={{ marginLeft: '10px' }}
                                type="primary"
                                size="small"
                                onClick={this.toggleCheckboxDisabled}
                            >
                                {!this.state.checkboxDisabled ? 'Disable' : 'Enable'}
                            </Button>
                        </p>
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>级联选择</h1>
                    <p></p>
                    <div className="antd-demo-content">
                        <Cascader size="small" defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={cascaderOptions} onChange={onCascaderChange} placeholder="Please select" changeOnSelect showSearch={cascaderFilter} />
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>日期选择框</h1>
                    <p>
                        默认为es-US，分别设置antd和moment
                    </p>
                    <div className="antd-demo-content">
                        <DatePicker onChange={onDateChange} defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} size="small" dateRender={(current) => {
                            const style = {};
                            if (current.date() === 1) {
                                style.border = '1px solid #1890ff';
                                style.borderRadius = '50%';
                            }
                            return (
                                <div className="ant-calendar-date" style={style}>
                                    {current.date()}
                                </div>
                            );
                        }} /><br />
                        <DatePicker onChange={onDateChange} defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} disabled /><br />
                        <MonthPicker onChange={onDateChange} defaultValue={moment('2015/01', monthFormat)} format={monthFormat} placeholder="选择月" /><br />
                        <RangePicker onChange={onDateChange} defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]} format={dateFormat} /><br />
                        <WeekPicker onChange={onDateChange} placeholder="选择周" renderExtraFooter={() => '自定义内容'} /><br />
                        <RangePicker placeholder={['开始时间', '结束时间']} showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm" ranges={{ Today: [moment(), moment()], 'This Month': [moment().startOf('month'), moment().endOf('month')] }} />
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>表单</h1>
                    <p>
                        具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。 <br />
                        排列方式：水平，垂直，行内
                    </p>
                    <div className="antd-demo-content">

                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>数字输入框</h1>
                    <p></p>
                    <div className="antd-demo-content">
                        <InputNumber min={1} max={10} defaultValue={4} step={0.5} size="small" disabled /><br />
                        <InputNumber min={1} max={10} defaultValue={3} size="large" />
                        <InputNumber
                            defaultValue={1000}
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        />
                        <InputNumber
                            defaultValue={100}
                            min={0}
                            max={100}
                            formatter={value => `${value}%`}
                            parser={value => value.replace('%', '')}
                        />
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>输入框</h1>
                    <p></p>
                    <div className="antd-demo-content" style={{ width: '400px' }}>
                        <Input placeholder="输入框" />
                        <div style={{ marginTop: '16px' }}>
                            <Input addonBefore="http://" addonAfter=".com" defaultValue="www.baidu.com" />
                        </div>
                        <div style={{ marginTop: '16px' }}>
                            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="www.baidu.com" />
                        </div>
                        <div style={{ marginTop: '16px' }}>
                            <Input addonAfter={<Icon type="setting" />} defaultValue="fsd" />
                            <Password placeholder="请输入密码" />
                            <Search enterButton />
                            <TextArea rows={4} />
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>提及</h1>
                    <p></p>
                    <div className="antd-demo-content"></div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>评分</h1>
                    <p></p>
                    <div className="antd-demo-content"></div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>单选</h1>
                    <p></p>
                    <div className="antd-demo-content">
                        <Radio.Group onChange={e => { console.log(e.target.value) }}>
                            <Radio value={1} style={radioStyle}>
                                苹果
                            </Radio>
                            <Radio value={2} style={radioStyle}>
                                香蕉
                            </Radio>
                            <Radio value={3} disabled style={radioStyle}>
                                橘子
                            </Radio>
                        </Radio.Group>
                        <Radio.Group name="city" options={[{label: '北京', value: 0}, {label: '上海', value: 1}]} />
                        <Radio.Group buttonStyle="solid" size="small">
                            <Radio.Button value="a">日本</Radio.Button>
                            <Radio.Button value="b">韩国</Radio.Button>
                            <Radio.Button value="c">香港</Radio.Button>
                        </Radio.Group>
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>开关</h1>
                    <p></p>
                    <div className="antd-demo-content">
                        <Switch defaultChecked loading checkedChildren="开" unCheckedChildren="关" onChange={checked => { console.log(`开关： ${checked}`) }} />
                        <Switch
                            defaultChecked
                            disabled
                            size="small"
                            checkedChildren={<Icon type="check" />}
                            unCheckedChildren={<Icon type="close" />}
                            onChange={checked => { console.log(`开关： ${checked}`) }}
                        />
                        {/* <Switch defaultChecked onChange={checked => {console.log(`开关： ${checked}`)}} /> */}
                    </div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>滑块</h1>
                    <p></p>
                    <div className="antd-demo-content"></div>
                </div>
                <Divider />
                <div className="antd-demo-box">
                    <h1>选择框</h1>
                    <p></p>
                    <div className="antd-demo-content"></div>
                </div>
            </div>
        )
    }
}

export default AntdFormInput
