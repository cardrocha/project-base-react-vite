import { useSelector } from "react-redux"
import { CadastroContato } from "../Cadastro"
import { CardContato } from "../CardContato"
import { Container, Titulo } from "./style"
import { RootReducer } from "../store"

export const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <Container>
      <Titulo>Lista de Contatos</Titulo>
      <CadastroContato />
      {/* <CardContato /> */}
      <ul>
        {itens.map((c) => (
          <li key={c.nome}><CardContato
            nome={c.nome}
            telefone={c.telefone}
            email={c.email}
            id={c.id} />
          </li>
        ))}
      </ul>
    </Container>
  )
}

