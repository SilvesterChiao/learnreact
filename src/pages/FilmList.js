import React from 'react';
import { Table } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import "antd/dist/antd.css";
import { movieList } from '../mock/movieList'
import api from './../axios/api'


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
        movieList
    };

    componentDidMount() {
        api.mockdata('/data/index')
            .then(res => {
                console.log(res);
            })
    }

    render() {
        const { movieList } = this.state;
        console.log(movieList)
        return (
            <Table dataSource={movieList.data.film} columns={columns} rowKey="id" />
        );
    }
}

export default FilmList;
