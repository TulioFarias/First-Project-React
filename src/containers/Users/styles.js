import styled from 'styled-components'
import Background from '../../assets/fundo2.svg'


 export const Container = styled.div `
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
  

`;


export const IMG = styled.img `
    margin-top: 30px;
`;


export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 342px;
    height: 58px;
    left: 36px;
    top: 193px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    outline:none;
    border: none;
    margin-top: 20px;

    p{
        color: white;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;

    }

    button{
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
    }


`


