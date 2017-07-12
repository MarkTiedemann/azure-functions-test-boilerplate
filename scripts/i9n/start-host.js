const path = require('path')
const { spawn } = require('child_process')
const fetch = require('fetch-retry')
const address = 'http://localhost:7071/'

const host = spawn('func.cmd', ['host', 'start'], {
  detached: true,
  stdio: 'ignore',
  cwd: path.resolve('..', __dirname)
})

// wait max. 5 seconds until host is up
fetch(address, { retries: 10, retryDelay: 500 }).then(() =>
  // then wait another 500 ms to give the host
  // some time to init the functions
  setTimeout(() => {
    host.unref()
  }, 500)
)
