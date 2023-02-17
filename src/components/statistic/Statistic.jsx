import PropTypes from "prop-types"
export const Statistic = ({ title, stats }) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                {stats.map(({id, lable, percentage}) => (
                    <li className="item" key={id}>
                        <span className="label">{lable}</span>
                        <span className="percentage">{percentage}</span>
                    </li>))}
            </ul>
        </section>);
}
Statistic.propTypes = {
    title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}