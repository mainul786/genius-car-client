import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

   useEffect(()=>{
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
       setOrders(data)
        
    })
   },[user?.email])
   const handleDelete = id => {
    const proceed = window.confirm('are you sure, you went to cancel your Order!');
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount > 0) {
            alert('deleted Succefully!')
          }
          const remaning = orders.filter(odr => odr._id !== id);
          setOrders(remaning)
        })

    }
  }
    return (
        <div className="overflow-x-auto">
        <table className="table">
          
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Product Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {
            orders.map(order=><OrderRow
            key={order._id}
            order={order}
            handleDelete={handleDelete}
            ></OrderRow>)
            }
          </tbody>
        </table>
      </div>
    );
};

export default Orders;