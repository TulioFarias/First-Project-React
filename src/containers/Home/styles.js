import styled from 'styled-components'

import Background from '../../assets/fundo1.svg'

 export const Container = styled.div `
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
  

`;


export const IMG = styled.img `
    margin-top: 30px;
`;




export const InputLabel = styled.label`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    margin-left: 25px;

`;

export const Input = styled.input`
    width: 342px;
    height: 58px;
    left: 36px;
    top: 193px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    outline:none;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    width: 342px;
    height: 58px;
    padding-left: 25px;
    color: white;
    margin-bottom: 34px;



`;






