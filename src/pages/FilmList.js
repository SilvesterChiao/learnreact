import React from 'react';
import { Table } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import "antd/dist/antd.css";
import { data } from '../assets/scripts/data'


const columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
}, {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
}, {
    title: '热门',
    dataIndex: 'hot',
    key: 'hot',
    render: tags => (
        <span>
            {tags ? '是' : '否'}
        </span>
    )
}, {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
}];

class FilmList extends React.Component {
    state = {
        data
    };

    render() {
        return (
            <Table dataSource={this.state.data.film} columns={columns} rowKey="id" />
        );
    }
}

export default FilmList;
