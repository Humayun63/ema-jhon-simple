import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const {user, withGoogle, signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.form?.pathname || '/';


    const handleSignIn = event =>{
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            console.log(result.user);
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(err => {
           toast.error(err.message)
        })

    }
    const handleGoogleSingIn = () =>{
        withGoogle()
        .then(result =>{
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(error => console.log(error));
    }
    return (
        <div className='card'>
            <h2 className='form-title'>Sign In</h2>
            <form className='form' onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <input type="submit" value="Sign In" className='btn-submit'/>
            </form>
            <p className='toggle-text'>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
            <p className='optional-text'>
                <span>or</span>
            </p>
            <button className='google-btn' onClick={handleGoogleSingIn}>
                <FontAwesomeIcon icon={faGoogle} />
                <span> Continue with Google</span>
            </button>
        </div>
    );
};

export default Login;