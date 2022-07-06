import {useEffect,useContext} from 'react';
import Loading from '../layout/Loading';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {

    const {loading,users,fetchUsers}  = useContext(GithubContext);


    useEffect(() => {
        fetchUsers();
    },);


    if(!loading){
        return (

            <div className='grid grid-cols-1 gap xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 text-center'>
                {users.map((user)=>(
                    <UserItem key={user.id} user={user}></UserItem>
                ))}
            </div>
    )
    }

    else{
        return <Loading/>
    }
    
    }

export default UserResults