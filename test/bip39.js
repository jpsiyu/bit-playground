const bitcoin = require('bitcoinjs-lib')
const bip32 = require('bip32')
const bip39 = require('bip39')
const chai = require('chai')
const assert = chai.assert
const consola = require('consola')

describe('bip39 relative', () => {
  it('just watch below', () => {
    let mnemonic = bip39.generateMnemonic()
    consola.info(mnemonic)
    consola.info(Object.keys(bip39.wordlists))
    const rng = () => { 
      return Buffer.from('7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f', 'hex')
    }
    //mnemonic = bip39.generateMnemonic(24, rng, bip39.wordlists.EN)
    mnemonic = bip39.generateMnemonic(undefined)
    consola.info(mnemonic)
  })
})