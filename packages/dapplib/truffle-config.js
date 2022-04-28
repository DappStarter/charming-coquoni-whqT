require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain hospital imitate problem swear spoon'; 
let testAccounts = [
"0x0823e99462d85a00f57195de916805003263a7b9a44f7e5a9332d3b9021715b7",
"0x2eae97e739815d114dfba69d99f542cdb2427fa47d3e956d15adf658ab65651c",
"0x6883255ece8bc9035d3ad3a047751d394fa1582ce6745cc089bfe4bb699fb976",
"0xd915efda380da78a4e0e8a740fe98fa6e0379cf11b55fd65c0364befb96243d5",
"0x98f938903a92d5f4b1728dbeab1d19bdc9ca004893592f3d6759636a371f81a5",
"0x279a743ad3d5af7e1f77b97723c8d4680d8466d9e58dd060b996f99fa30a57aa",
"0x69970fa64502f21e7b9d953ffc90c2f4db8a444cc7ab3fb2a2d52f528c537131",
"0x20feba399407861d4f64a6b3a5d12e78ebd0c1673c662d08a37b36962c746108",
"0x5a0ac30225c5758c77b5e29262aff924620d5ee773f7079cecd0587204cafdce",
"0xf79672e7586ebb203d072d3a7b54ce15f0bb2449b925c6730a9f8f831a2bea40"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


