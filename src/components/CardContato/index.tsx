import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Botao2, BotaoAcao, BotaoCancelarExcluir, BotaoSalvar, Content } from "./style";

import { remover, editar } from "../store/reducers/contatos";
import Contato from "../../models/Contato";

type Props = Contato

export const CardContato = ({
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  function cancelarEdicao(e: any) {
    e.preventDefault()
    setEstaEditando(false)
    setNome(nomeOriginal)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }

  return (
    <Content>
      <h3>
        Informações do Contato:{estaEditando && <em> Editar Contato</em>}
      </h3>
      <input type="text" placeholder="Nome" value={nome} onChange={evento => setNome(evento.target.value)} disabled={!estaEditando} />
      <input type="tel" placeholder="Telefone" value={telefone} onChange={evento => setTelefone(evento.target.value)} disabled={!estaEditando} />
      <input type="email" placeholder="E-mail" value={email} onChange={evento => setEmail(evento.target.value)} disabled={!estaEditando} />
      <BotaoAcao>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={() => {
              dispatch(editar({
                nome,
                telefone,
                email,
                id
              })
            )
            setEstaEditando(false)
          }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelarExcluir onClick={cancelarEdicao}>Cancelar</BotaoCancelarExcluir>
          </>
        ) : (
          <>
            <Botao2 onClick={() => setEstaEditando(true)}>Editar</Botao2>
            <BotaoCancelarExcluir onClick={() => dispatch(remover(id))}>Excluir</BotaoCancelarExcluir>
          </>
        )}
      </BotaoAcao>
    </Content>
  )
}

