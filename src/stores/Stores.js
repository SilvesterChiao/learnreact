import { observable, action, runInAction, autorun } from 'mobx';

class AppStore {
    @observable state = {
        count: 0,
        theme: '#3f3f3f',
    };

    @action setVisible = async payload => {
        runInAction(() => {
            this.state.theme = payload.theme;
        });
    };
    @action setTheme = themeObj => {
        runInAction(() => {
            this.state.theme = themeObj.theme;
        });
        autorun(() => {
            console.log(this.state.theme);
        });
    };
}

const appStore = new AppStore();
export default appStore;
export { AppStore };
