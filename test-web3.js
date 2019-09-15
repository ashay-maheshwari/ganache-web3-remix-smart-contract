var Web3 = require('web3');
var express = require("express");
var pretty = require('express-prettify');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async function(req,res) {
	let _productName = req.query.product;
 	let _productID = req.query.id;
	let _productionDate = req.query.productiondate;
	let _temp = req.query.temp;
	let _humidity = req.query.humidity
   
        console.log(_productName)
        
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var eth = web3.eth;
web3.eth.defaultAccount = "0x5c9634c6ec14e7Ff8B9905c93bfCE942144469Db"

abi = [ { "constant": false, "inputs": [ { "name": "_productname", "type": "string" }, { "name": "_productId", "type": "string" }, { "name": "_productionDate", "type": "string" }, { "name": "_temp", "type": "int256" }, { "name": "_humidity", "type": "int256" } ], "name": "setProduct", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getProduct", "outputs": [ { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "int256" }, { "name": "", "type": "int256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ]


var SupplyChainContract = web3.eth.contract(abi)
var instanceSupplyChainContract = SupplyChainContract.at("0x301a6dAC224006Aa11687BC889182FBEcD0D30E4")


//write data to blockchain
var setData = instanceSupplyChainContract.setProduct(_productName, _productID, _productionDate,_temp, _humidity)

      });

let server = app.listen(8080, function() {
     console.log("server is listening on port 8080")
});






//var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))


//Web3 version
//console.log("API Version" +  web3.version.api)

//client node version
//console.log(web3.version.node)

//Network
//console.log(web3.version.network)


//Isconnected 
//console.log(web3.isConnected())


//Current Provider
//console.log(web3.currentProvider)


//Eth object setup
//var eth = web3.eth;


//Eth default account
//var defaultAccount = web3.eth.defaultAccount;
//console.log(defaultAccount)
//web3.eth.defaultAccount = "0x5c9634c6ec14e7Ff8B9905c93bfCE942144469Db"
//console.log(web3.eth.defaultAccount)


//Is node mining
//var mining = web3.eth.mining;
//console.log(mining);

//Get List of accounts
//var accounts = web3.eth.accounts;
//console.log(accounts)


//Get block number 
//var number = web3.eth.blockNumber;
//console.log(number)


//ABI Array
//abi = [ { "constant": false, "inputs": [ { "name": "_productname", "type": "string" } ], "name": "setProduct", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getProduct", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ]

//var TestContract = web3.eth.contract(abi)
//var instanceTestContract = TestContract.at("0x067565eaD5CAFb8C60cdd312A198c191e43Dc573")
//console.log(instanceTestContract)

// GET content from contract function getProduct()
//var dataFromChain = instanceTestContract.getProduct()
//console.log(dataFromChain)

//Send transaction to contract data
//var setData = instanceTestContract.setProduct("Dairy Milk")
//console.log(setData)

// GET content from contract function getProduct()
//var dataFromChain = instanceTestContract.getProduct()
//console.log(dataFromChain)



//GET Transaction count
//var number = web3.eth.getTransactionCount("0x5c9634c6ec14e7Ff8B9905c93bfCE942144469Db")
//console.log(number)



