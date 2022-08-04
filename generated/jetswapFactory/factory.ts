// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class PairCreated extends ethereum.Event {
  get params(): PairCreated__Params {
    return new PairCreated__Params(this);
  }
}

export class PairCreated__Params {
  _event: PairCreated;

  constructor(event: PairCreated) {
    this._event = event;
  }

  get token0(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token1(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get pair(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get param3(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class factory extends ethereum.SmartContract {
  static bind(address: Address): factory {
    return new factory("factory", address);
  }

  allPairs(param0: BigInt): Address {
    let result = super.call("allPairs", "allPairs(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_allPairs(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("allPairs", "allPairs(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allPairsLength(): BigInt {
    let result = super.call("allPairsLength", "allPairsLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_allPairsLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allPairsLength",
      "allPairsLength():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createPair(tokenA: Address, tokenB: Address): Address {
    let result = super.call(
      "createPair",
      "createPair(address,address):(address)",
      [ethereum.Value.fromAddress(tokenA), ethereum.Value.fromAddress(tokenB)]
    );

    return result[0].toAddress();
  }

  try_createPair(
    tokenA: Address,
    tokenB: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createPair",
      "createPair(address,address):(address)",
      [ethereum.Value.fromAddress(tokenA), ethereum.Value.fromAddress(tokenB)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feeTo(): Address {
    let result = super.call("feeTo", "feeTo():(address)", []);

    return result[0].toAddress();
  }

  try_feeTo(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeTo", "feeTo():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feeToSetter(): Address {
    let result = super.call("feeToSetter", "feeToSetter():(address)", []);

    return result[0].toAddress();
  }

  try_feeToSetter(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeToSetter", "feeToSetter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPair(tokenA: Address, tokenB: Address): Address {
    let result = super.call("getPair", "getPair(address,address):(address)", [
      ethereum.Value.fromAddress(tokenA),
      ethereum.Value.fromAddress(tokenB)
    ]);

    return result[0].toAddress();
  }

  try_getPair(tokenA: Address, tokenB: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getPair",
      "getPair(address,address):(address)",
      [ethereum.Value.fromAddress(tokenA), ethereum.Value.fromAddress(tokenB)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CreatePairCall extends ethereum.Call {
  get inputs(): CreatePairCall__Inputs {
    return new CreatePairCall__Inputs(this);
  }

  get outputs(): CreatePairCall__Outputs {
    return new CreatePairCall__Outputs(this);
  }
}

export class CreatePairCall__Inputs {
  _call: CreatePairCall;

  constructor(call: CreatePairCall) {
    this._call = call;
  }

  get tokenA(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenB(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CreatePairCall__Outputs {
  _call: CreatePairCall;

  constructor(call: CreatePairCall) {
    this._call = call;
  }

  get pair(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class SetFeeToCall extends ethereum.Call {
  get inputs(): SetFeeToCall__Inputs {
    return new SetFeeToCall__Inputs(this);
  }

  get outputs(): SetFeeToCall__Outputs {
    return new SetFeeToCall__Outputs(this);
  }
}

export class SetFeeToCall__Inputs {
  _call: SetFeeToCall;

  constructor(call: SetFeeToCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeToCall__Outputs {
  _call: SetFeeToCall;

  constructor(call: SetFeeToCall) {
    this._call = call;
  }
}

export class SetFeeToSetterCall extends ethereum.Call {
  get inputs(): SetFeeToSetterCall__Inputs {
    return new SetFeeToSetterCall__Inputs(this);
  }

  get outputs(): SetFeeToSetterCall__Outputs {
    return new SetFeeToSetterCall__Outputs(this);
  }
}

export class SetFeeToSetterCall__Inputs {
  _call: SetFeeToSetterCall;

  constructor(call: SetFeeToSetterCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeToSetterCall__Outputs {
  _call: SetFeeToSetterCall;

  constructor(call: SetFeeToSetterCall) {
    this._call = call;
  }
}
