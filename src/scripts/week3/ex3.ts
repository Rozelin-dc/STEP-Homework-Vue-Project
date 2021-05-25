import { Token } from './type'
import * as utils from './utils'
import { calculate } from './ex1'

export const mainEx3 = (input: string) => {
  const tokens = utils.tokenize(input, ['+', '-', '*', '/', '(', ')'])
  if (tokens === null) return 'error'
  const ans = calculateBracketedFormula(tokens)
  return ans
}

export const test = () => {
  let ans = 2
  let result = mainEx3('(1+1)')
  if (result !== ans) return 'NG'

  ans = 2
  result = mainEx3('2*(1+1)/2')
  if (result !== ans) return 'NG'

  ans = 1.4
  result = mainEx3('(3+4*(2-1))/5')
  if (result !== ans) return 'NG'

  ans = 18
  result = mainEx3('((1+1)+1)*(3+3)')
  if (result !== ans) return 'NG'

  ans = 5
  result = mainEx3('1+(1+(1+1))+1')
  if (result !== ans) return 'NG'

  ans = 11.1
  result = mainEx3('(1.5+2.2)*3')
  if (result !== ans) return 'NG'

  ans = -11.1
  result = mainEx3('(1.5+2.2)*(-3)')
  if (result !== ans) return 'NG'

  result = mainEx3('1+(2+3')
  if (result !== 'error') return 'NG'

  result = mainEx3('1)+2+3')
  if (result !== 'error') return 'NG'

  return 'OK'
}

/** () を含む数式を計算 */
const calculateBracketedFormula = (tokens: Token[]): number | 'error' => {
  // かっこが対になっていなかったらエラー
  if (tokens.includes('(') && !tokens.includes(')')) return 'error'
  if (!tokens.includes('(') && tokens.includes(')')) return 'error'

  if (tokens.includes('(')) {
    let count = 0
    const beginIdx = tokens.indexOf('(')
    let idx = beginIdx + 1
    // 対になるかっこを探す
    while (count !== 0 || tokens[idx] !== ')') {
      if (tokens[idx] === '(') count += 1
      if (tokens[idx] === ')') count -= 1
      idx += 1
    }
    // () の内側を計算済みのものに置き換えて数式を再構築し、再度計算
    const partialTokens = tokens.slice(beginIdx + 1, idx)
    if (partialTokens[0] !== '-') partialTokens.unshift('+')
    const partialAns = calculateBracketedFormula(partialTokens)
    if (partialAns === 'error') return 'error'
    let newTokens = tokens.slice(0, beginIdx)
    newTokens.push(partialAns)
    newTokens = newTokens.concat(tokens.slice(idx + 1))
    return calculateBracketedFormula(newTokens)
  }
  // () が無ければ普通に計算
  return calculate(tokens)
}
