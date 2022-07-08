import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

function RepoList(props) {
    return (
        <div className="rounded-lg card bg-base-100 shadow-lg ">
            <div className="card-body">
                <h3 className="text-center text-3xl font-bold my-4 card-title">
                    { (props.repos.length > 0) ? 'Repositories': 'No Repositories'}
                </h3>
                {props.repos.map((repo) => (
                    <RepoItem key={repo.id} repo={repo}/>
                ))}
            </div>
        </div>
    )
}
RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoList