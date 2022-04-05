import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from '../../assets/images/notfound.jpg'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen items-center'>
            <div className='order-2 md:order-1'>
                <h4 className='text-4xl text-slate-500'>Dont't get lost while browsing.</h4>
                <p className='text-2xl text-slate-500'>Let me guide you back to home.</p>
                <button className='mt-4 px-4 py-2 bg-red-400 rounded-xl text-2xl text-slate-800' onClick={() => { navigate('/') }}>Go to Home</button>
            </div>
            <div className='order-1 md:order-2'>
                <img src={notfound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;