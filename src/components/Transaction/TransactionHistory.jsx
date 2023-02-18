import PropTypes from "prop-types"
import {TransactionTable,TableBody} from "components/Transaction/TransactionStyled"
export const TransactionHistory = ({ items }) => {
  return (<TransactionTable>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <TableBody>
        {items.map(({ id, type, amount, currency }) =>  (<tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)
        )}
    
  </TableBody>
</TransactionTable>)
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired
  }))
}