// using literal strings instead of numbers so that it's easier to inspect
// debugger events

export enum TrackOpTypes {
  GET = 'get',
  HAS = 'has',
  ITERATE = 'iterate',
}

export enum TriggerOpTypes {
  SET = 'set',
  ADD = 'add',
  DELETE = 'delete',
  CLEAR = 'clear',
}

export enum ReactiveFlags {
  SKIP = '__v_skip', // 不应该被转换为响应式代理，在 markRaw 函数中使用，避免对某些对象进行响应式处理
  IS_REACTIVE = '__v_isReactive',
  IS_READONLY = '__v_isReadonly',
  IS_SHALLOW = '__v_isShallow', // 是否浅层响应式代理，控制是否对嵌套对象进行深度响应式处理
  RAW = '__v_raw', // 存储了代理对象对应的原始对象引用，判断是否为代理对象，避免重复代理
  IS_REF = '__v_isRef', // 区分 ref 对象和普通对象，控制 ref 的自动解包行为
}
