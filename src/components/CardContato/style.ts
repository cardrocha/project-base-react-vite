import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Content = styled.form`
  background-color: #365ea3;
  color: #000;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin-bottom: 40px;

  h3 {
    background-color: #192c4d;
    border: 3px solid #172845;
    color: #fff;
    margin-left: -20px;
    margin-right: -20px;
    margin-top: -20px;
  }

  input {
    background-color: #365ea3;
    font-size: 24px;
    font-weight: bold;
    color: #000;
    border: none;
    align-self: center;
    width: 80%;

    ::placeholder {
      color: #fff;
      text-align: center;
    }
  }

  span {
    font-size: 24px;
    font-weight: 700;
  }
`
export const BotaoAcao = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

export const Botao2 = styled.button`
  background-color: #1c3d99;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  padding: 5px 20px;
  cursor: pointer;
  transition: all ease .2s;

  &:hover {
    background-color: #284699;
  }
`

export const BotaoSalvar = styled(Botao2)`
  background-color: ${variaveis.verde};

  &:hover {
    background-color: ${variaveis.verdeHover};
  }
`

export const BotaoCancelarExcluir = styled(Botao2)`
  background-color: ${variaveis.vermeho};

  &:hover {
    background-color: ${variaveis.vermelhoHover};
  }
`
