# 组件


## React.Component(类组件/有状态组件/容器组件)

1. 有组件实例
1. 有生命周期
1. 有 state 和 setState
1. 大型组件很难拆分和重构, 难以测试
1. 相同业务逻辑分散到各个方法中, 可能会变得混乱
1. 复用逻辑可能变得复杂, 如 HOC, Render Props

## 函数组件(无状态组件/展示组件)

1. 没有组件实例
1. 没有生命周期
1. 没有 state 和 setState, 只能接收 props
1. 函数组件是一个纯函数, 执行完立即销毁, 无法存储 state
1. 灵活易拆分, 但过于简单, 可以通过 hooks 增强函数组件的功能

受控组件和非受控组件

## React.PureComponent

PureComponent 与 Component 几乎一样, 对于 PureComponent 而言, 当其 props 或者 state 改变之时, 新旧 props 和 state 将进行浅对比 (shallow comparison). 另一方面, Component 默认情况下其 shouldComponentUpdate 方法并不进行新旧 props 与 state 的对比

## 其他 API

React.cloneElement

React.createFactory

React.isValidElement(object)

React.Children

React.lazy

## 通信

1. 父组件通过向子组件传 props
1. 子组件调用通过 props 传递过来的方法
1. 跨层级通信使用 Context
1. 使用 Redux/Mobx 等状态管理库
1. 使用订阅/发布模式

## 优化

1. 类组件中的优化手段
    1. 使用纯组件 PureComponent 作为基类
    1. 使用 React.memo 高阶函数包装组件
    1. 使用 shouldComponentUpdate 生命周期函数来定义渲染逻辑
1. 函数组件中的优化手段
    1. 使用 useMemo
    1. 使用 useCallBack
1. 其他方式
    1. 在列表需要频繁变动时, 使用唯一 id 作为 key, 而不是 index
    1. 必要时通过改变 CSS 样式隐藏显示组件, 而不是通过条件判断显示隐藏组件
    1. 使用 Suspense 和 lazy 进行懒加载
