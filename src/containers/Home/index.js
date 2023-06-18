import React, { useState, useRef, } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

import { Container, Input,IMG, InputLabel } from './styles'

import Foto1 from '../../assets/foto1.svg';
import Seta1 from '../../assets/seta.svg';
import H1 from '../../components/Title';
import ContainerItens from '../../components/containerItens';
import Button from '../../components/button';


const App = () => {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", { name: inputName.current.value, age: inputAge.current.value, });

    setUsers([...users, newUser]);

    navigate("/usuarios")

  }

  return (<Container >

    <IMG alt='people-img' src={Foto1}></IMG>
    <ContainerItens>
      <H1>Sistema de Cadastro</H1>

      <InputLabel>Nome:</InputLabel>
      <Input ref={inputName} placeholder="Nome"></Input>

      <InputLabel>Idade:</InputLabel>
      <Input ref={inputAge} placeholder="Idade"></Input>

      <Button  onClick={addNewUser}>Cadastrar <img alt="seta" src={Seta1} /></Button>



    </ContainerItens>

  </Container>
  )
}

export default App