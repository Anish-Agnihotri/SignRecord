![Splash Image](https://i.imgur.com/aSwUeG8.png)

SignRecord was designed and developed to be an easy solution to document credentialization and authentication on a public ledger. By using Ethereum technologies such as IPFS and hash storing, it offers a convenient way for individuals and organizations to integreate form, waiver, and authentication systems in their own applications. 

## Inspiration
The inspiration for SignRecord came from a unified need for an enhanced method to share medical records. In my case, I knew family members that had medical conditions that required them to visit multiple external doctors. Due to this, they'd often carry files upon files of medical history to-and-from doctors (due to security and legal concerns). In comes SignRecord. By allowing a user to upload non-confidential documents to a public ledger and then demanding doctors to sign that they have viewed the document publically, we effectively remove the barrier in-between document sharing and legal verification. 

Another use case that was explored was the need for a public authority to verify liability waiver forms. When I came to PennApps, I was told I didn't sign the waiver, when I was confident I had. Thankfully, I had printed out a copy of the signed waiver. But in another scenario, if tomorrow, PennApps argues that you've never signed their waiver on DocuSign, you'd be unable to claim otherwise. In this case, with SignRecord you've got the option to verify that you've publically signed the transaction on the blockchain.

## Compile
Starting SignRecord is as simple as running a few commands in your terminal: 
1. Start the backend server by navigating to ```/backend```, installing the dependencies with ```npm install``` and then starting it up with ```npm start```.
2. Start the React frontend server by navigating to ```/ipfs```, installing the dependencies with ```npm install``` and then starting it up with ```npm start```.
3. Start the document-IPFS frontend and server by navigating to ```/opensign```, and running these three commands: ```ipfs daemon```, ```embark blockchain```, and ```embark run```. Do note, ```embark@2.6.9``` installed globally and ```geth``` are dependencies. 
4. Finally, make sure you have the ```Metamask``` plugin and are authenticated on the ```Ropsten``` test network, or using a custom RPC-endpoint that is declared in the `config` file. 

## Fancy screenshots of it working
![Image One](https://i.imgur.com/ciAIgOc.jpg)
![Image Two](https://i.imgur.com/frmy5SJ.jpg)
![Image Three](https://i.imgur.com/63FQqOb.jpg)
![Image Four](https://i.imgur.com/E79akL9.jpg)
![Image Five](https://i.imgur.com/J34DdpX.jpg)
![Image Six](https://i.imgur.com/ciAIgOc.jpg)

## Thanks for reading and stay tuned for future updates!
