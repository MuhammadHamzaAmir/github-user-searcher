import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function UserItem(props) {
    
    return (
        <div className='card shadow-md compact side bg-base-100'>
            <div className='flex-row items-center space-x-4  card-body '>
                <div>
                    <div className='avatar'>
                       <div className='rounded-full shadow w-14 h-14'>
                            <img src={props.user.avatar_url} alt="Profile"/>
                       </div>
                    </div>
                </div>
                <div>
                    <h2 className='card-title'>{props.user.login}</h2>
                    <Link to={`/user/${props.user.login}`} className='text-opacity-50 text-base-content '>Visit Profile</Link>
                </div>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem