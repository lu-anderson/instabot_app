import styled from 'styled-components'

import ButtonComponent from '../../../Components/Button'


export const Background = styled.div`
	display: ${({ visible }) => visible ? 'blokc' : 'none'};
	position: fixed;
	z-index: 2;
	padding-top: 100px;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0,0.7);

`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.body};
	margin: auto;
	padding: 20px;
	border: 1px solid #888;
	border-radius: 10px;
	width: 50%;
`
//export const S

export const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
	@media (max-width: 970px) {
		grid-template-columns: 1fr;
	}
`
export const Label = styled.label`
	flex: 1;
`
export const Input = styled.input`
	flex: 5;
	margin-right: 10px;
	border: none;
	outline: none;
	border-bottom: 1px solid ${({ theme }) => theme.text};
	color: ${({ theme }) => theme.text};
	background-color: ${({ theme }) => theme.body};
`

export const ButtonContainer = styled.div`
	display: flex;
	flex: 1;
	margin-top: 15px;
	justify-content: flex-end;
`
export const Button = styled(ButtonComponent)`

`




/*   .close {
	color: #aaaaaa;
	float: right;
	font-size: 28px;
	font-weight: bold;
  }

  .close:hover,
  .close:focus {
	color: #000;
	text-decoration: none;
	cursor: pointer;
  } */
