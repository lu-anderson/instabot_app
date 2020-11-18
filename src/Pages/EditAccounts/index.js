import React, { useEffect, useState } from 'react'

import { dizu } from '../../localforage'
import {
	Container,
	RowHead,
	Cell,
	Row,
	TableBody,
	ProxyConfig,
	Button,
	ButtonContainer,
	Input
} from './styles'

import ProxyModal from './ProxyModal'

function EditAccounts() {
	const [showModal, setShowModal] = useState(false)
	const refProxyModal = React.createRef()

	window.onclick = function (event) {
		if (event.target === refProxyModal.current) {
			setShowModal(false)
		}
	}

	const [profiles, setProfiles] = useState([])
	const [indexProxySeleted, setIndexProxySeleted] = useState(0)

	useEffect(() => {
		async function getItem() {
			const profiles = await dizu.getItem('profiles')
			setProfiles(profiles)
		}

		getItem()
	}, [])

	useEffect(() => {
		console.log(profiles)
	}, [profiles])
	useEffect(() => {
		console.log(indexProxySeleted)
		if(profiles[indexProxySeleted]){
			console.log(profiles[indexProxySeleted].proxy)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [indexProxySeleted])

	const handlePasswords = (e, index) => {
		const newProfiles = [...profiles]
		newProfiles[index].password = e.target.value
		setProfiles(newProfiles)
	}

	const handleProxy = (e, index, type) => {
		const newProfiles = [...profiles]
		newProfiles[index].proxy[type] = e.target.value
		setProfiles(newProfiles)
	}

	const save = () => {
		dizu.setItem('profiles', profiles)
	}

	const selectProxy = (index) => {
		setIndexProxySeleted(index)
		setShowModal(true)
	}

	return (
		<Container>
			<ProxyModal ref={refProxyModal} visible={showModal}
				onchange={(e, type) => handleProxy(e, indexProxySeleted, type)}
				hostValue={profiles[indexProxySeleted] ? profiles[indexProxySeleted].proxy.host : ''}
				portValue={profiles[indexProxySeleted] ? profiles[indexProxySeleted].proxy.port : ''}
				loginValue={profiles[indexProxySeleted] ? profiles[indexProxySeleted].proxy.username : ''}
				passwordValue={profiles[indexProxySeleted] ? profiles[indexProxySeleted].proxy.password : ''}
			/>
			<TableBody>
				<RowHead>
					<Cell>Nº</Cell>
					<Cell>Nome de Usuário</Cell>
					<Cell>Senha</Cell>
					<Cell>Proxy</Cell>
				</RowHead>
				{profiles.sort().map((profile, index) => (
					<Row key={profile.user}>
						<Cell>{index + 1}</Cell>
						<Cell>{profile.user}</Cell>
						<Cell >
							<Input value={profile.password ? profile.password : ''}
								onChange={(e) => handlePasswords(e, index)}
							/>

						</Cell>
						<Cell>
							<ProxyConfig onClick={() => selectProxy(index)}>
								Config. Proxy
						</ProxyConfig>
						</Cell>
					</Row>
				))}
			</TableBody>
			<ButtonContainer>
				<Button onClick={save}>Salvar</Button>
			</ButtonContainer>
		</Container>
	)
}

export default EditAccounts
