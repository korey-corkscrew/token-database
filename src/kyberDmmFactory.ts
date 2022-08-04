import { PoolCreated } from "../generated/kyberDmmFactory/kyberDmmFactory"
import { BIG_INT_ZERO } from "./consts"
import { newPair } from "./utils"

export function handlePoolCreated(event: PoolCreated): void {
  newPair(
    event.address, 
    event.params.pool,
    event.params.token0, 
    event.params.token1,
    BIG_INT_ZERO,
    BIG_INT_ZERO
  )
}