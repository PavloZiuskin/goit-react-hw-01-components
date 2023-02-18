import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 400px;

  box-shadow: 4px 2px 2px rgba(0, 0, 0, 0.4);
  thead {
    background-color: #52c8fa;
  }
  tr {
    height: 35px;
  }
`;
export const TableBody = styled.tbody`
  text-align: center;
  tr:nth-child(2n) {
    background-color: #ededed;
  }
`;
