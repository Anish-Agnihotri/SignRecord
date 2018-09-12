# CRYBL
![Splash Image](https://i.imgur.com/plqd5Nd.png)
SignRecord was designed and developed to be an easy solution to document credentialization and authentication on a public ledger. By using Ethereum technologies such as IPFS and hash storing, it offers a convenient way for individuals and organizations to integreate form, waiver, and authentication systems in their own applications. 

## Inspiration
The idea stemmed from the conspicuous lack of beautiful, easy to use, web-based portfolio managers available to cryptocurrency investors. We realized, however, that such a platform could be so much more. With CRYBL, we introduce smart contracts to provide a gamified investing experience.

## What is CRYBL?
CRYBL provides investors a clear overview of their cryptocurrency portfolio and integrated access to breaking news. Investors can subscribe to market moving hashtags relevant to their holdings, which will populate their feed alongside a sentiment analysis around those tags. Their balances are connected to CoinMarketCap, where live market data is used to update and graph their respective portfolios. Investors place trades directly on our platform, which we execute on Binance’s exchange for a small fee.

The incremental fee proceeds from across our user base get held in an Ethereum Wallet. Investors can check their live rank on our leaderboard, which we measure by percent returns since the first of the month and where gains from any deposits over the course of the month are deferred to the next month. At the end of each month, the contract allocates the Wallet’s pool to the top ten investors, depositing Ethereum directly to their CRYBL portfolios.  

## Compilation

Dependencies: 
* NodeJS 8.9.4LTS or later.
* Node Package Manager ~4.1.1 or later.
* MongoDB 3.6.~ stable release or later.

To run the website, there are three simple steps. First, start the MongoDB instance by running ```mongod --dbpath data``` in the folder directory. Then, you have to start the client MongoDB environment by running ```mongo``` in the data directory. Finally, you can start the NodeJS back-end and server by running ```npm start``` in the folder directory. 

## Software Usage
We used the following technologies: 

1. NodeJS back-end running on ExpressJS framework for quick prototyping.
2. Jade/PUG templating engine.
3. GetJSON query NPM modules.
4. Binance NODE API. 
5. CoinMarketCap API.
6. BlockCypher API. 

## Fancy screenshots of it working:

![Landing Page](https://i.imgur.com/QD7bcVm.png)
We developed the landing page to attract our target audience, while effectively showcasing CRYBL's purpose.

![Dashboard Page](https://i.imgur.com/hgCkFav.png)
Login brings users to the dashboard. Here they can view the day's key market moving data at a glance.

![Market Page](https://i.imgur.com/eGpn1ER.png)
The markets tab allows users to analyze their cryptographic portfolio to motivate their investment decisions.

![Market Pair Page - BTC](https://i.imgur.com/iIjNaQN.png)
After clicking on one of the many ticker options, users are greeted by familiar cryptocurrency charts and statistics.

![Leaderboard Page](https://i.imgur.com/H7hOlwi.png)
The leaderboard tab allows users to see the top performers. The smart contract allocates the Ethereum amongst the top performers monthly.

## Next Steps

Our platform provides a simple, integrated, one-stop shop for cryptocurrency investing. While this provides a long sought after environment for crypto pros, it also serves as a welcoming environment for crypto newcomers. To improve the investing experience for these newcomers, we want to integrate a portfolio “copy” feature akin to CryptoCopy. The investor selects the amount of fiat capital that they want to invest and select an investor from the leaderboard with high returns, trading in currencies they like to follow. Then, the investor will automatically buy and sell the underlying currencies as the investor managing the “copied” portfolio does so. Besides that, just polishing up the interface and releasing it in alpha to the public!

## Thanks for reading!
