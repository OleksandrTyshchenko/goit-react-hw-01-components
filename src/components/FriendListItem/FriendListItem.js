import PropTypes from 'prop-types'
import style from './FriendListItem.module.css'

export function FriendListItem({ friends }) {
    return (
        <>
            {friends.map(el => {
                return (
                    <li className={style.item} key={el.id}>
                        <span className={el.isOnline === true ? style.online : style.offline}></span>
                        <img className={style.avatar} src={el.avatar} alt={el.name} width="48" />
                        <p className={style.name}>{el.name}</p>
                    </li>
                )
            })}  
         </>   
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number,
        })
    )
}