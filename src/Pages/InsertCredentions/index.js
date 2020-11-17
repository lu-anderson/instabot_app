import React, { useRef } from 'react'

const { remote } = window.require('electron')
const {dizu} = require('../../localforage.js')
const getInfoDizu = remote.require('../backend/getInfoDizu.js')

function InsertCredentions(){
	const ref = useRef(null)



	const writeStdout = data => {
		ref.current.innerHTML += "<pre>"+data+"</pre>"
	}


	const start = async () => {
		console.log('start')
		const data = await getInfoDizu(writeStdout, writeStdout, 'lu-anderson1@hotmail.com', 'Cfx2j45152020', false)
		const profiles = data.map(profile => (
			{user: profile, password: undefined, proxy: {}}
		))
		await dizu.setItem('profiles', profiles)

	}

	return (
		<>
			<button onClick={start}>Start</button>
			<div ref={ref}></div>

		</>
	)
}

export default InsertCredentions
