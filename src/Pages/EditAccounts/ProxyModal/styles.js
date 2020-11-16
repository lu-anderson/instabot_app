import styled from 'styled-components'

export const Background = styled.div`
	display: ${({visible}) => visible ? 'blokc': 'none'};
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
	display: grid;
	grid-template-columns: 1fr 1fr;
	background-color: ${({theme}) => theme.body};
	margin: auto;
	padding: 20px;
	border: 1px solid #888;
	border-radius: 10px;
	width: 50%;

	@media (max-width: 970px) {
		grid-template-columns: 1fr;
	}
`
//export const S

export const InputContainer = styled.div`
	display: flex;
`
export const Label = styled.label`
	flex: 1;
`
export const Input = styled.input`
	flex: 5;
	margin-right: 10px;
	border: none;
	outline: none;
	border-bottom: 1px solid ${({theme}) => theme.text};
	color: ${({theme}) => theme.text};
	background-color: ${({theme}) => theme.body};
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
