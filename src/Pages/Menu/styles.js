import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const Container = styled.main`
	padding: 50px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 25px;
`

export const Button = styled.div`
	border: none;
	outline: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 200px;
	width: 200px;
	background-color: #2E4057;
	justify-items: center;
	align-items: center;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #FFF;
		box-shadow: 0 10px 20px rgba(231, 229, 230, 0.452);
		z-index: 10;
		color: rgb(0, 0, 0)
	}
`

export const Img = styled.img`
	width: 75px;
`

export const LinkComponent = styled(Link)`
	text-decoration: none;
`
