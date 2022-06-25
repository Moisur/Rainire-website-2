import { useState } from "react";
import logoText from '../../assect/MediDoc.png'
import logoImg from '../../assect/Vector.png'
import leftArrow from '../../assect/Group 2549.png'
import BarIcon from '../../assect/Frame 2855.png'
import appointmentIcon from '../../assect/Default.png'
import './Navbar.css'
import { FiHome } from "react-icons/fi";
import { BiUser, BiHistory } from "react-icons/bi";
import { BsCalendar2Plus } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [show, setShow] = useState(true);

    return (
        <div className={`${show ? 'w-52 translate-x-0' : 'w-[11vh]'} lg:h-screen  z-50 bg-white text-neutral  duration-500`}>
            <div id="main" className={`${show ? 'translate-x-0 w-52 ' : ' -translate-x-2/3 w-52 '}  xl:rounded-r transform ease-in-out transition duration-500 flex justify-start items-start  h-screen flex-col relative `}>

                <div >
                    <div className="flex justify-between items-center space-x-3 absolute right-7 top-7 ease-in-out transition duration-500">
                        <button aria-label="open" id="open" onClick={() => setShow(true)} className={` ${show ? 'hidden' : ''} focus:outline-none focus:ring-2`}>
                            <img className=" w-[36px] h-[36px]" src={BarIcon} alt="Bar Icon" />
                        </button>
                    </div>
                    <div aria-label="toggler" className="flex justify-center  items-center absolute right-[-7%] top-7  ease-in-out transition duration-500">
                        <button aria-label="close" id="close" onClick={() => setShow(false)} className={`${show ? '' : 'hidden'} focus:outline-none focus:ring-2`}>
                            <img className=" w-[36px] h-[36px]" src={leftArrow} alt="left arrow" />
                        </button>
                    </div>
                </div>



                <div className=" w-full h-full flex flex-col justify-center items-center  duration-500 ">

                    <div className={`${show ? '' : 'hidden '} px-7 w-full flex justify-start h-[14vh] items-center space-x-3 duration-500`}>
                        <img className=" w-[36px] h-[36px]" src={logoImg} alt="Logo images" />
                        <img src={logoText} alt="Logo images" />
                    </div>

                    <nav className={`${show ? ' mt-0 ' : 'mt-24 mb-28'} w-full h-[90vh]  duration-500`}>
                        <ul className="h-full py-28   flex flex-col justify-around  duration-500">
                            <NavLink to={'/'}>
                                <div className={`${show ? 'px-4 translate-x-0' : 'justify-end px-4'} flex items-center h-10  w-full  duration-500 `}>
                                    <FiHome className={` mr-5 text-xl `} />
                                    <p className={`${show ? '' : 'hidden'} neutral`}>Home</p>
                                </div>
                            </NavLink>

                            <NavLink to={'patientProfile'}>
                                <div className={`${show ? 'px-4' : 'justify-end px-4'} flex items-center h-10  w-full   duration-500`}>
                                    <BiUser className={` mr-5 text-xl`} />
                                    <p className={`${show ? '' : 'hidden'}`}>Patient Profile</p>
                                </div>
                            </NavLink>


                            <NavLink to={'appointments'}>
                                <div className={`${show ? 'px-4' : 'justify-end px-4'} flex items-center h-10  w-full   duration-500`}>
                                    <BsCalendar2Plus className={` mr-5 text-xl`} />
                                    <p className={`${show ? '' : 'hidden'}`}>Appointments</p>
                                </div>
                            </NavLink>

                            <NavLink to={'medicalHistory'}>
                                <div className={`${show ? 'px-4' : 'justify-end px-4'} flex items-center h-10  w-full   duration-500`}>
                                    <BiHistory className={` mr-5 text-xl`} />
                                    <p className={`${show ? '' : 'hidden'}`}>Medical History</p>
                                </div>
                            </NavLink>

                            <NavLink to={'settings'}>
                                <div className={`${show ? 'px-4' : 'justify-end px-4'} flex items-center h-10  w-full   duration-500`}>
                                    <IoSettingsOutline className={` mr-5 text-xl`} />
                                    <p className={`${show ? '' : 'hidden'}`}>Settings</p>
                                </div>
                            </NavLink>
                        </ul>
                    </nav>

                    <button className={`${show ? '' : 'hidden'} bg-gradient-to-r from-[#FF7594] to-[#FF7C65] mb-12 p-3 rounded-md text-white  duration-500`}>New appointment</button>

                    <button className={`${show ? ' hidden' : ''} absolute bottom-10 right-6 h-[40px] w-[40px]  duration-500`}><img src={appointmentIcon} alt="Appointment icon" /></button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;