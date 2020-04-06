import { observable, action, runInAction, autorun } from 'mobx';

class TodoListMod {
    @observable state = {};
}

const todoListMod = new TodoListMod();
export default todoListMod;
