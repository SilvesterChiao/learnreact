<!--
 * @Author: SilvesterChiao
 * @Date: 2020-04-05 11:36:10
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-04-05 17:42:45
 -->
# Mobx

## create-react-app 增加修饰器支持

```bash
npm install --save-dev @babel/plugin-proposal-decorators
```

修改./node_modules/babel-preset-react-app/create.js代码

```javascript
// 144行
isTypeScriptEnabled && [
    require('@babel/plugin-proposal-decorators').default,
    { false },
],
// 修改为
isTypeScriptEnabled && [
    require('@babel/plugin-proposal-decorators').default,
    { legacy: true },
],
```

## 参考文献

1. [MobX中文文档](https://cn.mobx.js.org/)
1. [构建大型 Mobx 应用的几个建议](https://zhuanlan.zhihu.com/p/54291246)
