import { FormEvent, useState } from "react"
import { Botao, Campo, Form, Legenda } from "./styled"
import { useDispatch } from "react-redux"
import { cadastrar } from "../store/reducers/contatos"

export const CadastroContato = () => {
  const [exibirContato, setExibirContato] = useState(false)
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')


  const exibirCadastrarContato = () => {
    setExibirContato(!exibirContato);
  }

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        telefone,
        email
    }))
  }

  return (
    <>
      <Botao onClick={exibirCadastrarContato}>
        {exibirContato ? 'Esconder Contato -' : 'Cadastrar Contato +'}
      </Botao>
      {exibirContato && (
        <Form onSubmit={cadastrarContato}>
          <Legenda htmlFor="nome">Nome:</Legenda>
          <Campo
            value={nome}
            onChange={evento => setNome(evento.target.value)}
            type="text"
            id="nome"
            />
          <Legenda htmlFor="email">E-mail:</Legenda>
          <Campo
            value={email}
            onChange={evento => setEmail(evento.target.value)}
            type="email"
            id="email"
            />
          <Legenda htmlFor="telefone">Telefone:</Legenda>
          <Campo
            value={telefone}
            onChange={evento => setTelefone(evento.target.value)}
            type="tel"
            id="telefone"
            />
          <Botao type="submit">Adicionar Contato</Botao>
        </Form>
      )}
    </>
  )
}

