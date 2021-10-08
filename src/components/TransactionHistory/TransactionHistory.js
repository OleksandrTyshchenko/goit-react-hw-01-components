import PropTypes from 'prop-types'
import style from './TransactionHistory.module.css'

export function TransactionHistory({items}) {
    return (
        <table className={style.transaction}>
            <thead>
                <tr className={style.head}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

          <tbody>
                {items.map(el => {
                    return (
                        <tr key={el.id} className={style.rows}>
                            <td>{el.type}</td>
                            <td>{el.amount}</td>
                            <td>{el.currency}</td>
                        </tr>
                    )
                })}
          </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    )
}
