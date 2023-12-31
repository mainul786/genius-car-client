import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const {login} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result =>{
            const user = result.user;
            const currentUser = {
                email: user.email
            }
            console.log(currentUser)

            fetch(`https://genius-car-server-rose-ten.vercel.app/jwt`,{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // Local storage is the easiest but not the best sequre
                localStorage.setItem('Genius-token', data.token);
                navigate(from, {replace:true});
            })

        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero w-fulll py-10">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                  <img src={img} alt='' className='w-3/4' />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center'>New to Genius Car <Link to='/signup' className='text-bold text-orange-600'>SignUp</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;