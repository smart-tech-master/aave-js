/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IParaSwapLiquiditySwapAdapterInterface
  extends ethers.utils.Interface {
  functions: {
    "swapAndDeposit(address,address,uint256,uint256,uint256,bytes,address,tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "swapAndDeposit",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      string,
      {
        amount: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "swapAndDeposit",
    data: BytesLike
  ): Result;

  events: {};
}

export class IParaSwapLiquiditySwapAdapter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IParaSwapLiquiditySwapAdapterInterface;

  functions: {
    swapAndDeposit(
      assetToSwapFrom: string,
      assetToSwapTo: string,
      amountToSwap: BigNumberish,
      minAmountToReceive: BigNumberish,
      swapAllBalanceOffset: BigNumberish,
      swapCalldata: BytesLike,
      augustus: string,
      permitParams: {
        amount: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapAndDeposit(address,address,uint256,uint256,uint256,bytes,address,(uint256,uint256,uint8,bytes32,bytes32))"(
      assetToSwapFrom: string,
      assetToSwapTo: string,
      amountToSwap: BigNumberish,
      minAmountToReceive: BigNumberish,
      swapAllBalanceOffset: BigNumberish,
      swapCalldata: BytesLike,
      augustus: string,
      permitParams: {
        amount: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  swapAndDeposit(
    assetToSwapFrom: string,
    assetToSwapTo: string,
    amountToSwap: BigNumberish,
    minAmountToReceive: BigNumberish,
    swapAllBalanceOffset: BigNumberish,
    swapCalldata: BytesLike,
    augustus: string,
    permitParams: {
      amount: BigNumberish;
      deadline: BigNumberish;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapAndDeposit(address,address,uint256,uint256,uint256,bytes,address,(uint256,uint256,uint8,bytes32,bytes32))"(
    assetToSwapFrom: string,
    assetToSwapTo: string,
    amountToSwap: BigNumberish,
    minAmountToReceive: BigNumberish,
    swapAllBalanceOffset: BigNumberish,
    swapCalldata: BytesLike,
    augustus: string,
    permitParams: {
      amount: BigNumberish;
      deadline: BigNumberish;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    swapAndDeposit(
      assetToSwapFrom: string,
      assetToSwapTo: string,
      amountToSwap: BigNumberish,
      minAmountToReceive: BigNumberish,
      swapAllBalanceOffset: BigNumberish,
      swapCalldata: BytesLike,
      augustus: string,
      permitParams: {
        amount: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "swapAndDeposit(address,address,uint256,uint256,uint256,bytes,address,(uint256,uint256,uint8,bytes32,bytes32))"(
      assetToSwapFrom: string,
      assetToSwapTo: string,
      amountToSwap: BigNumberish,
      minAmountToReceive: BigNumberish,
      swapAllBalanceOffset: BigNumberish,
      swapCalldata: BytesLike,
      augustus: string,
      permitParams: {
        amount: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    swapAndDeposit(
      assetToSwapFrom: string,
      assetToSwapTo: string,
      amountToSwap: BigNumberish,
      minAmountToReceive: BigNumberish,
      swapAllBalanceOffset: BigNumberish,
      swapCalldata: BytesLike,
      augustus: string,
      permitParams: {
        amount: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapAndDeposit(address,address,uint256,uint256,uint256,bytes,address,(uint256,uint256,uint8,bytes32,bytes32))"(
      assetToSwapFrom: string,
      assetToSwapTo: string,
      amountToSwap: BigNumberish,
      minAmountToReceive: BigNumberish,
      swapAllBalanceOffset: BigNumberish,
      swapCalldata: BytesLike,
      augustus: string,
      permitParams: {
        amount: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swapAndDeposit(
      assetToSwapFrom: string,
      assetToSwapTo: string,
      amountToSwap: BigNumberish,
      minAmountToReceive: BigNumberish,
      swapAllBalanceOffset: BigNumberish,
      swapCalldata: BytesLike,
      augustus: string,
      permitParams: {
        amount: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapAndDeposit(address,address,uint256,uint256,uint256,bytes,address,(uint256,uint256,uint8,bytes32,bytes32))"(
      assetToSwapFrom: string,
      assetToSwapTo: string,
      amountToSwap: BigNumberish,
      minAmountToReceive: BigNumberish,
      swapAllBalanceOffset: BigNumberish,
      swapCalldata: BytesLike,
      augustus: string,
      permitParams: {
        amount: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
