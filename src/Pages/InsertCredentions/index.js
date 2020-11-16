import React, { useRef } from 'react'

const { remote } = window.require('electron')
const getInfoDizu = remote.require('../backend/getInfoDizu.js')
//C:\Users\lu-an\Desktop\Programming\instabot\backend\getInfoDizu.js
//const getInfoDizu = remote.require('./backend/getInfoDizu.js')

function InsertCredentions(){
	const ref = useRef(null)



	const writeStdout = data => {
		ref.current.innerHTML += "<pre>"+data+"</pre>"
	}

	const outro = data => {
		ref.current.innerHTML += "<div>"+data+"</div>"
	}

	const start = () => {
		console.log('start')
		getInfoDizu(writeStdout, writeStdout, 'lu-anderson1@hotmail.com', 'Cfx2j45152020', false, outro)

	}

	return (
		<>
			<button onClick={start}>Start</button>
			<div ref={ref}></div>

		</>
	)
}

export default InsertCredentions
