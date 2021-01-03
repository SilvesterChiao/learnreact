<!--
 * @Author: SilvesterChiao
 * @Date: 2020-05-29 11:22:50
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-12-24 21:21:41
-->

# 生命周期

即将废弃,主要是 16 版本 render 之前的生命周期可能会被多次执行

1. componentWillMount
1. componentWillReceiveProps
1. componentWillUpdate

创建组件:

1. constructor
1. getDerivedStateFromProps
1. render
1. componentDidMount

更新组件: 修改 props, 修改 state, 调用 forceUpdate()

1. getDerivedStateFromProps
1. shouldComponentUpdate: 返回 false 时中断执行后续生命周期
1. render
1. getSnapshotBeforeUpdate
1. componentDidUpdate

卸载或销毁组件:

1. componentWillUnmount

## 参考文档

1. [React.Component](https://react.docschina.org/docs/react-component.html)
1. [生命周期图谱](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
