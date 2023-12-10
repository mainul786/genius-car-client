import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='py-10'>
            <div className='text-center'>
                <h1 className="text-orange-600 mb-5 text-5xl">Services</h1>
                <h1 className='text-5xl font-bold mb-5'>Our Service Area</h1>
                <p className='mb-10'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services; 