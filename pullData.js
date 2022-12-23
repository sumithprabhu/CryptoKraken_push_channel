var fetch = require("cross-fetch")
const PushAPI = require("@pushprotocol/restapi")
const ethers = require("ethers")
require('dotenv').config()


min_value = 1000000;
function getTimeStamp(){
  return Math.floor(Date.now() / 1000) - 300;
}


let fs = require("fs");

let idArray=[]
function getData(){
//api url from whale-alert.io
url = 'https://api.whale-alert.io/v1/transactions?api_key='+process.env.api_key+'&min_value='+min_value+'&start='+getTimeStamp();
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //console.log(data.transactions[0].amount+ data.transactions[0].symbol+' ('+data.transactions[0].amount_usd+' USD) transfered from '+ data.transactions[0].from.owner+' wallet to '+ data.transactions[0].to.owner+' wallet');
    //loop to iterate over all data of a single request.
    for (var i = 0; i < data.transactions.length; i++){
    
        if (!idArray.includes(data.transactions[i].id)){
          //maintaining an array to check duplication
          idArray.push(data.transactions[i].id)
          var titlein ='Transaction Update';
          var bodyin =data.transactions[i].amount+' '+ data.transactions[i].symbol.toUpperCase()+' ('+data.transactions[i].amount_usd+' USD) transfered from '+ data.transactions[i].from.owner+' wallet to'+ data.transactions[i].to.owner+' wallet'
          sendNotification(titlein,bodyin);
          console.log("notification sent")
        }
    }
  });
}
setInterval(getData,1000*30)

// snippet code from push docs
const PK = process.env.pk; 
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);


const sendNotification = async(titlein, bodyin) => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 1, // broadcast
      identityType: 2, // direct payload
      notification: {
        title: titlein,
        body: bodyin
      },
      payload: {
        title: titlein,
        body: bodyin,
        cta: '',
        img: ''
      },
      channel: 'eip155:5:0xB2050dD41637dD812ebBfdCF962157c118F52BBD', // your channel address
      env: 'staging'
    });
    
    // apiResponse?.status === 204, if sent successfully!
    console.log('API repsonse: ', apiResponse);
  } catch (err) {
    console.error('Error: ', err);
  }
}

