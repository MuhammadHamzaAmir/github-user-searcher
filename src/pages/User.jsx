import { useContext,useEffect } from 'react';
import GithubContext from '../context/github/GithubContext';
import {useParams} from  'react-router-dom';
import {Link} from 'react-router-dom';
import {FaUsers,FaCodepen,FaStore,FaUserFriends,FaAngleLeft,FaAngleRight} from 'react-icons/fa';
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
                        <div className="bg-base-100 stats w-full rounded-lg shadow-md">
                            {user.location && (
                                <div className="stat">
                                    <div className="stat-title text-md">Location</div>
                                    <div className="text-lg stat-value">{user.location}</div>
                                </div>
                            )}
                            {user.blog && (
                                <div className="stat">
                                    <div className="stat-title text-md">Website</div>
                                    <div className="text-lg stat-value">
                                        <a href={user.blog} target="_blank" rel="noreferrer">
                                            {user.blog}
                                        </a>
                                    </div>
                                </div>
                            )}
                            {user.twitter_username && (
                                <div className="stat">
                                    <div className="stat-title text-md">Twitter</div>
                                    <div className="text-lg stat-value">
                                        <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer">
                                            {user.twitter_username}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
        
                {/* @TODO - Make div scrollable on mouse click  */}
                <div className="w-full py-5 mb-6 rouded-lg shadow-md stats bg-base-100">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className="text-3xl md:text-5xl" />
                        </div>
                        <div className="stat-title pr-5">
                            Followers
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-5xl">
                            {user.followers}
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUserFriends className="text-3xl md:text-5xl" />
                        </div>
                        <div className="stat-title pr-5">
                            Following
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-5xl">
                            {user.following}
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaStore className="text-3xl md:text-5xl" />
                        </div>
                        <div className="stat-title pr-5">
                            Public REPOs
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-5xl">
                            {user.public_repos}
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaCodepen className="text-3xl md:text-5xl" />
                        </div>
                        <div className="stat-title pr-5">
                            Public Gists
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-5xl">
                            {user.public_gists}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User