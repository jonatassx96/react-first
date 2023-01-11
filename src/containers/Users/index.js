import React, { useState, useEffect } from "react";
import Profile from "../../assets/user-profile.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";
import axios from "axios";
import {
  Container,
  Image,
  ContainerItens,
  H1,
  Button,
  User,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);


  // React HOOK => useEffect (efeito colateral) OBS: useEffect não aceita async.
  useEffect(() => {
    async function fethUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
    fethUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="Logo-imagem" src={Profile} />
      <ContainerItens>
        <H1>Usuarios!</H1>

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

        <Button to="/">
          <img alt="Seta para direita" src={Arrow} />
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;
