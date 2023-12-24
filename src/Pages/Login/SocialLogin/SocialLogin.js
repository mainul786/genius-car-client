import React, { useContext }  from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const SocialLogin = () => {
    const {socialSignIn} = useContext(AuthContext);

    const handleSocial = () =>{
        socialSignIn()
        .then(result => {
            const user = result.user;
            console.log(user)
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
              
            })
            
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='text-center'>
            <button onClick={handleSocial} className='btn btn-ghost'>Google</button>
        </div>
    );
};

export default SocialLogin;