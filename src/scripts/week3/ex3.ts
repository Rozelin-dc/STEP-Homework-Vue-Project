import { Token } from './type'
import * as utils from './utils'
import { calculate } from './ex1'
import { Big } from 'big.js'

export const mainEx3 = (input: string) => {
  const tokens = utils.tokenize(input, ['+', '-', '*', '/', '(', ')'])
  if (tokens === null) return 'error'
  const ans = calculateBracketedFormula(tokens)
  return ans
}

export const testEx3 = () => {
  let ans = 2
  let result = mainEx3('(1+1)')
  if (result === 'error' || !result.eq(ans)) return 'NG'

  ans = 2
  result = mainEx3('2*(1+1)/2')
  if (result === 'error' || !result.eq(ans)) return 'NG'

  ans = 1.4
  result = mainEx3('(3+4*(2-1))/5')
  if (result === 'error' || !result.eq(ans)) return 'NG'

  ans = 18
  result = mainEx3('((1+1)+1)*(3+3)')
  if (result === 'error' || !result.eq(ans)) return 'NG'

  ans = 5
  result = mainEx3('1+(1+(1+1))+1')
  if (result === 'error' || !result.eq(ans)) return 'NG'

  ans = 11.1
  result = mainEx3('(1.5+2.2)*3')
  if (result === 'error' || !result.eq(ans)) return 'NG'

  ans = -11.1
  result = mainEx3('(1.5+2.2)*(-3)')
  if (result === 'error' || !result.eq(ans)) return 'NG'

  ans = 16
  result = mainEx3('2(3+5)')
  if (result === 'error' || !result.eq(ans)) return 'NG'

  ans = 16
  result = mainEx3('2(3-1+2)2')
  if (result === 'error' || !result.eq(ans)) return 'NG'

  ans = -0.2
  result = mainEx3('1+(-(0.1+1.1))')
  if (result === 'error' || !result.eq(ans)) return 'NG'

  result = mainEx3('1+(2+3')
  if (result !== 'error') return 'NG'

  result = mainEx3('1)+2+3')
  if (result !== 'error') return 'NG'

  result = mainEx3('(((3))')
  if (result !== 'error') return 'NG'

  result = mainEx3('()*2+1')
  if (result !== 'error') return 'NG'

  result = mainEx3('(1+1*)2')
  if (result !== 'error') return 'NG'

  return 'OK'
}

/** () を含む数式を計算 */
const calculateBracketedFormula = (tokens: Token[]): Big | 'error' => {
  // かっこが対になっていなかったらエラー
  if (tokens.includes('(') && !tokens.includes(')')) return 'error'
  if (!tokens.includes('(') && tokens.includes(')')) return 'error'

  if (tokens.includes('(')) {
    let count = 0
    const beginIdx = tokens.indexOf('(')
    let idx = beginIdx + 1
    // 対になるかっこを探す
    while ((count !== 0 || tokens[idx] !== ')') && idx < tokens.length) {
      if (tokens[idx] === '(') count += 1
      if (tokens[idx] === ')') count -= 1
      idx += 1
    }

    // ( と ) の数が合わなかったらエラー
    if (idx >= tokens.length) return 'error'

    // () の内側を計算済みのものに置き換えて数式を再構築し、再度計算
    const partialTokens = tokens.slice(beginIdx + 1, idx)
    if (partialTokens.length === 0) return 'error' // () の内側が空だったらエラー
    if (partialTokens[0] !== '-') partialTokens.unshift('+') // ダミーの + を挿入
    const partialAns = calculateBracketedFormula(partialTokens)
    if (partialAns === 'error') return 'error'

    let newTokens = tokens.slice(0, beginIdx)
    if (newTokens.length > 0 && !isNaN(+newTokens[newTokens.length - 1]))
      newTokens.push('*') // * が省略されていたら挿入
    newTokens.push(partialAns)

    const backPartialTokens = tokens.slice(idx + 1)
    if (backPartialTokens.length > 0 && !isNaN(+backPartialTokens[0]))
      backPartialTokens.unshift('*') // * が省略されていたら挿入
    newTokens = newTokens.concat(backPartialTokens)

    return calculateBracketedFormula(newTokens)
  }
  // () が無ければ普通に計算
  return calculate(tokens)
}
