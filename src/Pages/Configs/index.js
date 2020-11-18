import React, { useEffect, useState } from 'react'

import { Container, Section, ResponseContainer, Button, ButtonSave } from './styles'


function Configs() {
	const [configs, setConfigs] = useState({
		numberOfWorkers: undefined,
		numberOfActions: undefined,
		maxTimeRandom: undefined,
		headless: undefined,
		alertON: undefined,
		shutdownPC: undefined
	})
	const [btnsNumberWorkers, setBtnNumberWorkers] = useState([])
	const optionBoolean = [true, false]

	useEffect(() => {
		let newBtnsNumberWorkers = []
		for (let i = 0; i < 10; i++) {
			newBtnsNumberWorkers.push(i)
		}

		setBtnNumberWorkers(newBtnsNumberWorkers)
	}, [])

	useEffect(() => {
		console.log(configs)
	}, [configs])


	const selectConfig = (config, value) => {
		setConfigs({ ...configs, [config]: value })
	}

	return (
		<Container>
			<h3>Configurar bot</h3>
			<Section id="numberOfWorkers">
				<span>Rodar bot com quantas contas ao mesmo tempo?</span>
				<hr noshade="true" />
				<ResponseContainer>
					{
						btnsNumberWorkers.map((button) => (
							<Button key={button}
								onClick={() => selectConfig('numberOfWorkers', button)}
								active={configs.numberOfWorkers === button ? true : false}
							>
								{button + 1}
							</Button>
						))
					}
				</ResponseContainer>
			</Section>
			<Section>
				<span>
					Quantas ações cada conta irá fazer? (Recomendamos 30 ações no máximo por hora e 100 por dia)
					</span>
				<hr noshade="true" />
				<ResponseContainer>
					<input type="number" />
				</ResponseContainer>
			</Section>
			<Section id="random">
				<span>
					Selecione um tempo de espera entre as ações (Esse tempo é aletório, por exemplos se colocar 30s
					o tempo entre cada ação pode ser váriavel entre 0s e 30s)
					</span>
				<hr noshade="true" />
				<ResponseContainer>
					<div>
						<label htmlFor="minTime">Tempo minímo</label><br />
						<input type="number" id="minTime " />
					</div>
					<div>
						<label htmlFor="maxTime">Tempo máximo</label><br />
						<input type="number" name="maxTime " />
					</div>
				</ResponseContainer>
			</Section>
			<Section id="headless">
				<span>
					Deseja que o navegador seja aberto?
				</span>
				<hr noshade="true" />
				<ResponseContainer>
					{
						optionBoolean.map(option => (
							<Button key={option}
								onClick={() => selectConfig('headless', !option)}
								active={(configs.headless === !option) ? true : false}
							>
								{option ? 'Sim' : 'Não'}
							</Button>
						))
					}
				</ResponseContainer>
			</Section>
			<Section>
				<span>
					Emitir alerta sonoro ao terminas as ações?
				</span>
				<hr noshade="true" />
				<ResponseContainer>
					{
						optionBoolean.map(option => (
							<Button key={option}
								onClick={() => selectConfig('alertON', option)}
								active={(configs.alertON === option) ? true : false}
							>
								{option ? 'Sim' : 'Não'}
							</Button>
						))
					}
				</ResponseContainer>
			</Section>
			<Section>
				<span>
					Desligar o computador ao terminar as ações?
				</span>
				<hr noshade="true" />
				<ResponseContainer>
					{
						optionBoolean.map(option => (
							<Button key={option}
								onClick={() => selectConfig('shutdownPC', option)}
								active={(configs.shutdownPC === option) ? true : false}
							>
								{option ? 'Sim' : 'Não'}
							</Button>
						))
					}
				</ResponseContainer>
			</Section>
			<ButtonSave>Salvar</ButtonSave>
			{/* <div>Salvo com sucesso!</div> */}
		</Container>

	)
}

export default Configs
