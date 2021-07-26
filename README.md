# Certicrypt
## The problem it solves

certicrypt is a tool for students and professional to add actual value to their certificates. The problem which I am trying to solve is meant towards the bad reputation of educational certificates in the ed-tech sector. Nowadays, for many recruiters, certificate is now just a piece of paper because the broken system of certificates cannot actually reflect about the true potential of the candidate. Many candidates just create counterfeit certificates to cheat their employers. That is why fair candidates are also mistreated by recruiters when attaching their certificates.

Certicrypt is built on a Tezos network. All certificate data is stored on-chain and can be verified at any point of time so that recruiters can know the authenticity of a certificate. The idea came from observing my peers in my university. They put so much efforts into achieving different certifications but when they apply for internships, those certificates don’t give them an upper hand because of fake certificate mafia going on for many years in the industry.

# Project Structure

     1. backend: Serverless api for receiving and hashing documents
     2. frontend: Web interface for uploading and validating documents.
     3. contracts: smartpy Tezos smart contract.

# Tech Stack
- I have used smartpy to generate smart contracts to keep a track on uploads and queries.
- I have used Pytezos for the deployed contract
- Created and api in python chalice to handle api calls from the front end to connect it to the smart contract
- Used React for frontend


# Running locally
I have mentioned individual steps to run in each of the folders.

# Screenshots
![image](https://i.imgur.com/AGXbTL5.png)
![image](https://i.imgur.com/Ibtpl7Q.png)
![image](https://i.imgur.com/bHgZPxn.png)
