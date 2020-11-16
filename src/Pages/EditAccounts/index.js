import React, { useState } from 'react'


import { Container, RowHead, Cell, Row, TableBody, ProxyConfig } from './styles'

import ProxyModal from './ProxyModal'

function EditAccounts() {
	const [showModal, setShowModal] = useState(true)
	const refProxyModal = React.createRef()

	window.onclick = function (event) {
		console.log(event.target)
		if (event.target === refProxyModal.current) {
			setShowModal(false)
		}
	}

	return (
		<Container>
			<ProxyModal ref={refProxyModal} visible={showModal}/>
			<TableBody>
				<RowHead>
					<Cell>Nº</Cell>
					<Cell>Nome de Usuário</Cell>
					<Cell>Senha</Cell>
					<Cell>Proxy</Cell>
				</RowHead>
				<Row>
					<Cell>1</Cell>
					<Cell>jessica@qualque</Cell>
					<Cell><input /></Cell>
					<Cell>
						<ProxyConfig onClick={() => setShowModal(true)}>
							Config. Proxy
						</ProxyConfig>
					</Cell>
				</Row>
				<Row>
					<Cell>2</Cell>
					<Cell>lucas1</Cell>
					<Cell><input /></Cell>
					<Cell>
						<ProxyConfig onClick={() => setShowModal(true)}>
							Config. Proxy
						</ProxyConfig>
					</Cell>
				</Row>
				<Row>
					<Cell>2</Cell>
					<Cell></Cell>
					<Cell><input /></Cell>
					<Cell>
						<ProxyConfig onClick={() => setShowModal(true)}>
							Config. Proxy
						</ProxyConfig>
					</Cell>
				</Row>
			</TableBody>
		</Container>
	)
}

export default EditAccounts
