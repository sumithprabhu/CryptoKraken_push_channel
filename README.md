
# CryptoKraken

CryptoKraken is a Push Channel that notifies major pump and dump of crypto by the whale.

The project is a web application that help users track major changes in crypto market by whales.
The application uses API calling to retrieve market data from a third-party alert database API and to integrate with it Push notifications we have used Push SDK. 

Features:
-
- Real Time notifications.
- Provides Crypto's symbol and value in USD.
- No duplicate notification.
- Provides major names of buyer ans seller.

To Run this project on your local system , follow the below steps:
1) Clone the repo
```
git clone https://github.com/sumithprabhu/CryptoKraken_pussh_channel
```
2) Install packages
```
npm install @pushprotocol/restapi ethers dotenv cross-fetch
```
3) Setting up .env file: Create a file named as .env and fill in below details.
```
pk="paste_your_private_key_here"
api_key="paste_your_whale-alert_api_here"
```
4) The project is good to go , press the run button🚀
.


___






## Screenshots

![App Screenshot](https://github.com/sumithprabhu/CryptoKraken_pussh_channel/blob/main/images/Screenshot_20221223_141445.png?raw=true)

                        Notifications in Inbox

![App Screenshot](https://github.com/sumithprabhu/CryptoKraken_pussh_channel/blob/main/images/Screenshot_20221223_143109.png?raw=true)

                        CryptoKraken channel


