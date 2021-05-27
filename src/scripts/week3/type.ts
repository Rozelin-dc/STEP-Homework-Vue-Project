import { Big } from 'big.js'

export type Operator = '+' | '-' | '*' | '/' | '(' | ')'

export type Token = Big | Operator
