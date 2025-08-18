/**
 * Web平台的钩子函数。
 * 里面有对attr、class、props、events、style以及transition（过渡状态）的DOM属性进行操作
 */
import attrs from './attrs'
import klass from './class'
import events from './events'
import domProps from './dom-props'
import style from './style'
import transition from './transition'

export default [attrs, klass, events, domProps, style, transition]
