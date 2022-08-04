import { PairCreated } from "../generated/undefined/factory"
import { BIG_INT_ONE, BIG_INT_ZERO } from "./consts"
import { newPair } from "./utils"

export function handlePairCreated(event: PairCreated): void {
  newPair(
    event.address, 
    event.params.pair, 
    event.params.token0, 
    event.params.token1, 
    BIG_INT_ZERO, 
    BIG_INT_ZERO
  )
}