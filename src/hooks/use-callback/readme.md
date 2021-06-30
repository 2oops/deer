1. useRef想要达成的目标：
- 能充分利用一个函数式组件多次 render 时产生的相同功能的 callback
- callback 能不受闭包限制，访问到这个函数式组件内部最新的状态