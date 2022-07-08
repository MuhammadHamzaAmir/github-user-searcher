import PropTypes from 'prop-types';
import {FaEye, FaLink, FaStar, FaInfo, FaUtensils} from 'react-icons/fa';

function RepoItem(props) {
    return (
        <div className='mb-2 card rounded-md bg-gray-700 hover:bg-gray-800 active:bg-gray-900'>
            <div className="card-body">
                <h4 className="mb-2 text-semibold text-xl">
                    <a href={props.repo.html_url} target="_blank" rel="noreferrer">
                        <FaLink className='inline mr-1'/> {props.repo.name}
                    </a>
                </h4> 
                <p className="mb-3">
                    {props.repo.description}
                </p>
                <div>
                    <div className="badge badge-info mr-2 badge-lg badge-outline">
                        <FaEye className='mr-2 '/>
                        {props.repo.watchers_count}
                    </div>
                    <div className="badge badge-success mr-2 badge-lg badge-outline">
                        <FaStar className='mr-2 '/>
                        {props.repo.stargazers_count}
                    </div>
                    <div className="badge badge-error mr-2 badge-lg badge-outline">
                        <FaInfo className='mr-2 '/>
                        {props.repo.open_issues}
                    </div>
                    <div className="badge badge-warning mr-2 badge-lg badge-outline">
                        <FaUtensils className='mr-2 '/>
                        {props.repo.forks}
                    </div>
                </div>
                

            </div>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}
export default RepoItem ;