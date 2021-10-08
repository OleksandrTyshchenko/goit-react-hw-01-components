import PropTypes from 'prop-types'
import style from './FriendList.module.css'
import { FriendListItem } from '../FriendListItem/FriendListItem'

export function FriendList({ friends }) {
    return (
        <ul className={style.list}>
            <FriendListItem friends={friends} />
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number,
        })
    )
}