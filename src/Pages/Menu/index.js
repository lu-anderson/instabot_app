import React from 'react'

//import imgAnalise from '../../assets/img/anilise.png'
import imgEdit from '../../assets/img/edit.png'
import imgUpdate from '../../assets/img/update.png'

import {
	Container,
	LinkComponent,
	Button,
	Img

} from './styles'

function Menu() {


	return (
		<Container>
			<LinkComponent to='/edit_accounts'>
				<Button>
					<Img width="75px" src={imgEdit} />
					Editar contas
				</Button>
			</LinkComponent>
			<LinkComponent to='/get_profiles'>
				<Button>
					<Img src={imgUpdate}/>
					Atualizar contas
				</Button>
			</LinkComponent>
			<LinkComponent to='/main'>
				<Button>Main</Button>
			</LinkComponent>
			<LinkComponent to='/configs'>
				<Button>Configurações</Button>
			</LinkComponent>
		</Container>
	)
}

export default Menu
