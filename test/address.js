const bitcoin = require('bitcoinjs-lib')
const chai = require('chai')
const assert = chai.assert
const consola = require('consola')

describe('create random address', () => {
  it('p2pkh address', () => {
    const keyPair = bitcoin.ECPair.makeRandom()
    const privateKey = keyPair.toWIF()
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey })
    /*
    console.table({
      privkey: privateKey,
      address: address
    })
    */
    assert.equal(address.substring(0, 1), "1")
  })
  it('p2pkh address from wif', () => {
    const keyPair = bitcoin.ECPair.fromWIF('KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sVHnoWn')
    const privateKey = keyPair.toWIF()
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey })
    /*
    console.table({
      privkey: privateKey,
      address: address
    })
    */
    assert.equal(address.substring(0, 1), "1")
  })
  it('can generate a P2SH, pay-to-multisig (2-of-3) address', () => {

    const pubkeys = [
      '026477115981fe981a6918a6297d9803c4dc04f328f22041bedff886bbc2962e01',
      '02c96db2302d19b43d4c69368babace7854cc84eb9e061cde51cfa77ca4a22b8b9',
      '03c6103b3b83e4a24a0e33a4df246ef11772f9992663db0c35759a5e2ebf68d8e9',
    ].map(hex => Buffer.from(hex, 'hex'))
    const { address } = bitcoin.payments.p2sh({
      redeem: bitcoin.payments.p2ms({ m: 2, pubkeys }),
    })

    assert.equal(address, '36NUkt6FWUi3LAWBqWRdDmdTWbt91Yvfu7')
  })
  it('segwit address', () => {
    const keyPair = bitcoin.ECPair.fromWIF('KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sVHnoWn')
    const { address } = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey })
    assert.strictEqual(address, 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4')
  })
  it('segwit address via p2sh', () => {
    const keyPair = bitcoin.ECPair.fromWIF('KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sVHnoWn')
    const { address } = bitcoin.payments.p2sh({
      redeem: bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey })
    })

    assert.strictEqual(address, '3JvL6Ymt8MVWiCNHC7oWU6nLeHNJKLZGLN')
  })
})