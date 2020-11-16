import styled from 'styled-components'

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
	border: 1px solid red;
	overflow: hidden; //Trocar por scroll
	text-align: center;
`
export const ProxyConfig = styled(Cell)`
	cursor: pointer;

	&:hover {
		border: none;
		z-index: 1;
		box-shadow: 0px 10px 15px 5px rgba(0,0,0,0.79)
	}
`
