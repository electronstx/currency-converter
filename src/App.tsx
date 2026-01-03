import './App.css'
import { Converter } from './components/Converter/Converter'
import { CurrencyStoreProvider } from './store/CurrencyStoreContext'

function App() {

  return (
    <CurrencyStoreProvider>
      <div className="App">
        <Converter />
      </div>
    </CurrencyStoreProvider>
  )
}

export default App
