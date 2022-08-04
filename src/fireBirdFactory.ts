import { PairCreated } from "../generated/firebirdFactory/firebirdFactory"
import { BIG_INT_ONE, BIG_INT_ZERO } from "./consts"
import { newPair } from "./utils"

export function handlePairCreated(event: PairCreated): void {
  newPair(
    event.address, 
    event.params.pair, 
    event.params.token0, 
    event.params.token1, 
    event.params.swapFee, 
    BIG_INT_ZERO
  )
}