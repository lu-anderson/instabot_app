import styled from 'styled-components'

import ButtonComponent from '../../Components/Button'

export const Container = styled.main`
	margin: auto;
	width: 80%;
`
export const Section = styled.section`
	padding: 15px;
	background-color: #2E4057;
	margin: 5px;
	border-radius: 10px;
`

export const ResponseContainer = styled.div`
	display: flex;
	justify-content: center;
`

export const Button = styled.div`
	padding: 5px;
	width: 75px;
	text-align: center;
	margin: 5px;
	border: 2px solid  #C42D65;
	border-radius: 5px;
	cursor: pointer;

	background-color: ${({active}) => active ?  '#C42D65' : ''};

	&:hover {
		background-color:  #C42D65;
	}
`

export const ButtonSave = styled(ButtonComponent)``
