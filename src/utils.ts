import { Address } from "@graphprotocol/graph-ts"
import { Token, Pair } from "../generated/schema"

export function fetchToken(_token: Address): Token {
  let token = Token.load(_token.toHex())
  if(token === null) {
    token = new Token(_token.toHex())
    token.save()
  }
  return token as Token
}

export function fetchPair(token0: Address, token1: Address): Pair {
  const id = token0.toHex().concat("-").concat(token1.toHex())
  const revId = token1.toHex().concat("-").concat(token0.toHex())
  let pair = Pair.load(id)
  let revPair = Pair.load(revId)

  if(revPair === null) {
    revPair = new Pair(revId)
    revPair.token0 = token1
    revPair.token1 = token0
    revPair.save()
  }

  if(pair === null) {
    pair = new Pair(id)
    pair.token0 = token0
    pair.token1 = token1
    pair.save()

    let _token0_ = fetchToken(token0)
    let t0Pairs = _token0_.pairs
    if(t0Pairs === null) {
      _token0_.pairs = [token1]
    }
    else {
      _token0_.pairs = t0Pairs.concat([token1])
    }
    _token0_.save()

    let _token1_ = fetchToken(token1)
    let t1Pairs = _token1_.pairs
    if(t1Pairs === null) {
      _token1_.pairs = [token0]
    }
    else {
      _token1_.pairs = t1Pairs.concat([token0])
    }
    _token1_.save()
  }

  return pair as Pair
}