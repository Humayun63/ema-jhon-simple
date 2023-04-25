import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../../providers/AuthProvider';


const SignUp = () => {
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const [showing, setShowing] = useState([]);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.form?.pathname || '/';

    const { signUp, withGoogle } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault()
        
        setError('');
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setError('Passwords Do not match!');
            return
        }
        if (password.length < 6) {
            setError('Password must contain 6 character or more')
            return
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
            setError('Password must contain minimum 6 character. At least one uppercase, one lowercase, one number and one special character.')
            return;
        }

        signUp(email, password)
            .then(result => {
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(err => setError(err.message))
    }

    const handleShow = event => {
        const value = event.target.name;
        if (showing.includes(value)) {
            const newShowing = showing.filter(item => item != value);
            console.log(newShowing, 'jk')
            setShowing(newShowing)
        } else {
            setShowing([...showing, event.target.name])
        }
        setShow(!show)
        console.log(showing)
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
            <h2 className='form-title'>Sign Up</h2>
            <form className='form' onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={(show) ? "text" : "password"} name="password" id="password" required />
                    <div className='show-password-container'>
                        <input type="checkbox" id="show-password" name="show-password" onChange={handleShow} />
                        <label htmlFor='show-password'>Show Password</label>
                    </div>

                </div>

                <div className="form-control">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type='password' name="confirmPassword" id="confirm-password" required />
                    {/* <div className='show-password-container'>
                        <input type="checkbox" id="show-confirm" name="show-confirm" onChange={handleShow} />
                        <label htmlFor='show-confirm'>Show Password</label>
                    </div> */}

                </div>
                <p className='text-error'>{error}</p>
                <input type="submit" value="Sign Up" className='btn-submit' />
            </form>
            <p className='toggle-text'>Already Have account? <Link to='/login'>Login</Link></p>
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

export default SignUp;