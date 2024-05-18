import React from 'react'

export const NewFinder = () => {
  const raw = ` Agencia: Buen día Mary si se puede  0401; 0410; 0400; 0411; 0422; 0433; 0444; 0455; 0466; 0477; 0488; 0499; 0404; 0440; 0427; 0472
 Agencia: Mary te paso lo mismo para la primera  agrego 0403; 0430; 0402; 0420; 0405; 0450; 0406; 0460; 0413; 0431; 0432; 0423; 1304; 1340; 1325; 1352
 Agencia: 0461; 0416; 0426; 0462; 0463; 0436; 0446; 0464; 0474; 0447; 0445; 0454; 0435; 0453; 0443; 0434
 Agencia: 0412; 0421; 0414; 0441; 0442; 0424; 0415; 0451; 1919; 1969; 1996;  1991; 1999; 1966; 9111; si entra
 Agencia: Te paso para  el medio día lo mismo de la primera  y agrego 0123; 0132;
 Agencia: 0106; 0160; 1117; 1171; 9119; 1118; 1181; 1166; 1113; 1131; si entra también
 Agencia: Si dalo vuelta Rodry  y agrego 1998; 1989; 1997; 1979;  gracia`

  const winners = '0193; 3628; 4605; 4890; 5893; '

  // Convierto raw en un array filtrado solo a numeros de 4 digitos separados por ;
  const filteredDigits = raw.match(/\d{4}/g) // Match every sequence of 4 digits
  const numbers = filteredDigits.join('; ') // Join with semicolon and space

  //   Convierto los strings en arrays quitando el ultimo que es "" de winners
  const numbersArray = numbers.split('; ')
  const winnersArray = winners.split('; ')
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
  console.log(numbersArray)
  console.log(winnersArray)

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
