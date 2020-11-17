import React from 'react'


import Modal from './index'
import Button from '../../../Components/Button'
import {
	Background,
	Container,
	InputContainer,
	Label,
	Input
} from './styles'

const ProxyPerso = (refProxyModal, showModal) => {

	return (
		<Modal ref={refProxyModal} visible={showModal}>
			<Container>
				<InputContainer>
					<Label>Host:</Label>
					<Input />
				</InputContainer>

				<InputContainer>
					<Label>Porta: </Label>
					<Input />
				</InputContainer>

				<InputContainer>
					<Label>Login: </Label>
					<Input />
				</InputContainer>

				<InputContainer>
					<Label>Senha: </Label>
					<Input />
				</InputContainer>
				<p>Se o login for por ip, não coloque nada em 'Login' e 'Senha'</p>
				<Button>Salvar</Button>
			</Container>
		</Modal>
	)
}

export default ProxyPerso
