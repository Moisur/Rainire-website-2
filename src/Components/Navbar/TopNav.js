import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import toggleSun from '../../assect/Toggle button.png'
import UserImage from '../../assect/Frame 2696.png'
import menu from '../../assect/Frame 2855.png'
import MobailMenu from './MobailMenu/MobailMenu';
import './Navbar.css'
const TopNav = () => {
    const location = useLocation();
    const path = location.pathname;
    console.log(path);
    const [sdsdfk,thikaceto]=useState(false)
    return (
        <div>
            <div className={`mobileResponsive   h-[11vh] w-full flex justify-between items-center px-5 md:px-10  transform ease-in-out transition duration-500`}>
                <label  onClick={()=>thikaceto(true)} for="my-drawer" class="drawer-button md:hidden">
                    <img src={menu} alt="" />
                </label>
                <div className='text-white md:text-[#646F75] mr-14 md:mr-0'>
                    <p className=' text-2xl font-semibold '>{`${path == '/' ? `Home` : ''}`}</p>
                    <p className=' text-2xl font-semibold '>{`${path == '/patientProfile' ? 'Patient Profile' : ''}`}</p>
                    <p className=' text-2xl font-semibold '>{`${path == '/appointments' ? `Appointments` : ''}`}</p>
                    <p className=' text-2xl font-semibold '>{`${path == '/medicalHistory' ? `Medical History` : ''}`}</p>
                    <p className=' text-2xl font-semibold '>{`${path == '/settings' ? `Settings` : ''}`}</p>
                </div>
                <div className=' flex items-center'>
                    <img className='w-14 md:w-full' src={toggleSun} alt="Go to sun" />
                    <img className='w-14 md:w-full ml-4  md:ml-6' src={UserImage} alt="Go to User" />
                </div>
            </div>

            {/* ====================== ====================== */}
            {
                sdsdfk&& <MobailMenu></MobailMenu>
            }
           
            
        </div>
    );
};

export default TopNav;




