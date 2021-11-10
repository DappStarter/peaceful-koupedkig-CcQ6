require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember hospital install lobster flip subject'; 
let testAccounts = [
"0x7b5cf430f0ac2f611e9a9e45174505f8aebfab9ad9834337e6373a67be385f4f",
"0x64432b9f48c57ce1e86a59f77fc3bd4680df849ffea2730275376867e083d1d3",
"0xb7387a1e0a57b7ac81e712328331976d3f6ea6407b5c48eda6e38a6024e70825",
"0x0009f795b2099f8073f6fd9211e425d0af2c7c4334baa1981dcb5dedae89215e",
"0x36bbee793f864b1a3bc728230a6f67331a1528b6e7abcbb919aa3cefdd676f2a",
"0xe48fff382ac383c7c05849c228f35753dc84d859f9a7d2d31e40dd7635746105",
"0x3b9b5751963c34916c9736815785f33b4c2b55ada4f955989c7526ec80f4484d",
"0xd0d4f812ccb2aa939a92fdcb8e59ffbac3fce13efd46a338403bde0993e2a411",
"0x6364c24980c208dadb4fa9e7016799251622e6605f1b754f27a271789620a498",
"0xfd90db541283884dc72a71f990a89b61a4a45a5b5a49909be1a63c6273a8d853"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

