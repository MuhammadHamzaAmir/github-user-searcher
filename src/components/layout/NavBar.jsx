import {Link} from 'react-router-dom';
import {FaGithub} from 'react-icons/fa';
import PropTypes from 'prop-types';


function NavBar(props) {
  return (
    <nav className="navbar shadow-lg bg-neutral mb-12 text-neutral-content">
        <div className='container mx-auto'> 
            <div className='flex-none mx-2 px-2'>
                <FaGithub className='inline pr-2 text-3xl'/>
                <Link to='/' className='text-lg font-bold align-middle' >{props.title}</Link>
            </div>
            <div className='px-2 mx-2 flex-1'>
                <div className='flex justify-end'>
                    <Link to="/" className="btn btn-ghost btn-sm rounded-btn">Home</Link>
                    <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">About</Link>

                </div>
            </div>
        </div>
    </nav>
  );
}

NavBar.defaultProps = {
    title: 'GitHub Searcher',
}

NavBar.propTypes = {
    title: PropTypes.string,
}

export default NavBar