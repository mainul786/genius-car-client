import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState({});

   useEffect(()=>{
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
       setOrders(data)
        
    })
   },[user?.email])
    
    return (
        <div className="overflow-x-auto">
        <table className="table">
          
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                  {orders.length}
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
            ></OrderRow>)
            }
          </tbody>
        </table>
      </div>
    );
};

export default Orders;