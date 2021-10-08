import PropTypes from 'prop-types'
import style from './Statistics.module.css'

function getRandomColor() {
    const hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
}
export function Statistics({ title, stats }) {
    return (
        <section className={style.statistics}>
            {title && (<h2 className={style.title}>{title}</h2>)}
            <ul className={style.list}>
                {stats.map(el => {
                    return (
                        <li className={style.item} key={el.id} style={{ backgroundColor: getRandomColor() }}>
                            <span className={style.label}>{el.label}</span>
                            <span className={style.label}>{el.percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

Statistics.propType = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    )
}