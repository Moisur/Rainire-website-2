import React from 'react';
import { useLocation } from 'react-router-dom';
import toggleSun from '../../assect/Toggle button.png'
import UserImage from '../../assect/Frame 2696.png'

const TopNav = () => {
    const location = useLocation();
    const path = location.pathname;
    console.log(path);
    return (
        <div className={`md:bg-[#E5E5E5]  bg-gradient-to-r from-[#FF7594] to-[#FF7C65] h-[11vh] w-full flex justify-between items-center px-10  transform ease-in-out transition duration-500`}>
            <div className='text-white md:text-[#646F75]'>
                <p className=' text-2xl font-semibold '>{`${path == '/' ? `Home` : ''}`}</p>
                <p className=' text-2xl font-semibold '>{`${path == '/patientProfile' ? 'Patient Profile' : ''}`}</p>
                <p className=' text-2xl font-semibold '>{`${path == '/appointments' ? `Appointments` : ''}`}</p>
                <p className=' text-2xl font-semibold '>{`${path == '/medicalHistory' ? `Medical History` : ''}`}</p>
                <p className=' text-2xl font-semibold '>{`${path == '/settings' ? `Settings` : ''}`}</p>
            </div>
            <div className=' flex items-center'>
                <img src={toggleSun} alt="Go to sun" />
                <img className=' ml-6' src={UserImage} alt="Go to User" />
            </div>
        </div>
    );
};

export default TopNav;