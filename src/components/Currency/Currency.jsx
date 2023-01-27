// import getCurrencyCources from "api/auth/currency";
import { Table } from './Currency.styled';
import { TdLastChild } from './Currency.styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { ThreeDots } from 'react-loader-spinner';

async function getCurrency() {
  const { data } = await axios.get('https://api.monobank.ua/bank/currency');

  return data;
}

// if (new Date().getTime() - currency[0].date >= 3600000)

const Currency = () => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    getCurrency().then(data => {
      const result = data.filter(value => {
        return (
          (value.currencyCodeA === 840 || value.currencyCodeA === 978) &&
          value.currencyCodeB === 980
        );
      });

      // console.log(result);
      setCurrency(result);
      localStorage.setItem('keyCurrency', JSON.stringify(result));
    });
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Purchase</th>
          <th>Sale</th>
        </tr>
      </thead>
      <tbody>
        {currency.length === 0 ? (
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
        ) : (
          currency.map(results => (
            <tr key={results.currencyCodeA}>
              {results.currencyCodeA === 840 ? <td>USD</td> : <td>EUR</td>}

              <td>{results.rateBuy.toFixed(2)}</td>
              <td>{results.rateSell.toFixed(2)}</td>
            </tr>
          ))
        )}
        {/* <tr>
          <td>USD</td>
          <td>40.2</td>
          <td>40.30</td>
        </tr>
        <tr>
          <td>EUR</td>
          <td>40.60</td>
          <TdLastChild>40.80</TdLastChild>
        </tr> */}
      </tbody>
    </Table>
  );
};

export default Currency;
