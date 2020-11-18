import React, { useEffect } from 'react'
import styled from 'styled-components'


import {
	Background,
	Container,
	InputContainer,
	Label,
	Input,
	ButtonContainer,
	Button
} from './styles'

const ProxyModal = React.forwardRef((props, ref) => {


	return (

		<Background ref={ref} visible={props.visible}>
			<Container>
				<InputContainer>
					<Label>Host: </Label>
					<Input
						value={props.hostValue}
						onChange={(e) => props.onchange(e, 'host')}
					/>
					<Label>Porta: </Label>
					<Input value={props.portValue}
						onChange={(e) => props.onchange(e, 'port')}
					/>
				</InputContainer>

				<InputContainer>
					<Label>Login: </Label>
					<Input
						value={props.loginValue}
						onChange={(e) => props.onchange(e, 'username')} />
					<Label>Senha: </Label>
					<Input value={props.passwordValue} onChange={(e) => props.onchange(e, 'password')} />
				</InputContainer>
				<br/>
				<small>Se o login for por ip, não coloque nada em 'Login' e 'Senha'</small>
				<ButtonContainer>
					<Button>Fechar</Button>
				</ButtonContainer>
			</Container>
		</Background>
	)
})


export default ProxyModal
