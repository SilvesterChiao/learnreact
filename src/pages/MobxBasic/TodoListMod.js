import { observable, action, runInAction, autorun } from 'mobx'

class AppStore {
    @observable state = {
        count: 0,
        theme: '#3f3f3f'
    }

    @action SetTheme = newTheme => {
        this.theme = newTheme
    }
}

const appStore = new AppStore()
export default appStore
export { AppStore }
