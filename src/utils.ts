import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Token, Pair, Factory, FactoryPair } from "../generated/schema"
import { BIG_INT_ONE, BIG_INT_ZERO } from "./consts"


function fetchToken(_token: Address): Token {
  let token = Token.load(_token.toHex())
  if(token === null) {
    token = new Token(_token.toHex())
    token.pairCount = BIG_INT_ZERO
    token.save()
  }
  return token as Token
}

function fetchFactory(_factory: Address): Factory {
  let factory = Factory.load(_factory.toHex())
  if(factory === null) {
    factory = new Factory(_factory.toHex())
    factory.pairCount = BIG_INT_ZERO
  }
  factory.pairCount = factory.pairCount.plus(BIG_INT_ONE)
  factory.save()
  return factory as Factory
}

function addTokenPair(_token: Address, _pairToken: Address): void {
  let token = fetchToken(_token)
  let tokenPairs = token.pairs
  if(tokenPairs === null) {
    token.pairs = [_pairToken]
  } else {
    token.pairs = tokenPairs.concat([_pairToken])
  }
  token.pairCount = token.pairCount.plus(BIG_INT_ONE)
  token.save()
}



function fetchPair(_factory: Address, _token0: Address, _token1: Address, _pair: Address, _fee: BigInt, _index: BigInt): Pair {
  const id = _token0.toHex().concat("-").concat(_token1.toHex())
  let pair = Pair.load(id)

  if(pair === null) {
    pair = new Pair(id)
    pair.pairCount = BIG_INT_ZERO
    pair.token0 = _token0
    pair.token1 = _token1
    pair.save()

    addTokenPair(_token0, _token1)
    addTokenPair(_token1, _token0)
  }

  addFactoryPair(pair, fetchFactoryPair(_factory, _pair, _fee, _index))

  return pair as Pair
}

function addFactoryPair(pair: Pair, factoryPair: FactoryPair): void {
  const pairs = pair.pairs
  if(pairs === null) {
    pair.pairs = [factoryPair.id]
  } else {
    pair.pairs = pairs.concat([factoryPair.id])
  }
  pair.pairCount = pair.pairCount.plus(BIG_INT_ONE)
  pair.save()
}

function fetchFactoryPair(_factory: Address, _pair: Address, _fee: BigInt, _index: BigInt): FactoryPair {
  const id = _factory.toHex().concat("-").concat(_pair.toHex()).concat("-").concat(_fee.toString()).concat(_index.toString())
  let factoryPair = FactoryPair.load(id)
  if(factoryPair === null) {
    factoryPair = new FactoryPair(id)
    factoryPair.factory = fetchFactory(_factory).id
    factoryPair.address = _pair
    factoryPair.fee = _fee
    factoryPair.save()
  }
  return factoryPair as FactoryPair
}





export function newPair(factory: Address, pair: Address, token0: Address, token1: Address, fee: BigInt, index: BigInt): void {
  fetchPair(factory, token0, token1, pair, fee, index)
}