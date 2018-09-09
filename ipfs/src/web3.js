// Overrride default metamask usage in favour of async and promise support.

import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);

export default web3;