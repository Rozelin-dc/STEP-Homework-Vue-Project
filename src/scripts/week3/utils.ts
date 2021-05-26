import { Big } from 'big.js'
import { Token, Operator } from './type'

/** 入力を Token 型の配列に変換 */
export const tokenize = (input: string, validOperators: Operator[]) => {
  const tokens: Token[] = []
  let index = 0
  while (index < input.length) {
    if (!isNaN(+input[index])) {
      const { token, idx } = readNumber(input, index)
      tokens.push(token)
      index = idx
    } else {
      const { token, idx } = readOperator(input, index, validOperators)
      if (token === null) return null
      tokens.push(token)
      index = idx
    }
  }

  if (tokens[0] !== '-') tokens.unshift('+') // ダミーの + を挿入

  return tokens
}

/** 数字読み込み */
const readNumber = (input: string, idx: number) => {
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
    num = new Big(num)
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
