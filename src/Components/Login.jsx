import { useSelector, useDispatch } from 'react-redux';
import { AUTHENTICATE } from '../Redux/Auth/action';

function Login() {
    const state = useSelector(state => state.auth.loggedIn);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={ () => dispatch( { type: AUTHENTICATE } )} >Login</button>
            <h1>{ state ? "True" : "False"}</h1>
        </div>
    )
}

export default Login;