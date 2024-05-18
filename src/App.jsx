import { useState } from 'react'
import { Numbers } from './components/Numbers'
import { Results } from './components/Results'

function App() {
  const [numbersData, setNumbersData] = useState([])
  const [winners, setWinners] = useState('')
  return (
    <div className='app'>
      <Results
        numbersData={numbersData}
        winners={winners}
      />
      <Numbers
        numbersData={numbersData}
        setNumbersData={setNumbersData}
        winners={winners}
        setWinners={setWinners}
      />
    </div>
  )
}

export default App
