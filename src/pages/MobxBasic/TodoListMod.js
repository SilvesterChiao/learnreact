import { observable, action, runInAction, autorun } from 'mobx';

class TodoListMod {
    @observable state = {
        count: 0,
        theme: '#3f3f3f',
    };

    @action setTheme = newTheme => {
        this.theme = newTheme;
    };
}

const todoListMod = new TodoListMod();
export default todoListMod;
export { TodoListMod };
