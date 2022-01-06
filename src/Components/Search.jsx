import { Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchData } from "../Redux/Github/action";
import { Link } from 'react-router-dom';

function Search() {

    const dispatch = useDispatch();

    const login = useSelector(state => state.auth.loggedIn);
    const gitData = useSelector(state => state.git);

    const {q, per_page, page} = useParams();

    const [pageNo, setPageNo] = useState(1);

    const getData = async () => {
        let data = await axios(`https://api.github.com/search/repositories?q=${q}&page=${page}&per_page=${per_page}`);
        data = data.data.items;
        console.log(data);
        
        dispatch(fetchData(data));
    }

    useEffect(() => {
        getData();
    }, [q, per_page, page])

    const nextPage = () =>  {
        console.log(pageNo);
        setPageNo( pageNo+1 );
    }
    const previousPage = () =>  {
        console.log(pageNo);
        setPageNo( pageNo-1 );
    }
    return (
        <div>
            {
                login ? 
                <div>
                    <h1>Search</h1>
                    {
                        gitData ? gitData.map((item) => <div key={item.id}>
                        {item.name}
                        <img style={{height: "120px"}} src={item.owner.avatar_url} alt="Image" />
                        </div> ) : <h1>loading...</h1>
                    }
                    <Link to={`/search/${q}/${per_page}/${pageNo}` } onClick={nextPage} >Next</Link>
                    {
                    pageNo > 1 && <Link to={`/search/${q}/${per_page}/${pageNo}` } onClick={previousPage} >Previous</Link>
                    }
                </div>
                : <Redirect to="/login" />
            }
        </div>
        
    )
}

export default Search;