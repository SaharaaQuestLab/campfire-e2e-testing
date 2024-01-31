
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // 运行自动化的窗口
  "viewportWidth": 1200,
  "viewportHeight": 800,
 e2e: {
  },
  env: {
    // "baseUrl": 'https://quest.ownstack.cn/?isTest=true',
    "NmAddress": "0xF99B163A328E030ed65e14Fe33582EEbeFb1FAf9",
    "NmprivateKey": "4b3d242b106be3d7f170851990aa7f96d2b413cd0562fee5eefc670bea27e0fb",
    "ReAddress": "0x19745FE4980D6f0EE28bdD0a328f16CAE21c9B13",
    "ReprivateKey": "5ce7a39ead8cac34ca78b830ec3c1e5efeadf0880aaa926cd1cbbfab64390fdb",
    "AmAddress": "0x496A5C061fF014b458fAc9383D03A0FD528468f0",
    "AmprivateKey": "9cb1773b7da8a3845a320a78f37907cd9d350b1c5e28cef7b95944d9315109e6",
    "QmAddress": "0xd998A8F5B717e6deef43170dDf45e8236B4e225e",
    "QmprivateKey": "896e0eb688244e9cc3c3a1262e884058e4f331b1011817de556de2b7ed7bc242",
    "labberAddress": "0xc85b17D1CCd7DD587279B41502B166b9F0b0C956",
    "labberprivateKey": "d815b1f88e299e585788d4ddaba08798317aa186dee27b6fe8b10977436703cd"
  }
});

