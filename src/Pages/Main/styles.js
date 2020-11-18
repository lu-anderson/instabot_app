import styled from 'styled-components'

import ButtonComponent from '../../Components/Button'

export const Container = styled.main`
	width: 100%;
`
export const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const MainLogContaier = styled.section`
	border-top: 1px solid #C42D65;
	display: grid;
	width: 100%;
	height: 100vh;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
`

export const Button = styled(ButtonComponent)``

export const WorkerLogContainer = styled.div`

`

export const WorkerLog = styled.fieldset`
	position: relative;
    height: 100%;
    width: 100%;
`
