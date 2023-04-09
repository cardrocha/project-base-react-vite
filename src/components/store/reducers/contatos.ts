import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Ana Vitória',
      telefone: '41 997725321',
      email: 'vitoria@ig.com.br'
    },
    {
      id: 2,
      nome: 'Bruna Silva',
      telefone: '11 992534111',
      email: 'bruhSilva@hotmail.com'
    },
    {
      id: 3,
      nome: 'Leandro Carlos',
      telefone: '21 3536978',
      email: 'leoCarlos@gmail.com'
    }
  ]
}

const contatosSclice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert("Já existe um contato com este nome")
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSclice.actions

export default contatosSclice.reducer
