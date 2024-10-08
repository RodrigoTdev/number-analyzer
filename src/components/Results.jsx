import React from 'react'

export const Results = ({ numbersData, winners }) => {
  //Convierto números ganadores en array quitando el ultimo que es "" de winners
  let winnersArray = []
  winnersArray = winners.split('; ')
  winnersArray.pop()

  let winnersTwoDigitsCount = []
  let winnersThreeDigitsCount = []
  let winnersFourDigitsCount = []

  //Funcion para numeros ganadores
  function checkWinners(digits, numbers, winners, array) {
    // Convierto arrays a cantidad de digitos buscado
    const numbersDigits = numbers.map((item) => item.slice(digits))
    const winnerDigits = winners.map((item) => item.slice(digits))
    //Guardo en array los resultados
    numbersDigits.map((item) => {
      winnerDigits.map((element) => {
        element == item && array.push(element)
      })
    })
  }

  checkWinners(2, numbersData, winnersArray, winnersTwoDigitsCount)
  checkWinners(1, numbersData, winnersArray, winnersThreeDigitsCount)
  checkWinners(0, numbersData, winnersArray, winnersFourDigitsCount)

  return (
    <div className='container'>
      <h1 style={{ color: 'green' }}>Premios</h1>
      <h3>Premio: {`$${winnersTwoDigitsCount.length * 2800}`}</h3>
      <h3>Premio: {`$${winnersThreeDigitsCount.length * 24000}`}</h3>
      <h3>Premio: {`$${winnersFourDigitsCount.length * 140000}`}</h3>
      <hr />
      <h2 style={{ color: 'red' }}>
        Total:{' '}
        {`$${
          winnersTwoDigitsCount.length * 2800 +
          winnersThreeDigitsCount.length * 24000 +
          winnersFourDigitsCount.length * 140000
        }`}
      </h2>

      <p>Cantidad de Números: {numbersData.length}</p>
      <p>Cantidad de Números Ganadores: {winnersArray?.length}</p>
      <hr />
      <p>
        Números Ganadores:{' '}
        <span style={{ color: 'forestgreen', fontWeight: 'bold' }}>
          {winnersThreeDigitsCount.length >= 1
            ? winnersThreeDigitsCount.map((item, index) => {
                if (index < winnersThreeDigitsCount.length - 1) {
                  return item + '-'
                } else {
                  return item
                }
              })
            : winnersTwoDigitsCount.map((item, index) => {
                if (index < winnersTwoDigitsCount.length - 1) {
                  return item + '-'
                } else {
                  return item
                }
              })}
        </span>
      </p>
    </div>
  )
}
