import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';

function Home() {

    const login = useSelector(state => state.auth.loggedIn);

    const [query, setQuery] = useState("");
    const [page, setPage] = useState(15);

    

    return (
        <div>
            {
                login ?
                <div>

                <h1>Home</h1>
                <input value={query} type='text' onChange={(e) => setQuery(e.target.value) } placeholder='Query' /> 
                <select value={page} onChange={(e) => setPage(e.target.value) }>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={12}>12</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
                <Link to={`/search/${query}/${page}/1`} >Search</Link>
                </div>  
                : <Redirect to="/login" /> 
            }
        </div>
    )
}

export default Home;