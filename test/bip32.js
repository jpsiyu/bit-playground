const bitcoin = require('bitcoinjs-lib')
const bip32 = require('bip32')
const bip39 = require('bip39')
const chai = require('chai')
const assert = chai.assert
const consola = require('consola')

function getAddress(node) {
  return bitcoin.payments.p2pkh({ pubkey: node.publicKey }).address
}

describe('bip32 relative', () => {
  it('mnemonic to node, export private key, then import it', () => {
    const mnemonic = 'praise you muffin lion enable neck grocery crumble super myself license ghost'
    const seed = bip39.mnemonicToSeedSync(mnemonic)
    const node = bip32.fromSeed(seed)
    const xprv = node.toBase58()
    console.table({
      wif: node.toWIF(),
      xprv: xprv,
      address: getAddress(node)
    })
    const restored = bip32.fromBase58(xprv)
    assert.strictEqual(getAddress(node), getAddress(restored))
    assert.strictEqual(node.toWIF(), restored.toWIF())
  })
  it('bip44', () => {
    const seed = Buffer.from('dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', 'hex')
    const root = bip32.fromSeed(seed)
    const child = root.derivePath("m/44'/0'/0'/0/0")
    console.table({
      'index': child.index,
      'path': child.depth,
      'chaincode': child.chainCode.toString('hex'),
      'privateKey': child.privateKey.toString('hex'),
      'publicKey': child.publicKey.toString('hex'),
      'wif': child.toWIF(),
      'address': getAddress(child)
    })
  })
})