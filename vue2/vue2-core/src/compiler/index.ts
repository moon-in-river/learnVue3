import { parse } from './parser/index'
import { optimize } from './optimizer'
import { generate } from './codegen/index'
import { createCompilerCreator } from './create-compiler'
import { CompilerOptions, CompiledResult } from 'types/compiler'

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
export const createCompiler = createCompilerCreator(function baseCompile(
  template: string,
  options: CompilerOptions
): CompiledResult {
  /**
   * 将 template 字符串转换成 template ast 对象。使用正则表达式处理属性、v-if、v-for、指令等。
   */
  const ast = parse(template.trim(), options)
  /**
   * 优化 template ast 对象:
   * 1. 提升为常量：避免在每次重新渲染时创建新的节点
   * 2. 跳过 patch 过程：在 DOM 更新时完全跳过这些静态节点
   */
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  /** 将 template ast 转换成 render、staticRenderFns 字符串。 */
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
