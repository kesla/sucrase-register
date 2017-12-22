'use strict'

const fs = require('fs')
const { transform } = require('sucrase')
const requireHacker = require('require-hacker')

module.exports = opts =>
  requireHacker.hook('jsx', filename => {
    const code = fs.readFileSync(filename, 'utf8')
    const transformed = transform(code, opts)

    return transformed
  })
