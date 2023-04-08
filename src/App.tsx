import { Provider } from "react-redux"
import { ListaDeContatos } from "./components/ListaDeContatos"

import store from "./components/store"

function App() {
  return (
    <Provider store={store}>
      <ListaDeContatos />
    </Provider>
  )
}

export default App
