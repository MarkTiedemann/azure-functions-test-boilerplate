const path = require('path')
const { spawn } = require('child_process')
const fetch = require('fetch-retry')

const host = spawn('func.cmd', ['host', 'start'], {
  detached: true,
  stdio: 'ignore',
  cwd: path.resolve('../..', __dirname)
})

checkHostUp()

function checkHostUp() {
  // See: https://github.com/Azure/azure-functions-cli/issues/185
  const statusRoute = 'http://localhost:7071/admin/host/status'
  const retryDelay = 300
  fetch(statusRoute, { retries: 100, retryDelay })
    .then(
      res =>
        res.status !== 200 ? Promise.reject(new Error(res.status)) : res.json()
    )
    .then(body => {
      if (body.state !== 'Running') {
        setTimeout(checkHostUp, retryDelay)
      } else {
        host.unref()
      }
    })
}
