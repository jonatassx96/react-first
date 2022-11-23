import React from "react";
import People from "./assets/user-inicio.svg";
import Arrow from "./assets/arrow.svg";
import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  const users = [
    { id: Math.random(), name: "Maria", age: 33 },
    { id: Math.random(), name: "Jonatas", age: 26 },
  ];

  return (
    <Container>
      <Image alt="Logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"></Input>

        <Button>
          Cadastrar
          <img alt="Seta para direita" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <li>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
