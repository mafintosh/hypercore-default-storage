const RAF = require('random-access-file')

let lock = null

try {
  lock = require('fd-lock')
} catch (_) {}

module.exports = defaultStorage

function defaultStorage (name, opts) {
  if (!isBitfield(name)) return new RAF(name, opts)
  return new RAF(name, { lock, ...opts })
}

function isBitfield (name) {
  return name === 'bitfield' || name.endsWith('/bitfield')
}
