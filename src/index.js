import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import zh_TW from 'antd/lib/locale-provider/zh_TW';
import moment from 'moment';
import 'moment/locale/zh-hk';
import './index.css';
import App from './App';
// import Layout from './LayoutBox';
import * as serviceWorker from './serviceWorker';

moment.locale('zh-hk');

ReactDOM.render((
    <LocaleProvider locale={zh_TW}>
        <App />
    </LocaleProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
