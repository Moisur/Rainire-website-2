import React, {  } from 'react';
import { BiHistory, BiUser } from 'react-icons/bi';
import { BsCalendar2Plus } from 'react-icons/bs';
import { FiHome } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import LetSite from '../../../assect/Group 2549.png'
import logoText from '../../../assect/MediDoc.png'
import logoImg from '../../../assect/Vector.png'

const MobileMenu = () => {
    return (
        <div>
            {/*  ======================== Modal area ============================== */}
            <div class="drawer absolute w-[60%]  h-[100vh] ">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">

                </div>
                <div class="drawer-side  ">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto  bg-white text-[#646F75]">
                        {/* ====================================== Modal open and off     ======================*/}
                        <div className='flex  items-center gap-7'>
                            <div className='flex justify-start gap-4  items-center  duration-500'>
                                <img className=" w-[20px] h-[20px]" src={logoImg} alt="Logo images" />
                                <img src={logoText} alt="Logo images" />
                            </div>
                            <label for="my-drawer" class="drawer-button ">
                                <img src={LetSite} alt="" />
                            </label>
                        </div>

                        {/* =========================== Router  ===========================*/}
                        <div>
                            <NavLink to={'/'}>
                                <div className='py-10  flex items-center h-10  w-full  duration-500'>
                                    <FiHome className={` mr-5 text-xl `} />
                                    <p >Home</p>
                                </div>
                            </NavLink>

                            <NavLink to={'patientProfile'}>
                                <div className='py-10  flex items-center h-10  w-full   duration-500'>
                                    <BiUser className={` mr-5 text-xl`} />
                                    <p >Patient Profile</p>
                                </div>
                            </NavLink>


                            <NavLink to={'appointments'}>
                                <div className='py-10  flex items-center h-10  w-full  duration-500'>
                                    <BsCalendar2Plus className={` mr-5 text-xl`} />
                                    <p>Appointments</p>
                                </div>
                            </NavLink>

                            <NavLink to={'medicalHistory'}>
                                <div className='py-10  flex items-center h-10  w-full   duration-500
'>
                                    <BiHistory className={` mr-5 text-xl`} />
                                    <p >Medical History</p>
                                </div>
                            </NavLink>

                            <NavLink to={'settings'}>
                                <div className='py-10  flex items-center h-10  w-full  duration-500'>
                                    <IoSettingsOutline className={` mr-5 text-xl`} />
                                    <p >Settings</p>
                                </div>
                            </NavLink>
                        </div>
                        {/* ==================== appointment btn =========================== */}
                        <button className='w-52 my-20 bg-gradient-to-r from-[#FF7594] to-[#FF7C65] mb-12 p-3 rounded-md text-white  duration-500'>New appointment</button>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default MobileMenu;