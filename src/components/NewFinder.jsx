import React from 'react'

export const NewFinder = () => {
  const numbers =
    ' Agencia: Si se puede te paso para la tarde. 1313: 1331; 1304; 1340; 1332; 1323; 1300; 1314; 1341; 1315; 1351; 1352; 1325; 1302; 1320; 1303; 1330; 0406; 0460; 0400
 Agencia: 0401; 0410; 0404; 0440; 0411; 0422; 0433; 0444; 0455; 0466; 0477; 0488; 0499; 0441; 0414; 0442; 0424 ; 0412; 0421; 0419; 0491; 0492; 0429; 1999; si entra
 Agencia: 0450; 0405; también
 Agencia: Agrego 4748; 4784; 4774; 4747; 4847; 4874; 4849; 4894; 4735; 4753; 4754; 4745; 4755; 4777; 4726; 4762; 4744;'
  const winners = ''

  //   Convierto los strings en arrays quitando el ultimo que es ""
  const numbersArray = numbers.split('; ')
  const winnersArray = winners.split('; ')
  numbersArray.pop()
  winnersArray.pop()

  let winnersTwoDigitsCount = []
  let winnersThreeDigitsCount = []

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

  checkWinners(2, numbersArray, winnersArray, winnersTwoDigitsCount)
  checkWinners(1, numbersArray, winnersArray, winnersThreeDigitsCount)

  console.log(winnersTwoDigitsCount)
  console.log(winnersThreeDigitsCount)
  console.log(numbersArray.length)
  console.log(winnersArray.length)

  return (
    <div className='container'>
      <h1 style={{ color: 'green' }}>Premios</h1>
      <h3>Premio: {`$${winnersTwoDigitsCount.length * 2100}`}</h3>
      <h3>Premio: {`$${winnersThreeDigitsCount.length * 18000}`}</h3>
      <hr />
      <h2 style={{ color: 'red' }}>
        Total:{' '}
        {`$${
          winnersTwoDigitsCount.length * 2100 +
          winnersThreeDigitsCount.length * 18000
        }`}
      </h2>
      <br />
      <br />
      <br />
      <br />
      <p>Cantidad de Números: {numbersArray.length}</p>
      <p>Cantidad de Números Ganadores: {winnersArray.length}</p>
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
