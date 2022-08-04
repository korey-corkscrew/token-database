import { BigInt } from "@graphprotocol/graph-ts"
import { PoolCreated } from "../generated/uniswapV3Factory/uniswapV3Factory"
import { BIG_INT_ZERO } from "./consts"
import { newPair } from "./utils"

export function handlePoolCreated(event: PoolCreated): void {
  newPair(
    event.address, 
    event.params.pool, 
    event.params.token0, 
    event.params.token1, 
    BigInt.fromI32(event.params.fee), 
    BIG_INT_ZERO
  )
}