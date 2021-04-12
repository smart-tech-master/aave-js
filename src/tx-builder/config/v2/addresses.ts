import {
  CommonConfigType,
  GovernanceConfigType,
  LendingPoolConfigType,
  Market,
  Network,
} from '../../types';

export const commonContractAddressBetweenMarketsV2: CommonConfigType = {
  [Network.kovan]: {
    SYNTHETIX_PROXY_ADDRESS: '',
    GOVERNANCE_PROTO_CONTRACT: '0x8134929c3dcb1b8b82f27f53424b959fb82182f2',
    LEND_TO_AAVE_MIGRATOR: '0x8cC8965FEf45a448bdbe3C749683b280eF2E17Ea',
    WETH_GATEWAY: '0xA61ca04DF33B72b235a8A28CfB535bb7A5271B70',
    FAUCET: '0x600103d518cC5E8f3319D532eB4e5C268D32e604',
    SWAP_COLLATERAL_ADAPTER: '0xC18451d36aA370fDACe8d45839bF975F48f7AEa1',
    REPAY_WITH_COLLATERAL_ADAPTER: '0xf86Be05f535EC2d217E4c6116B3fa147ee5C05A1',
    FLASHLIQUIDATION: '0x9D50F0b23b1805773f607F0B4678d724322B7AC2',
    INCENTIVES_CONTROLLER: '',
  },
  [Network.ropsten]: {
    SYNTHETIX_PROXY_ADDRESS: '',
    GOVERNANCE_PROTO_CONTRACT: '',
    LEND_TO_AAVE_MIGRATOR: '',
    WETH_GATEWAY: '',
    FAUCET: '0xcCB8f5183065AF6C40d3A13ae669FB8F92A11C05',
    SWAP_COLLATERAL_ADAPTER: '',
    REPAY_WITH_COLLATERAL_ADAPTER: '',
    FLASHLIQUIDATION: '',
    INCENTIVES_CONTROLLER: '',
  },
  [Network.mainnet]: {
    SYNTHETIX_PROXY_ADDRESS: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    GOVERNANCE_PROTO_CONTRACT: '0x8a2efd9a790199f4c94c6effe210fce0b4724f52',
    LEND_TO_AAVE_MIGRATOR: '0x317625234562b1526ea2fac4030ea499c5291de4',
    WETH_GATEWAY: '0xcc9a0B7c43DC2a5F023Bb9b738E45B0Ef6B06E04',
    FAUCET: '',
    SWAP_COLLATERAL_ADAPTER: '0x63a3f444e97d14e671e7ee323c4234c8095e3516',
    REPAY_WITH_COLLATERAL_ADAPTER: '0x498c5431eb517101582988fbb36431ddaac8f4b1',
    FLASHLIQUIDATION: '0xE377fB98512D7b04827e56BC84e1838804a8019D',
    INCENTIVES_CONTROLLER: '',
  },
  [Network.polygon]: {
    SYNTHETIX_PROXY_ADDRESS: '',
    GOVERNANCE_PROTO_CONTRACT: '',
    LEND_TO_AAVE_MIGRATOR: '',
    WETH_GATEWAY: '0xbEadf48d62aCC944a06EEaE0A9054A90E5A7dc97',
    FAUCET: '',
    SWAP_COLLATERAL_ADAPTER: '',
    REPAY_WITH_COLLATERAL_ADAPTER: '',
    FLASHLIQUIDATION: '',
    INCENTIVES_CONTROLLER: '0x357d51124f59836ded84c8a1730d72b749d8bc23',
  },
  [Network.mumbai]: {
    SYNTHETIX_PROXY_ADDRESS: '',
    GOVERNANCE_PROTO_CONTRACT: '',
    LEND_TO_AAVE_MIGRATOR: '',
    WETH_GATEWAY: '0x13f3210895994769A2E5151DFFF04c5E0dB56647',
    FAUCET: '',
    SWAP_COLLATERAL_ADAPTER: '',
    REPAY_WITH_COLLATERAL_ADAPTER: '',
    FLASHLIQUIDATION: '',
    INCENTIVES_CONTROLLER: '0xd3aC1EBa90c21D70464dDafd30E3Ff8941002929',
  },
};

