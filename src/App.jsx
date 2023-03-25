import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CenteredCard } from './components/CenteredCard/CenteredCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CenteredCard>
        <h1>
          Isso é o título.
        </h1>
      </CenteredCard>
      <CenteredCard>
        <h2>
          Isso é o segundo título.
        </h2>
      </CenteredCard>
      <CenteredCard>
        <h3>
          Isso é o terceiro título.
        </h3>
      </CenteredCard>
      <CenteredCard>
        <h4>
          Isso é o quarto título.
        </h4>
      </CenteredCard>
    </div>  
  )
}

export default App
