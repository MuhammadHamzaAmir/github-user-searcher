import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className="hero">
        <div className='text-center hero-center'>
            <div className='max-w-2xl'>
                <h1 className='font-bold mb-8 text-5xl'>No Resource</h1>
                <p className='text-xl text-gray-300 mb-8'>404 - Page Not Found!</p>
                <Link to='/' className='btn btn-primary btn-md'>
                    <FaHome className='mr-2'/>
                    Go Home
                </Link>
            </div>

        </div>
    </div>
  )
}

export default NotFound