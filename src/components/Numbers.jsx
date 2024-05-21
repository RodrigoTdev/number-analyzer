import React from 'react'
import { useState } from 'react'

export const Numbers = ({
  numbersData,
  setNumbersData,
  winners,
  setWinners,
}) => {
  const [rawNumbers, setRawNumbers] = useState('')

  let winnersArray = []
  winnersArray = winners.split('; ')
  winnersArray.pop()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target[0].value.length > 0) {
      const filteredNumbers = rawNumbers?.replace(
        /\[\d{2}:\d{2}, \d{1,2}\/\d{1,2}\/\d{4}\] Agencia: /g,
        ''
      )
      const filteredDigits = filteredNumbers?.match(/\d{4}/g) // Match every sequence of 4 digits
      const numbers = filteredDigits?.join('; ')
      const numbersArray = numbers?.split('; ')
      setNumbersData(numbersArray)
    }
  }

  function checkRepeatedNumbers(numbers) {
    const seenNumbers = new Set()
    const repeatedNumbers = new Set()

    numbers.forEach((number) => {
      if (seenNumbers.has(number)) {
        repeatedNumbers.add(number)
      } else {
        seenNumbers.add(number)
      }
    })

    return Array.from(repeatedNumbers)
  }



  return (
    <div className='numbers-container'>
      <h1 style={{ color: 'seagreen' }}>Data</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className='numbers-form'
      >
        <label>Numbers:</label>
        <textarea
          type='text'
          onChange={(e) => setRawNumbers(e.target.value)}
        />
        <input
          type='submit'
          value='Enviar'
        />
        <label>Ganadores:</label>
        <input
          type='text'
          onChange={(e) => setWinners(e.target.value)}
          placeholder='Números ganadores'
        />
      </form>
      <div className='numbers-box'>
        {/* Números jugados */}
        {numbersData.length > 0 && <h4 className='jugados'>Jugados</h4>}
        {numbersData?.map((item, index) => (
          <p
            className='numbers'
            key={index}
          >
            {item}
          </p>
        ))}
        {/* Números ganadores */}
        {winnersArray.length > 0 && <h4 className='ganadores'>Ganadores</h4>}
        {winnersArray?.map((item, index) => (
          <p
            style={{ color: 'seagreen' }}
            className='numbers'
            key={index + 12222}
          >
            {item}
          </p>
        ))}
        {/* Números repetidos */}
        {<h4 className='repetidos'>Repetidos</h4>}

        {numbersData != 'undefined' &&
          checkRepeatedNumbers(numbersData).map((item, index) => (
            <p
              key={index + 887755}
              style={{ color: 'orange', marginRight: '10px' }}
            >
              {item}
            </p>
          ))}
        {'   '}
      </div>
    </div>
  )
}
