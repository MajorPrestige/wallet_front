// import getCurrencyCources from "api/auth/currency";
import { Table } from "./Currency.styled";
import { TdLastChild } from "./Currency.styled";

const Currency = () => {
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
        <tr>
          <td>USD</td>
          <td>40.20</td>
          <td>40.30</td>
        </tr>
        <tr>
          <td>EUR</td>
          <td>40.60</td>
          <TdLastChild>40.80</TdLastChild>
        </tr>
      </tbody>
    </Table>
  );
};

export default Currency;
