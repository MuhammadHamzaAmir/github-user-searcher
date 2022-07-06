import {useState,useContext} from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';



function UserSearch() {

    const [text, setText] = useState('');

    const {users,searchUsers,clearUsers} = useContext(GithubContext);
    const {setAlert} = useContext(AlertContext);
 
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === ""){
            setAlert("Please enter a search term","error");
        }
        else{
            searchUsers(text);
            setText('');
        }
    }

    const handleClear = () => {
        clearUsers();
        setText('');
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input type="text" value={text} onChange={handleChange} name="Search" className="pr-40 w-full bg-gray-300 input input-lg text-slate-800" aria-placeholder="Search User" placeholder="Search User" />
                            <button type="submit" className="btn btn-lg top-0 right-0 absolute w-36 rounded-l-none">GO!</button>
                        </div>
                    
                    </div>
                </form>
            </div>

            {users.length > 0 && (<div> 
                <button className="btn-ghost btn btn-lg" onClick={handleClear}>
                    Clear
                </button>
            </div>)}
            

        </div>
    )
}

export default UserSearch