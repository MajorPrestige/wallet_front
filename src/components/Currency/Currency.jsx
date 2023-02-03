import axios from 'axios';
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Table, Container } from './Currency.styled';

async function getCurrency() {
  try {
    const { data } = await axios.get('https://api.monobank.ua/bank/currency');
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

function saveInLocalStorage(result) {
  localStorage.removeItem('keyCurrency');
  localStorage.removeItem('keyDate');
  localStorage.setItem('keyCurrency', JSON.stringify(result));
  localStorage.setItem('keyDate', JSON.stringify(new Date().getTime()));
}

function parsedLocalStorage() {
  return JSON.parse(localStorage.getItem('keyCurrency'));
}

const Currency = () => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    if (
      parsedLocalStorage() &&
      new Date().getTime() - JSON.parse(localStorage.getItem('keyDate')) <
        3600000
    ) {
      return setCurrency(parsedLocalStorage());
    } else {
      getCurrency().then(data => {
        const res = data.filter(value => {
          return (
            (value.currencyCodeA === 840 || value.currencyCodeA === 978) &&
            value.currencyCodeB === 980
          );
        });
        saveInLocalStorage(res);
        return setCurrency(res);
      });
    }
  }, [setCurrency]);

  return (
    <Container>
      {currency.length === 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}

      <Table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          {currency.length > 0 &&
            currency.map(results => (
              <tr key={results.currencyCodeA}>
                {results.currencyCodeA === 840 ? <td>USD</td> : <td>EUR</td>}
                <td>{results.rateBuy.toFixed(2)}</td>
                <td>{results.rateSell.toFixed(2)}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Currency;
