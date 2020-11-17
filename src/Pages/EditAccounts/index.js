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
	const [indexProxySeleted, setIndexProxySeleted] = useState(null)

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

	const handlePasswords = (e, index) => {
		const newProfiles = [...profiles]
		newProfiles[index].password = e.target.value
		setProfiles(newProfiles)
	}
	const handleLoginProxy = (e, index) => {
		const newProfiles = [...profiles]
		newProfiles[index].proxy.username = e.target.value
		setProfiles(newProfiles)
	}
	const handlePasswordProxy = (e, index) => {
		const newProfiles = [...profiles]
		newProfiles[index].proxy.password = e.target.value
		setProfiles(newProfiles)
	}
	const handleHostProxy = (e, index) => {
		const newProfiles = [...profiles]
		newProfiles[index].proxy.host = e.target.value
		setProfiles(newProfiles)
	}
	const handlePortProxy = (e, index) => {
		const newProfiles = [...profiles]
		newProfiles[index].proxy.port = e.target.value
		setProfiles(newProfiles)
	}

	const save = () => {
		dizu.setItem('profiles', profiles)
	}

	return (
		<Container>
			<ProxyModal ref={refProxyModal} visible={showModal}
				onHost={(e) => handleHostProxy(e, indexProxySeleted)}
				hostValue={(indexProxySeleted !== null) ? profiles[indexProxySeleted].proxy.host : '' }
				/*onPort={}
				portValue={}
				onLogin={}
				loginValue={}
				onPassword={}
				passwordValue={} */
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
							<ProxyConfig onClick={() => {setShowModal(true); setIndexProxySeleted(index)}}>
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
