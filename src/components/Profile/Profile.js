import PropTypes from 'prop-types'
import style from './Profile.module.css'

export function Profile({ name, tag, location, avatar, stats }) {
    return (
        <div className={style.profile}>
            <div className={style.description}>
              <img
                src={avatar}
                alt={name}
                className={style.avatar}
                width="100"
              />
              <p className={style.name}>{name}</p>
              <p className={style.title}>@{tag}</p>
              <p className={style.title}>{location}</p>
            </div>

            <ul className={style.stats}>
                <li className={style.items}>
                  <span className="label">Followers </span>
                  <span className={style.quantity}>{stats.followers}</span>
                </li>
                <li className={style.items}>
                  <span className="label">Views </span>
                  <span className={style.quantity}>{stats.views}</span>
                </li>
                <li className={style.items}>
                  <span className="label">Likes </span>
                  <span className={style.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  })
}