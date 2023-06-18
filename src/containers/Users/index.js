import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import { Container, User, IMG } from './styles'

import Foto2 from '../../assets/foto2.svg'
import Seta1 from '../../assets/seta.svg'
import Trash from '../../assets/lixeira.svg'
import H1 from '../../components/Title'
import ContainerItens from '../../components/containerItens'
import Button from '../../components/button'


const Users = () => {

  const [users, setUsers] = useState([]);

  const navigate = useNavigate()
  


  useEffect(() => {

    async function fetchUsers() {

      const { data: newUsers } = await axios.get('http://localhost:3001/users');

      setUsers(newUsers);
    }

    fetchUsers()
  }, [])



   async function deleteUser(userId) {
  
    await axios.delete(`http://localhost:3001/users/${userId}`)


    const newUsers = users.filter(user => user.id !== userId);



    setUsers(newUsers);

  }

  function goBackPage(){

    navigate("/")
  }


  return (<Container >

    <IMG alt='people-img' src={Foto2}></IMG>
    <ContainerItens isBlur={true}>
      <H1>Usúarios</H1>


      <ul>
        {users.map(user => (
          <User key={user.id}>

            <p>{user.name}</p>
            <p>{user.age}</p>

            <button onClick={() => deleteUser(user.id)}> <img src={Trash} alt='lixeira' /></button>

          </User>

        ))}

      </ul>

      <Button  IsBack={true} onClick={goBackPage}> <img alt="seta" src={Seta1} /> Voltar</Button>

    </ContainerItens>

  </Container>
  )
}

export default Users;