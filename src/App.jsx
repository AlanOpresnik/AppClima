import AppClima from './components/appClima'
import { ClimaProvider } from './context/climaProvider'

function App() {
  return (
    <ClimaProvider>
    <header>
      <h1>Buscar Clima</h1>
    </header>
     <AppClima/>
     </ClimaProvider>
  )
}

export default App
