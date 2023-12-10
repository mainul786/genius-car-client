import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handlesignUp = event =>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, email, password)
createUser(email, password)
.then(result =>{
    const user = result.user;
    console.log(user)
})
.catch(err=> console.log(err))

    }
    return (
        <div className="hero w-fulll py-10">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                  <img src={img} alt='' className='w-3/4' />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
                    <form className="card-body" onSubmit={handlesignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
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
                    <p className='text-center'>Have an already Accout? <Link to='/login' className='text-bold text-orange-600'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;