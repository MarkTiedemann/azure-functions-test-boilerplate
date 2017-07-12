const test = require('ava')
const fetch = require('fetch-retry')

const call = func =>
  fetch('http://localhost:7071/api/' + func).then(res => res.json())

module.exports = {
  test,
  call
}
