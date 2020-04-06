import React from 'react';
import {
    extendObservable,
    decorate,
    observable,
    computed,
    action,
} from 'mobx';
import { observer, inject } from 'mobx-react';
import { Button, Input } from 'antd';
import styles from './TodoListLess.module.css';

class Todo {
    constructor(title) {
        this.id = Math.random();
        this.title = title;
        this.finished = false;
    }
}

decorate(Todo, {
    title: observable,
    finished: observable,
});

class TodoList {
    @observable todos = [];
    // 未完成项目数
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
    @action addTodo(title) {
        return new Promise((resolve, reject) => {
            let newTodo = new Todo(title);
            this.todos.push(newTodo);
            resolve();
        });
    }
}

@inject('AppStore', 'TodoListStore')
@observer
class TodoListView extends React.Component {
    state = {
        todoTitle: '',
    };
    handleChange = e => {
        this.setState({
            todoTitle: e.target.value,
        });
    };
    handlePressEnter = () => {
        this.props.todoList.addTodo(this.state.todoTitle).then(() => {
            this.setState({
                todoTitle: '',
            });
        });
    };
    changeAppTheme = () => {
        this.props.AppStore.state.theme = 'red';
    };
    render() {
        const {
            state: { theme },
        } = this.props.AppStore;
        return (
            <div className={styles.todoList} style={{ color: theme }}>
                <Input
                    autoFocus
                    value={this.state.todoTitle}
                    style={{ width: '280px' }}
                    placeholder="添加todo，回车确认"
                    onChange={e => {
                        this.handleChange(e);
                    }}
                    onPressEnter={this.handlePressEnter}
                />
                <ul>
                    {this.props.todoList.todos.map(todo => (
                        <TodoView todo={todo} key={todo.id} />
                    ))}
                </ul>
                Tasks left: {this.props.todoList.unfinishedTodoCount} || {theme}
            </div>
        );
    }
}

@observer
class TodoView extends React.Component {
    render() {
        const { todo } = this.props;
        return (
            <li>
                <input
                    type="checkbox"
                    defaultChecked={todo.finished}
                    onClick={() => (todo.finished = !todo.finished)}
                />
                {todo.title}
            </li>
        );
    }
}

const store = new TodoList();

@observer
class MobxDemoView extends React.Component {
    constructor() {
        super();
        extendObservable(this, {
            count: 0,
        });
    }
    onIncrement = () => {
        this.count++;
    };
    onDecrement = () => {
        this.count--;
    };
    render() {
        return (
            <div>
                <div style={{ marginBottom: '16px' }}>
                    <p style={{ marginBottom: '10px' }}>{this.count}</p>
                    <Button.Group>
                        <Button type="primary" onClick={this.onIncrement}>
                            加1
                        </Button>
                        <Button type="primary" onClick={this.onDecrement}>
                            减1
                        </Button>
                    </Button.Group>
                </div>
                <div>
                    <TodoListView todoList={store} />
                </div>
            </div>
        );
    }
}

export default MobxDemoView;
