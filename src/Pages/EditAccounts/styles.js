import styled from 'styled-components'

import ButtonComponent from '../../Components/Button'

export const Container = styled.main`
	display: flex;
	height: 100vh;
	flex-direction: column;
	align-items: center;
	padding: 50px;
`
export const TableBody = styled.div`
`
export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	`
export const RowHead = styled(Row)`
	font-weight: bold;
`
export const Cell = styled.div`
	width: 100%;
	padding: 5px;
	overflow: hidden; //Trocar por scroll
	text-align: center;
	border-right: 1px solid;
`
export const ProxyConfig = styled(ButtonComponent)`
	width: 100%;

`
