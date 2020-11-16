import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
	border: none;
	outline: none;
	cursor: pointer;
	width: 70px;
	height: 30px;
	background-color: ${({theme}) => theme.background};

	&:hover {
		border: none;
		z-index: 1;
		box-shadow: 0px 10px 15px 5px rgba(0,0,0,0.5);
		background-color: ${({theme}) => theme.hover};
	}

`

function Button(props){

	return <ButtonStyled {...props}>{props.children}</ButtonStyled>

}

export default Button
