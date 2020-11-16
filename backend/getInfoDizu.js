const path = require('path')
const child_process = require('child_process')

function runWorker(writeStdout, writeStderr, login, password, headless, fim) {

	let worker = child_process.fork(path.join(__dirname, '..', '..', 'workDizuType', 'build', 'src', 'dizuProcess.js'), [], {
		stdio: ['pipe', 'pipe', 'pipe', 'ipc']
	})

	worker.stdout.on('data', (data) => writeStdout(data.toString()))

	worker.stderr.on('data', (data) => writeStderr(data.toString()))

	worker.send({ start: 'accounts', userPlataform: login, passwordPlataform: password, headless })

	worker.on('message', async (msg) => {
		if (msg.sucess) {
			fim(msg.data)
		}
	})
}

module.exports = runWorker
