import { Big } from 'big.js'
import { Token, Operator } from './type'

/** 入力を Token 型の配列に変換 */
export const tokenize = (input: string, validOperators: Operator[]) => {
  const tokens: Token[] = []
  let index = 0
  while (index < input.length) {
    if (!isNaN(+input[index])) {
      const { token, idx } = readNumber(input, index)
      if (token === null) return null
      tokens.push(token)
      index = idx
    } else {
      const { token, idx } = readOperator(input, index, validOperators)
      if (token === null) return null
      // 演算子が不正に連続していたらエラー
      if (tokens.length > 0) {
        if (
          tokens[tokens.length - 1] === '(' &&
          !(token === '-' || token === '(')
        )
          return null

        if (
          isNaN(+tokens[tokens.length - 1]) &&
          tokens[tokens.length - 1] !== ')' &&
          token === ')'
        )
          return null

        if (
          (tokens[tokens.length - 1] === '+' ||
            tokens[tokens.length - 1] === '-' ||
            tokens[tokens.length - 1] === '*' ||
            tokens[tokens.length - 1] === '/') &&
          (token === '+' || token === '-' || token === '*' || token === '/')
        )
          return null
      }

      tokens.push(token)
      index = idx
    }
  }

  // 数字か ) で式が終わっていなかったらエラー
  if (isNaN(+tokens[tokens.length - 1]) && tokens[tokens.length - 1] !== ')')
    return null

  if (tokens[0] !== '-') tokens.unshift('+') // ダミーの + を挿入

  return tokens
}

/** 数字読み込み */
const readNumber = (input: string, idx: number) => {
  // 1 未満の数以外で 0 から始まっていたらエラー
  if (+input[idx] === 0 && idx + 1 < input.length && !isNaN(+input[idx + 1])) {
    const token = null
    return { token, idx }
  }
  let num = new Big(0)
  /** 整数部分読み込み */
  while (idx < input.length && !isNaN(+input[idx])) {
    num = num.times(10).plus(+input[idx])
    idx += 1
  }
  /** 小数部分読み込み */
  if (input[idx] == '.') {
    let decimal = new Big(0.1)
    idx += 1
    // 小数点以下に数字が無かったらエラー
    if (idx >= input.length || isNaN(+input[idx])) {
      const token = null
      return { token, idx }
    }
    while (idx < input.length && !isNaN(+input[idx])) {
      num = decimal.times(+input[idx]).plus(num)
      decimal = decimal.div(10)
      idx += 1
    }
  }
  const token = num
  return { token, idx }
}

/** 演算子の読み込み */
const readOperator = (
  input: string,
  idx: number,
  validOperators: Operator[]
) => {
  if (validOperators.includes(input[idx] as Operator)) {
    const token = input[idx] as Operator
    idx += 1
    return { token, idx }
  }
  const token = null
  idx += 1
  return { token, idx }
}
