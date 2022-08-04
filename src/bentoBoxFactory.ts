import { Address, ethereum } from "@graphprotocol/graph-ts"
import { DeployPool } from "../generated/bentoBoxFactory/bentoBoxFactory"
import { BIG_INT_ONE, BIG_INT_ZERO } from "./consts"
import { newPair } from "./utils"

export function handlePairCreated(event: DeployPool): void {
    if(event.params.factory.equals(Address.fromString("0x05689fCfeE31FCe4a67FbC7Cab13E74F80A4E288"))) {
        let decodedData = ethereum.decode("(address,address,uint256,bool)", event.params.deployData)
        if(decodedData === null) return
        let dData = decodedData.toTuple()
        newPair(
            event.params.factory, 
            event.params.pool, 
            dData[0].toAddress(), 
            dData[1].toAddress(), 
            dData[2].toBigInt(), 
            BIG_INT_ZERO
        )
    }
}