import PropTypes from "prop-types"
import {StatisticList,StatisticItem,SectionStats} from "components/statistic/StatisticStyled"
export const Statistic = ({ title, stats }) => {
    return (
        <SectionStats>
            <h2 className="title">{title}</h2>

            <StatisticList>
                {stats.map(({ id, label, percentage }) => (
                    <StatisticItem key={id}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </StatisticItem>))}
            </StatisticList>
        </SectionStats>);
}
Statistic.propTypes = {
    title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}