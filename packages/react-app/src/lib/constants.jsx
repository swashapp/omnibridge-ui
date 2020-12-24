import { BigNumber } from 'ethers';
import React from 'react';

import { CONFIG } from '../config';
import { NetworkIcon } from '../icons/NetworkIcon';

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';

export const LARGEST_UINT256 = BigNumber.from(
  '115792089237316195423570985008687907853269984665640564039457584007913129639935',
);

export const networkNames = {
  1: 'ETH Mainnet',
  3: 'Ropsten',
  4: 'Rinkeby',
  30: 'RSK Mainnet',
  31: 'RSK Testnet',
  42: 'Kovan Testnet',
  61: 'Ethereum Classic',
  77: 'Sokol Testnet',
  99: 'POA Network',
  100: 'xDai Chain',
};

export const networkOptions =
  CONFIG.network === 77
    ? [
        // sokol
        {
          value: 77,
          key: 0,
          bridge: { chainId: 42, name: networkNames[42] },
          label: 'Sokol',
          name: networkNames[77],
          icon: <NetworkIcon />,
        },
        {
          value: 42,
          key: 1,
          bridge: { chainId: 77, name: networkNames[77] },
          label: 'Kovan',
          name: networkNames[42],
          icon: <NetworkIcon />,
        },
      ]
    : [
        // xdai
        {
          value: 100,
          key: 0,
          bridge: { chainId: 1, name: networkNames[1] },
          label: 'xDai',
          name: networkNames[100],
          icon: <NetworkIcon />,
        },
        {
          value: 1,
          key: 1,
          bridge: { chainId: 100, name: networkNames[100] },
          label: 'Mainnet',
          name: networkNames[1],
          icon: <NetworkIcon />,
        },
      ];

export const chainUrls = {
  100: {
    rpc: process.env.REACT_APP_HOME_RPC_URL || 'https://xdai.poanetwork.dev',
    explorer:
      process.env.REACT_APP_HOME_EXPLORER || 'https://blockscout.com/poa/xdai',
    monitor:
      process.env.REACT_APP_AMB_LIVE_MONITOR ||
      'https://alm-xdai.herokuapp.com',
    chainId: 100,
    name: networkNames[100],
  },
  1: {
    rpc:
      process.env.REACT_APP_FOREIGN_RPC_URL ||
      `https://mainnet.infura.io/v3/${CONFIG.infuraId}`,
    explorer: process.env.REACT_APP_FOREIGN_EXPLORER || 'https://etherscan.io',
    monitor:
      process.env.REACT_APP_AMB_LIVE_MONITOR ||
      'https://alm-xdai.herokuapp.com',
    chainId: 1,
    name: networkNames[1],
  },
  77: {
    rpc: process.env.REACT_APP_HOME_RPC_URL || 'https://sokol.poa.network',
    explorer:
      process.env.REACT_APP_HOME_EXPLORER || 'https://blockscout.com/poa/sokol',
    monitor:
      process.env.REACT_APP_AMB_LIVE_MONITOR ||
      'https://alm-test-amb.herokuapp.com',
    chainId: 77,
    name: networkNames[77],
  },
  42: {
    rpc:
      process.env.REACT_APP_FOREIGN_RPC_URL ||
      `https://kovan.infura.io/v3/${CONFIG.infuraId}`,
    explorer:
      process.env.REACT_APP_FOREIGN_EXPLORER || 'https://kovan.etherscan.io',
    monitor:
      process.env.REACT_APP_AMB_LIVE_MONITOR ||
      'https://alm-test-amb.herokuapp.com',
    chainId: 42,
    name: networkNames[42],
  },
};

export const defaultTokens = {
  100: {
    name: 'Stake on xDai',
    address: '0xb7D311E2Eb55F2f68a9440da38e7989210b9A05e',
    symbol: 'STAKE',
    decimals: 18,
    chainId: 100,
    mode: 'erc677',
  },
  1: {
    name: 'Stake',
    address: '0x0Ae055097C6d159879521C384F1D2123D1f195e6',
    symbol: 'STAKE',
    decimals: 18,
    chainId: 1,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0Ae055097C6d159879521C384F1D2123D1f195e6/logo.png',
    mode: 'erc20',
  },
  77: {
    name: 'FaucetToken on xDai',
    address: '0x1b457c787792d17bea8d41885ada00e764712cdd',
    // 0xF69BA830398B031382Df776b19C312CF468A01c8
    symbol: 'FAU',
    decimals: 18,
    chainId: 77,
    mode: 'erc677',
  },
  42: {
    name: 'FaucetToken',
    address: '0xfab46e002bbf0b4509813474841e0716e6730136',
    // 0xD089cAFDE5Ffad1190dF379b12933e661905c72d
    symbol: 'FAU',
    decimals: 18,
    chainId: 42,
    mode: 'erc20',
  },
};

export const graphEndpoints = {
  100: 'https://api.thegraph.com/subgraphs/name/dan13ram/xdai-omnibridge',
  1: 'https://api.thegraph.com/subgraphs/name/dan13ram/mainnet-omnibridge',
  77: 'https://api.thegraph.com/subgraphs/name/dan13ram/sokol-omnibridge',
  42: 'https://api.thegraph.com/subgraphs/name/dan13ram/kovan-omnibridge',
};

export const mediators = {
  42:
    process.env.REACT_APP_FOREIGN_BRIDGE_ADDRESS ||
    '0xA960d095470f7509955d5402e36d9DB984B5C8E2',
  77:
    process.env.REACT_APP_HOME_BRIDGE_ADDRESS ||
    '0x40CdfF886715A4012fAD0219D15C98bB149AeF0e',
  1:
    process.env.REACT_APP_FOREIGN_BRIDGE_ADDRESS ||
    '0x88ad09518695c6c3712AC10a214bE5109a655671',
  100:
    process.env.REACT_APP_HOME_BRIDGE_ADDRESS ||
    '0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d',
};

export const ambs = {
  42: '0xFe446bEF1DbF7AFE24E81e05BC8B271C1BA9a560',
  77: '0xFe446bEF1DbF7AFE24E81e05BC8B271C1BA9a560',
  1: '0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e',
  100: '0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59',
};

export const defaultTokensUrl = {
  100: 'https://tokens.honeyswap.org',
  1: 'https://tokens.uniswap.org',
  42: '',
  77: '',
};

export const POLLING_INTERVAL = 1000;
