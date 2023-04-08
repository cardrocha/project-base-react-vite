import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  border: 2px solid #123169;
  background-color: #19376D;
  color: #fff;
`

export const Legenda = styled.label`
  font-size: 20px;
`

export const Campo = styled.input`
  font-size: 18px;
  align-items: center;
  width: 50%;
  padding: 5px;
  background-color: #365ea3;
  border-radius: 5px;
  border: none;
  border-bottom: 3px solid #121f36;
`

export const Botao = styled.button`
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  background-color: #B8621B;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
`
