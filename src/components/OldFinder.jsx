import React from 'react';

export const Finder = () => {
  const numbers =
    '1900; 1911; 1922; 1933; 1944; 1955; 1966; 1977; 1988; 1999; 9998; 9989; 1919; 1991; 2220; 2202; 2221; 2212; 2232; 2223; 2224; 2422; 2204; 2240; 2242; 2299; 2214; 2241; 2213; 2231; 3222; 3111; 1992; 1929; 1993; 1939; 1994; 1949; 1937; ';

  const winnerNumbers = '8900;';

  // Convierto numbers en arrays de 2 y 3 digitos
  const numbersTwoDigits = numbers.split('; ').map((item) => item.slice(-2));
  const numbersThreeDigits = numbers.split('; ').map((item) => item.slice(-3));

  // Convierto winnerNumbers en arrays de 2 y 3 digitos
  const winnerNumbersTwoDigits = winnerNumbers
    .split('; ')
    .map((item) => item.slice(-2));
  const winnerNumbersThreeDigits = winnerNumbers
    .split('; ')
    .map((item) => item.slice(-3));

  //Funciones para filtras numbers que coinciden con winnersNumbers
  let resultTwoDigits = [];
  let resultThreeDigits = [];

  function moneyTwoDigits(numbers, winners) {
    winners.map((number) => {
      if (numbers.filter((num) => num == number).length > 0) {
        resultTwoDigits.push(numbers.filter((num) => num == number));
      }
    });
  }
  function moneyThreeDigits(numbers, winners) {
    winners.map((number) => {
      if (numbers.filter((num) => num == number).length > 0) {
        resultThreeDigits.push(numbers.filter((num) => num == number));
      }
    });
  }

  moneyTwoDigits(numbersTwoDigits, winnerNumbersTwoDigits);
  moneyThreeDigits(numbersThreeDigits, winnerNumbersThreeDigits);

  const resultTwoDigits2 = [].concat(...resultTwoDigits).length;
  const resultThreeDigits2 = [].concat(...resultThreeDigits).length;
  return (
    <div>
      <h3>
        Premio: ${' '}
        {resultTwoDigits2.length > 0 ? (resultTwoDigits2 - 1) * 2100 : 0} .-
      </h3>
      <h3>
        Premio: ${' '}
        {resultThreeDigits2.length > 0 ? (resultThreeDigits2 - 1) * 18000 : 0}{' '}
        .-
      </h3>
      <p>----------------------------</p>
      <h2 style={{ color: 'green' }}>
        {`Total: $ ${
          (resultTwoDigits2 - 1) * 2100 + (resultThreeDigits2 - 1) * 18000
        }
        .-`}
      </h2>
    </div>
  );
};
