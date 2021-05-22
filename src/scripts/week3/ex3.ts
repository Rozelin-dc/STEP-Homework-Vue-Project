import { Token } from './type'
import * as utils from './utils'
import { calculate } from './ex1'

export const mainEx3 = (input: string) => {
  const tokens = utils.tokenize(input, readOperator)
  if (tokens === null) return 'error'
  const ans = calculateBracketedFormula(tokens)
  return ans
}

export const test = () => {
  return 'OK'
}

const calculateBracketedFormula = (tokens: Token[]): number | 'error' => {
  if (tokens.includes('(') && !tokens.includes(')')) return 'error'

  if (tokens.includes('(')) {
    let count = 0
    const beginIdx = tokens.indexOf('(')
    let idx = beginIdx + 1
    while (count !== 0 || tokens[idx] !== ')') {
      if (tokens[idx] === '(') count += 1
      if (tokens[idx] === ')') count -= 1
      idx += 1
    }
    let newTokens = tokens.slice(0, beginIdx)
    const partialTokens = tokens.slice(beginIdx + 1, idx)
    partialTokens.unshift('+')
    const partialAns = calculateBracketedFormula(partialTokens)
    if (partialAns === 'error') return 'error'
    newTokens.push(partialAns)
    newTokens = newTokens.concat(tokens.slice(idx + 1))
    return calculateBracketedFormula(newTokens)
  }
  return calculate(tokens)
}

const readOperator = (input: string, idx: number) => {
  let token: Token | null = null
  switch (input[idx]) {
    case '+':
      token = '+'
      break
    case '-':
      token = '-'
      break
    case '*':
      token = '*'
      break
    case '/':
      token = '/'
      break
    case '(':
      token = '('
      break
    case ')':
      token = ')'
      break
  }
  idx += 1
  return { token, idx }
}
