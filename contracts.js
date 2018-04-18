
// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'rootnode',
  password: 'Meow@Meow233',
  database: 'dev_node'
});
 
// simple query
connection.query(
  'update students set phone="15829388158" WHERE name = "雷力"',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
  }
);
 
// // with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );


// const {Contract, Qweb3} = require('qweb3')

// var program = require('commander');
// program
//   .version('0.0.1')
//   .parse(process.argv);
// var address = program.args[0]
// var send_nodes_count = program.args[1]
// var course_id = program.args[2]
// var student_id = program.args[3]

// // The path to your local Qtum node via RPC
// const rpcAddress = 'http://test:test1234@127.0.0.1:3889'
// const qClient = new Qweb3('http://test:test1234@127.0.0.1:3889')
// // qClient.getBlockchainInfo().then(console.log)
// // contractAddress = The address of your contract deployed on the blockchain
// // testnet: 0x4b522ef3f01fafb6bd7ba7a8414f1461158cc31a
// // mainnet: 0xe2461c84df96878fa0983e497c97124c15f2b79d
// const contractAddress = '0xe2461c84df96878fa0983e497c97124c15f2b79d';

// // contractAbi = The ABI of the contract
// const contractAbi = [
//  {
//   "constant": true,
//   "inputs": [],
//   "name": "name",
//   "outputs": [
//    {
//     "name": "",
//     "type": "string"
//    }
//   ],
//   "payable": false,
//   "stateMutability": "view",
//   "type": "function"
//  },
//  {
//   "constant": false,
//   "inputs": [
//    {
//     "name": "_spender",
//     "type": "address"
//    },
//    {
//     "name": "_value",
//     "type": "uint256"
//    }
//   ],
//   "name": "approve",
//   "outputs": [
//    {
//     "name": "success",
//     "type": "bool"
//    }
//   ],
//   "payable": false,
//   "stateMutability": "nonpayable",
//   "type": "function"
//  },
//  {
//   "constant": true,
//   "inputs": [],
//   "name": "totalSupply",
//   "outputs": [
//    {
//     "name": "",
//     "type": "uint256"
//    }
//   ],
//   "payable": false,
//   "stateMutability": "view",
//   "type": "function"
//  },
//  {
//   "constant": false,
//   "inputs": [
//    {
//     "name": "_from",
//     "type": "address"
//    },
//    {
//     "name": "_to",
//     "type": "address"
//    },
//    {
//     "name": "_value",
//     "type": "uint256"
//    }
//   ],
//   "name": "transferFrom",
//   "outputs": [
//    {
//     "name": "success",
//     "type": "bool"
//    }
//   ],
//   "payable": false,
//   "stateMutability": "nonpayable",
//   "type": "function"
//  },
//  {
//   "constant": true,
//   "inputs": [],
//   "name": "decimals",
//   "outputs": [
//    {
//     "name": "",
//     "type": "uint8"
//    }
//   ],
//   "payable": false,
//   "stateMutability": "view",
//   "type": "function"
//  },
//  {
//   "constant": true,
//   "inputs": [],
//   "name": "standard",
//   "outputs": [
//    {
//     "name": "",
//     "type": "string"
//    }
//   ],
//   "payable": false,
//   "stateMutability": "view",
//   "type": "function"
//  },
//  {
//   "constant": true,
//   "inputs": [
//    {
//     "name": "",
//     "type": "address"
//    }
//   ],
//   "name": "balanceOf",
//   "outputs": [
//    {
//     "name": "",
//     "type": "uint256"
//    }
//   ],
//   "payable": false,
//   "stateMutability": "view",
//   "type": "function"
//  },
//  {
//   "constant": true,
//   "inputs": [],
//   "name": "symbol",
//   "outputs": [
//    {
//     "name": "",
//     "type": "string"
//    }
//   ],
//   "payable": false,
//   "stateMutability": "view",
//   "type": "function"
//  },
//  {
//   "constant": false,
//   "inputs": [
//    {
//     "name": "_to",
//     "type": "address"
//    },
//    {
//     "name": "_value",
//     "type": "uint256"
//    }
//   ],
//   "name": "transfer",
//   "outputs": [
//    {
//     "name": "success",
//     "type": "bool"
//    }
//   ],
//   "payable": false,
//   "stateMutability": "nonpayable",
//   "type": "function"
//  },
//  {
//   "constant": true,
//   "inputs": [
//    {
//     "name": "",
//     "type": "address"
//    },
//    {
//     "name": "",
//     "type": "address"
//    }
//   ],
//   "name": "allowance",
//   "outputs": [
//    {
//     "name": "",
//     "type": "uint256"
//    }
//   ],
//   "payable": false,
//   "stateMutability": "view",
//   "type": "function"
//  },
//  {
//   "constant": false,
//   "inputs": [
//    {
//     "name": "_owner",
//     "type": "address"
//    }
//   ],
//   "name": "balance",
//   "outputs": [
//    {
//     "name": "balances",
//     "type": "uint256"
//    }
//   ],
//   "payable": false,
//   "stateMutability": "nonpayable",
//   "type": "function"
//  },
//  {
//   "inputs": [],
//   "payable": false,
//   "stateMutability": "nonpayable",
//   "type": "constructor"
//  },
//  {
//   "payable": true,
//   "stateMutability": "payable",
//   "type": "fallback"
//  },
//  {
//   "anonymous": false,
//   "inputs": [
//    {
//     "indexed": true,
//     "name": "_from",
//     "type": "address"
//    },
//    {
//     "indexed": true,
//     "name": "_to",
//     "type": "address"
//    },
//    {
//     "indexed": false,
//     "name": "_value",
//     "type": "uint256"
//    }
//   ],
//   "name": "Transfer",
//   "type": "event"
//  },
//  {
//   "anonymous": false,
//   "inputs": [
//    {
//     "indexed": true,
//     "name": "_owner",
//     "type": "address"
//    },
//    {
//     "indexed": true,
//     "name": "_spender",
//     "type": "address"
//    },
//    {
//     "indexed": false,
//     "name": "_value",
//     "type": "uint256"
//    }
//   ],
//   "name": "Approval",
//   "type": "event"
//  }
// ]


// const contract = new Contract(rpcAddress, contractAddress, contractAbi)
// contract.send('transfer', {
//     methodArgs: [address, Number(send_nodes_count)*100000000],
//     senderAddress: 'QV4PR5nre19w2NNVXZLCBPJYDosob92fhq'
//     //testnet: qLjv8pnuuccSHAmAHfB1s8uT5Ru7xNnK9x
//     //mainnet: QV4PR5nre19w2NNVXZLCBPJYDosob92fhq
//   }).catch(function(error) {
//     console.log(error)
//    process.exit(1)
// });

