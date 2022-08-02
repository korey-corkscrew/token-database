import { PairCreated } from "../generated/undefined/factory"
import { fetchPair } from "./utils"

export function handlePairCreated(event: PairCreated): void {
  fetchPair(event.params.token0, event.params.token1)
}