import React from 'react'

import { Container, RowHead, Cell, Row, TableBody, ProxyConfig } from './styles'

import ProxyModal from './ProxyModal'

function EditAccounts() {
	const showProxyModal = () => {

	}

	return (
		<Container>
			<TableBody>
				<RowHead>
					<Cell>Nº</Cell>a
					<Cell>Nome de Usuário</Cell>
					<Cell>Senha</Cell>
					<Cell>Proxy</Cell>
				</RowHead>
				<Row>
					<Cell>1</Cell>
					<Cell>jessica@qualque</Cell>
					<Cell><input /></Cell>
					<ProxyConfig onClick={showProxyModal}>Config. Proxy</ProxyConfig>
				</Row>
				<Row>
					<Cell>2</Cell>
					<Cell>lucas1</Cell>
					<Cell><input /></Cell>
					<ProxyConfig>Config. Proxy</ProxyConfig>
				</Row>
				<Row>
					<Cell>2</Cell>
					<Cell></Cell>
					<Cell><input /></Cell>
					<ProxyConfig>Config. Proxy</ProxyConfig>
				</Row>
			</TableBody>
		</Container>
	)
}

export default EditAccounts
