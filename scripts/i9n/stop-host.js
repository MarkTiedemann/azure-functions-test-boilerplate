const { execSync } = require('child_process')

execSync('taskkill /fi "imagename eq func.exe" /f')
