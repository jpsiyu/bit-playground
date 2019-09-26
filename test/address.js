const bitcoin = require('bitcoinjs-lib')
const chai = require('chai')
const assert = chai.assert
const consola = require('consola')

describe('create random address', () => {
  it('p2pkh address', () => {
    const keyPair = bitcoin.ECPair.makeRandom()
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey })
    consola.info(address)
    assert.equal(address.substring(0, 1), "1")
  })
})