export const distinctContractAddressBetweenMarketsV2: LendingPoolConfigType = {
  [Market.Proto]: {
    [Network.kovan]: {
      LENDINGPOOL_ADDRESS: '0xE0fBa4Fc209b4948668006B2bE61711b7f465bAe',
    },
    [Network.ropsten]: {
      LENDINGPOOL_ADDRESS: '',
    },
    [Network.mainnet]: {
      LENDINGPOOL_ADDRESS: '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9',
    },
    [Network.polygon]: {
      LENDINGPOOL_ADDRESS: '0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf',
    },
    [Network.mumbai]: {
      LENDINGPOOL_ADDRESS: '0x4c56eed372A1aE5BA106fE5d54Ea1c968BDf68e9',
    },
  },
  [Market.AMM]: {
    [Network.kovan]: {
      LENDINGPOOL_ADDRESS: '0x762E2a3BBe729240ea44D31D5a81EAB44d34ef01',
    },
    [Network.ropsten]: {
      LENDINGPOOL_ADDRESS: '',
    },
    [Network.mainnet]: {
      LENDINGPOOL_ADDRESS: '0x7937d4799803fbbe595ed57278bc4ca21f3bffcb',
    },
  },
};

export const aaveGovernanceV2Addresses: GovernanceConfigType = {
  [Network.kovan]: {
    AAVE_GOVERNANCE_V2: '0xc2eBaB3Bac8f2f5028f5C7317027A41EBFCa31D2',
    AAVE_GOVERNANCE_V2_EXECUTOR_SHORT:
      '0x462eD5dc919BE6C96639D5f31ab919EBA8F31831', // executor for testing
    AAVE_GOVERNANCE_V2_EXECUTOR_LONG:
      '0x7e5195b0A6a60b371Ba3276032CF6958eADFA652',
    AAVE_GOVERNANCE_V2_HELPER: '0xffd5BEb5712952FC9a9DDC7499487422B29Fdda6',
  },
  [Network.ropsten]: {
    AAVE_GOVERNANCE_V2: '',
    AAVE_GOVERNANCE_V2_EXECUTOR_SHORT: '',
    AAVE_GOVERNANCE_V2_EXECUTOR_LONG: '',
    AAVE_GOVERNANCE_V2_HELPER: '',
  },
  [Network.mainnet]: {
    AAVE_GOVERNANCE_V2: '0xEC568fffba86c094cf06b22134B23074DFE2252c',
    AAVE_GOVERNANCE_V2_EXECUTOR_SHORT:
      '0x61910EcD7e8e942136CE7Fe7943f956cea1CC2f7',
    AAVE_GOVERNANCE_V2_EXECUTOR_LONG:
      '0xEE56e2B3D491590B5b31738cC34d5232F378a8D5',
    AAVE_GOVERNANCE_V2_HELPER: '0x16ff7583ea21055bf5f929ec4b896d997ff35847',
  },
  [Network.polygon]: {
    AAVE_GOVERNANCE_V2: '',
    AAVE_GOVERNANCE_V2_EXECUTOR_SHORT: '',
    AAVE_GOVERNANCE_V2_EXECUTOR_LONG: '',
    AAVE_GOVERNANCE_V2_HELPER: '',
  },
  [Network.mumbai]: {
    AAVE_GOVERNANCE_V2: '',
    AAVE_GOVERNANCE_V2_EXECUTOR_SHORT: '',
    AAVE_GOVERNANCE_V2_EXECUTOR_LONG: '',
    AAVE_GOVERNANCE_V2_HELPER: '',
  },
};
