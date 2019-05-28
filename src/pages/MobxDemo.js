import React from 'react';
import {
    extendObservable,
    decorate,
    observable,
    computed,
    action,
    autorun,
} from 'mobx';
import { observer, inject } from 'mobx-react';
import { Button, Input } from 'antd';
import MobxDemoView from './MobxBasic/TodoListView';

// class Todo {
//     id = Math.random();
//     @observable title = '';
//     @observable finished = false;
// }

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
    todos = [];
    // 未完成项目数
    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
    addTodo(title) {
        return new Promise((resolve, reject) => {
            let newTodo = new Todo(title);
            this.todos.push(newTodo);
            resolve();
        });
    }
}

decorate(TodoList, {
    todos: observable,
    unfinishedTodoCount: computed,
    addTodo: action,
});

class Timer {
    @observable start = Date.now();
    @observable current = Date.now();

    @computed
    get elapsedTime() {
        return this.current - this.start + 'milliseconds';
    }

    @action
    tick() {
        this.current = Date.now();
    }
}

var timer = new Timer();
console.log(timer.elapsedTime);
timer.start = Date.now();
console.log(timer.elapsedTime);

var numbers = observable([1, 2, 3]);
var sum = computed(() => numbers.reduce((a, b) => a + b, 0));

var disposer = autorun(() => console.log(sum.get()));
// 输出 '6'
numbers.push(4);
// 输出 '10'

disposer();
numbers.push(5);
// 不会再输出任何值。`sum` 不会再重新计算。

const TodoListView = observer(
    class TodoListView extends React.Component {
        state = {
            todoTitle: '',
        };
        handleChange = e => {
            this.setState({
                todoTitle: e.target.value,
            });
        };
        handleClick = () => {
            this.props.todoList.addTodo(this.state.todoTitle).then(() => {
                this.setState({
                    todoTitle: '',
                });
            });
            console.log(this.props.todoList);
        };
        render() {
            return (
                <div>
                    <Input
                        value={this.state.todoTitle}
                        style={{ width: '280px' }}
                        placeholder="添加todo"
                        onChange={e => {
                            this.handleChange(e);
                        }}
                    />
                    <Button type="primary" onClick={this.handleClick}>
                        添加
                    </Button>
                    <ul>
                        {this.props.todoList.todos.map(todo => (
                            <TodoView todo={todo} key={todo.id} />
                        ))}
                    </ul>
                    Tasks left: {this.props.todoList.unfinishedTodoCount}
                </div>
            );
        }
    },
);

const TodoView = observer(({ todo }) => (
    <li>
        <input
            type="checkbox"
            defaultChecked={todo.finished}
            onClick={() => (todo.finished = !todo.finished)}
        />
        {todo.title}
    </li>
));

const store = new TodoList();

@inject('AppStore')
@observer
class MobxDemo extends React.Component {
    constructor() {
        super();
        extendObservable(this, {
            count: 0,
            color: '#000',
        });
        this.state = {
            color: '#000',
        };
    }
    componentDidMount() {
        console.log(this.props.AppStore.state);
    }
    onIncrement = () => {
        this.count++;
    };
    onDecrement = () => {
        this.count--;
    };
    handleThemeChange = e => {
        this.color = e.target.value;
    };
    changeAppTheme = () => {
        console.log(this.color);
        this.props.AppStore.setTheme({
            theme: this.color,
        });
    };
    render() {
        const {
            state: { theme },
        } = this.props.AppStore;
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
                <MobxDemoView />
                <Input
                    placeholder="请输入一个颜色值"
                    onChange={this.handleThemeChange}
                />
                {theme}
                <Button type="primary" onClick={this.changeAppTheme}>
                    修改颜色
                </Button>
            </div>
        );
    }
}

export default observer(MobxDemo);
