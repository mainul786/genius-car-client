import React from 'react';
import img2 from '../../../assets/images/about_us/parts.jpg';
import img1 from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='relative w-1/2'>
    <img src={img1} alt=''  className="w-4/5 h-full rounded-lg shadow-2xl"/>
    <img src={img2} alt='' className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl"/>
    </div>
    <div className='w-1/2'>
    <p className="text-2xl font-bold text-orange-600">About Us</p>
                    <h1 className="my-5 text-5xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default About;