import { useContext,useEffect } from 'react';
import GithubContext from '../context/github/GithubContext';
import {useParams} from  'react-router-dom';
import {Link} from 'react-router-dom';
import {FaUsers,FaCodepen,FaStore,FaUserFriends} from 'react-icons/fa';
import Loading from '../components/layout/Loading'; 

function User() {

    const {user,getUser,loading} = useContext(GithubContext);

    const params = useParams();

    useEffect(() => {
        getUser(params.login);
        // eslint-disable-next-line
    }, []);

    if (loading){
        return <Loading/>
    }else{

        return (
            <div className="w-full mx-auto lg:w-10/12">
                <div className="mb-4">
                    <Link to="/" className="btn btn-ghost">To Home</Link>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
                    <div className='custom-card-image mb-6 md:mb-0'>
                        <div className='rounded-lg shadow-xl card image-full'>
                            <figure>
                                <img src={user.avatar_url} alt="Profile"/>
                            </figure>
                            <div className='card-body justify-end'>
                                <h2 className='card-title mb-0 text-slate-100'>{user.name}</h2>
                                <p className='card-text flex-grow-0 text-slate-200'>{user.login}</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="mb-6">
                            <h1 className="text-3xl card-title">{user.name}
                                <div className="badge badge-success ml-2 mr-1">
                                    {user.type}
                                </div>
                                {user.hireable && (
                                    <div className="badge badge-info mx-1">
                                        Hireable
                                    </div>
                                )}
                            </h1>
                            <p>{user.bio}</p>
                            <div className="mt-4 card-actions">
                                <a href={user.html_url} className="btn btn-outline" target="_blank" rel="noreferrer">
                                    Visit GitHub Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User