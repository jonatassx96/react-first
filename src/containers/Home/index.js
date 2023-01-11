import React, { useState, useRef } from "react";
import People from "../../assets/user-inicio.svg";
import axios from "axios";
import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  ButtonUsers,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  // REACT HOOKS => FERRAMENTAS AUXILIARES
  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    setUsers([newUser, ...users]);
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

        <Button onClick={addNewUser}>Cadastrar</Button>

        <ButtonUsers to="/usuarios">Usuarios</ButtonUsers>
      </ContainerItens>
    </Container>
  );
}

export default App;
