# 虚拟 DOM 和 diff 算法

## 虚拟 DOM(Virtual Document Object Model)

什么是虚拟 DOM ?

用 JS 对象来模拟页面上的 DOM 和 DOM 嵌套, 以此实现页面中 DOM 元素的高效更新

为什么使用虚拟 DOM ? 有什么优点?

1. 虚拟 DOM 相当于在 JS 和真实 DOM 之间增加了一层缓存, 利用 diff 算法避免了没有必要的 DOM 操作, 从而提升性能
1. 用 JavaScript 对象结构表示 DOM 树的结构, 然后用这个树构建一个真正的 DOM 树, 插到文档当中, 当状态变更的时候, 重新构造一棵新的对象树. 然后用新的树和旧的树进行比较, 记录两棵树差异把 2 所记录的差异应用的步骤 1 所构建的真正的 DOM 树上, 视图就更新了

虚拟 DOM 的原理是什么?

## diff 算法

1. 把树形结构按照层级分解, 只比较同级元素
1. 列表结构的每个单元添加唯一的 key 属性, 方便比较
1. React 只会匹配相同 class 的 component
1. 合并操作, 调用 component 的 setState 方法的时候, React 将其标记为 dirty 到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制
1. 选择性子树渲染. 开发人员可以重写 shouldComponentUpdate 提高 diff 的性能

计算

tree diff

component diff

element diff

## Keys

Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识
