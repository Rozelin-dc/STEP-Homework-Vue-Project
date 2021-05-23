import { Token } from './type'
import * as utils from './utils'

export const mainEx1 = (input: string) => {
  const tokens = utils.tokenize(input.trim(), ['+', '-', '*', '/'])
  if (tokens === null) return 'error'
  const ans = calculate(tokens)
  return ans
}

/** () が無い式の計算 */
export const calculate = (tokens: Token[]) => {
  const newTokens = calculateMultiplicationAndDivision(tokens)
  const ans = calculateAdditionAndSubtraction(newTokens)
  return ans
}

/** 掛け算と割り算のみ計算 */
const calculateMultiplicationAndDivision = (tokens: Token[]) => {
  const newTokens: Token[] = []
  for (let i = 0; i < tokens.length; i += 2) {
    if (tokens[i] === '+' || tokens[i] === '-') {
      newTokens.push(tokens[i])
      newTokens.push(tokens[i + 1])
      continue
    }
    if (tokens[i] === '*') {
      const newTokenValue = +newTokens[newTokens.length - 1]
      newTokens[newTokens.length - 1] = newTokenValue * +tokens[i + 1]
    }
    if (tokens[i] === '/') {
      const newTokenValue = +newTokens[newTokens.length - 1]
      newTokens[newTokens.length - 1] = newTokenValue / +tokens[i + 1]
    }
  }
  return newTokens
}

/** 足し算と引き算のみの式を計算する */
const calculateAdditionAndSubtraction = (tokens: Token[]) => {
  let ans = 0
  for (let i = 0; i < tokens.length; i += 2) {
    if (tokens[i] === '+') {
      ans += +tokens[i + 1]
    }
    if (tokens[i] === '-') {
      ans -= +tokens[i + 1]
    }
  }
  return ans
}