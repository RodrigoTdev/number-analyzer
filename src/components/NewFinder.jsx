import React from 'react'

export const NewFinder = () => {
  const numbers =
    '0400; 0411; 0422; 0433; 0444; 0455; 0466; 0477; 0488; 0499; 0401; 0410; 0402; 0420; 0403; 0430; 0404; 0440; 0405; 0450; 0406; 0460; 0413; 0431; 0432; 0423; 0441; 0414; 0442; 0424; 1304; 1340; 1325; 1352; 1313; 1331; 0419; 0491; 0429; 0492; 0412; 0421; 0494; 0449; 0493; 0439; 0469; 0496; 0471; 0417; 0472; 0427; 0481; 0418; 1306; 1360; 0615; 0651; 0658; 0685; 0666; 1333; 1000; 9111; '
  const winners = '4054; 0305; 1145; 6669; 6684; 7748; '

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
