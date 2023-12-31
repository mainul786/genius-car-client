import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user, logOut} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

   useEffect(()=>{
    fetch(`https://genius-car-server-rose-ten.vercel.app/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('Genius-token')}`
      }
    })
    .then(res=>{
      if(res.status ===401 || res.status === 403 ){
        logOut()
      }
      return res.json()
    })
    .then(data=>{
        console.log(data)
       setOrders(data)
        
    })
   },[user?.email, logOut])
   const handleDelete = id => {
    const proceed = window.confirm('are you sure, you went to cancel your Order!');
    if (proceed) {
      fetch(`https://genius-car-server-rose-ten.vercel.app/orders/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('Genius-token')}`
        }
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

  const handleStatusUpdate = id =>{
      fetch(`https://genius-car-server-rose-ten.vercel.app/orders/${id}`, {
        method:'PATCH',
        headers:{
          'content-type':'application/json',
          authorization: `Bearer ${localStorage.getItem('Genius-token')}`
        },
        body:JSON.stringify({status:'Approved'})
      })  
      .then(res=> res.json())    
      .then(data=>{
        if(data.modifiedCount > 0){
          const remaining = orders.filter(odr => odr._id !== id);
          const approving = orders.find(odr=> odr._id === id);
          approving.status = 'Approved';
          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      })
  }
    return (
        <div className="overflow-x-auto">
        <table className="table">
          
          <thead>
            <tr>
              <th>
                
              </th>
              <th>Name</th>
              <th>Product Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
            orders.map(order=><OrderRow
            key={order._id}
            order={order}
            handleDelete={handleDelete}
            handleStatusUpdate ={handleStatusUpdate }
            ></OrderRow>)
            }
          </tbody>
        </table>
      </div>
    );
};

export default Orders;