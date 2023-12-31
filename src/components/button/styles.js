import styled from 'styled-components'

export const  Button = styled.button`

width: 342px;
height: 74px;
margin-top: 130px;
background: ${ props => props.IsBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)' };
border-radius: 14px;
border: ${ props => props.IsBack ? '1px solid white' : 'none'};
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 28px;
color: #FFFFFF;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;


&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}

img{
    transform: ${props => props.IsBack  && 'rotate(180deg)'};
} 
`;