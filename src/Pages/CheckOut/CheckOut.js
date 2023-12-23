import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleOrderSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.fname.value} ${form.lname.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        console.log(name, phone, email, message)

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            phone,
            email,
            message
        }

        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('Genius-token')}`

            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    alert('Order SuccessFully!');
                }
            })
            .catch(error => console.log(error))

    }

    return (
        <div className='py-20 mt-1'>
            <h1>You are about to Order: {title}</h1>
            <p>Price ${price}</p>
            <form onSubmit={handleOrderSubmit}>
                <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 mb-4'>
                    <input type="text" name="fname" placeholder="First Name" className="input input-bordered input-accent w-full " />
                    <input type="text" name="lname" placeholder="Last Name" className="input input-bordered input-accent w-full " />
                    <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered input-accent w-full " requrired />
                    <input type="text" name="email" defaultValue={user?.email} readOnly placeholder="Your Email" className="input input-bordered input-accent w-full " />
                </div>
                <textarea name="message" placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                <button className="btn btn-outline btn-warning w-full">Order Confirm</button>
            </form>
        </div>
    );
};

export default CheckOut;