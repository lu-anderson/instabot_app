import React from 'react'


import {
	Container,
	Section,
	Button,
	MainLogContaier,
	WorkerLogContainer,
	WorkerLog

} from './styles'

function Main() {


	return (
		<Container>
			<Section class="headerBtns">
				<fieldset>
					<legend>Informações do bot | </legend>
					<div>
						<div>
							<span>Número de contas rodando: </span>
							<span>Número de ações por conta: </span>
							<span></span>
						</div>
						<div>
							<span>Exibir navegador: não</span>
							<span>Alerta sonoro: não</span>
							<span>Desligar computador : sim</span>
						</div>
					</div>
				</fieldset>
				<div>
					<div>
						<Button>Iniciar</Button>
						<Button>Home</Button>
						<Button>Parar</Button>
						<Button>Limpar Logs</Button>
						<Button>Configurações</Button>
					</div>
				</div>
			</Section>
			<MainLogContaier>
				<WorkerLogContainer>
					<WorkerLog>
						Container 01
					</WorkerLog>
				</WorkerLogContainer>
				<WorkerLogContainer>
					<WorkerLog>
						Container 02
					</WorkerLog>
				</WorkerLogContainer>
				<WorkerLogContainer>
					<WorkerLog>
						Container 03
					</WorkerLog>
				</WorkerLogContainer>
				<WorkerLogContainer>
					<WorkerLog>
						Container 04
					</WorkerLog>
				</WorkerLogContainer>
			</MainLogContaier>
		</Container>
	)
}

export default Main
