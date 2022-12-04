import React, { useState, useRef } from "react";
import People from "./assets/user-inicio.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";
import axios from 'axios';
import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  // REACT HOOKS => FERRAMENTAS AUXILIARES
  async function addNewUser() {
    const data = await axios.post()

    // setUsers([
    //   {
    //     id: Math.random(),
    //     name: inputName.current.value,
    //     age: inputAge.current.value,
    //   },
    //   ...users,
    // ]);
  }

  function deleteUser(userId) {
    const newUsers = users.filter( user => user.id !== userId )
    setUsers(newUsers)
  }

  return (
    <Container>
      <Image alt="Logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <div>
          <InputLabel>Nome</InputLabel>
          <Input ref={inputName} placeholder="Nome"></Input>
        </div>

        <div>
          <InputLabel>Idade</InputLabel>
          <Input ref={inputAge} placeholder="Idade"></Input>
        </div>

        <Button onClick={addNewUser}>
          Cadastrar
          <img alt="Seta para direita" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="Lixeira" src={Trash} />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
