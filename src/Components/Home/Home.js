import React from 'react';
import heartImg from '../../assect/Frame 2846.png'
import pressureImg from '../../assect/Frame 2846 (1).png'
import oxygenImg from '../../assect/Frame 2846 (2).png'
import glucoseImg from '../../assect/Frame 2846 (3).png'
import CheckMarkImg from '../../assect/checkmark.png'
import docImg from '../../assect/Svg_sample2.png'
import OfferImg from '../../assect/small.png'
import AddImg from '../../assect/add.png'
import BannerImages from '../../assect/BannerImages.png'

import Card from './Card';
import Appointments from '../Appointments/Appointments';

const Home = () => {
    return (
        <div className=' w-full lg:h-[100%]   bg-white md:bg-[#E5E5E5] lg:flex justify-between'>
            <div className=''>
                {/* =======================================================================================
                                                    Home pages banners
                ============================================================================================
                */}
                <div className='md:px-9 '>
                    <div className='p-5 md:p-2 bg-gradient-to-r from-[#FF7594] to-[#FF7C65] w-full  rounded md:flex justify-around items-center'>
                        <img className='w-[400px]  mx-auto md:w-auto' src={BannerImages} alt="BannerImages" />
                        <div className='text-white mt-10 md:mt-10'>
                            <h1 className='text-xl font-medium'>Hello,Mosiur Islam !</h1>
                            <p>Stay Up-to-Date With Your Appointments.</p>
                            <p>You Have No pending Reports</p>
                        </div>
                    </div>
                </div>
                {/* =======================================================================================
                                                    6 card Items 
                ============================================================================================
                */}
                <div className='px-5 md:px-9 pt-7 grid grid-cols-2 md:grid-cols-4  gap-7'>
                    <Card img={heartImg} title='Pulse Count' info='60 bpm' text='Normal' color='text-green-700' />
                    <Card img={pressureImg} title='Blood Pressure' info='110/70 mmHg' text='Sightly higher' color='text-lime-700' />
                    <Card img={oxygenImg} title='Oxygen Saturation' info='97%' text='Sightly higher' color='text-lime-700' />
                    <Card img={glucoseImg} title='Glucose Count' info='100 mm/dl' text='Normal' color='text-green-700' />
                </div>
                <div className='my-20 md:hidden'>
                    <Appointments></Appointments>
                </div>
                {/* =======================================================================================
                                                Input To-Do List
                ============================================================================================
                */}
                <div className=' bg-white mt-5 mx-4  md:mx-9 rounded-md p-5 text-left lg:w-[680px] mb-12 lg:mb-0
                
                border md:border-none'>
                    <h1 className=' text-base font-medium text-neutral'>To-Do List</h1>
                    <div className=' flex mb-2  py-2 items-center  relative'>
                        <textarea className="textarea textarea-bordered bg-primary w-full resize-none border-gray-300 "  ></textarea>
                        <button className='h-8 ml-4 px-4 rounded-md bg-gradient-to-r from-[#FF7594] to-[#FF7C65] lg:flex items-center hidden  '>

                            <img src={CheckMarkImg} alt="Check Icon" />
                            <p className=' text-primary ml-2'>Add</p>
                        </button>
                        <button className='lg:hidden absolute right-0 bottom-2'>
                            <img src={AddImg} alt="add Images" />
                        </button>
                    </div>
                    <div className=' flex justify-between mb-4'>
                        <div className=' flex'>
                            <input type="checkbox" className=" mr-3 checkbox rounded checkbox-secondary" />
                            <p className=' text-sm font-medium text-neutral'>Select All</p>
                        </div>
                        <button className='h-8 ml-4 px-3 rounded-md bg-gradient-to-r from-[#FF7594] to-[#FF7C65] flex items-center'>
                            <img src={CheckMarkImg} alt="Check Icon" />
                            <p className='text-sm font-medium text-primary ml-2' >Done</p>
                        </button>
                    </div>
                    <div >
                        <div className='flex text-neutral mb-3 '>
                            <input type="checkbox" class="checkbox mr-3 rounded checkbox-secondary" />
                            <div className='md:flex'>
                                <p className=' text-sm font-medium font-neutral mr-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <p className='text-sm font-medium text-gray-400'>last Added: 10 sep 2022</p>
                            </div>
                        </div>
                        <div className=' flex text-neutral mb-3'>
                            <input type="checkbox" class="checkbox mr-3  rounded checkbox-secondary" />
                            <div className='md:flex'>
                                <p className=' text-sm font-medium font-neutral mr-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <p className='text-sm font-medium text-gray-400'>last Added: 10 sep 2022</p>
                            </div>

                        </div>
                        <div className=' flex text-neutral mb-3'>

                            <input type="checkbox" class="checkbox mr-3 rounded checkbox-secondary" />
                            <div className='md:flex'>
                                <p className=' text-sm font-medium font-neutral md:mr-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <p className='text-sm font-medium text-gray-400'>last Added: 10 sep 2022</p>
                            </div>

                        </div>
                        <div className=' flex text-neutral mb-3'>
                            <input type="checkbox" class="checkbox mr-3 rounded checkbox-secondary" />
                            <div className='md:flex'>
                                <p className=' text-sm font-medium font-neutral md:mr-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <p className='text-sm font-medium text-gray-400'>last Added: 10 sep 2022</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* =======================================================================================
                                             Upcoming   Appointments
                ============================================================================================
                */}
            <div className='mb-10 lg:mr-10'>
                <div className='w-full bg-primary md:rounded-lg lg:py-3 md:py-5  '>


                    <div className='border-4  p-4 m-4  rounded md:rounded-lg hidden md:block'>
                        <h1 className=' text-base mb-3 font-medium text-neutral text-left'>Upcoming Appointments</h1>
                        <div className=' flex items-center' >
                            <div className=' flex flex-col items-center lg:mr-6 mr-3'>
                                <div className=' h-4 w-4 rounded-full bg-[#FF9898] my-3'></div>
                                <hr className=' h-[75px] w-[1px]  bg-gray-400' />

                                <div className=' h-4 w-4 rounded-full bg-[#FFF598] my-3'></div>
                                <hr className=' h-[75px] w-[1px]  bg-gray-400' />

                                <div className=' h-4 w-4 rounded-full bg-[#98FFC1] my-3'></div>
                                <hr className=' h-[75px] w-[1px]  bg-gray-400' />

                                <div className=' h-4 w-4 rounded-full bg-[#98C7FF] my-3'></div>
                            </div>
                            <div className=' w-full'>
                                {/* ==========================  Appointments card  1 ==============================*/}
                                <div className=' flex border border-red-100 rounded-lg mb-3 '>
                                    <div className='text-sm px-5 py-1 rounded-lg  flex flex-col items-center justify-center w-[63px] '>
                                        <h1 className='  font-medium text-[#384449]  opacity-60'>2022</h1>
                                        <p className='  text-neutral'>13</p>
                                        <p className='  text-[#384449] opacity-60'>Sep</p>
                                    </div>
                                    <div className=' pl-5 w-full text-left bg-[#FFF5F5] text-sm'>
                                        <h1 className=' text-base font-medium  my-1 text-[#384449]'>Dr. Mahammad Abdul <span className='hidden md:block'>Hussein</span></h1>
                                        <p className='  font-normal text-neutral '>Cardiologist</p>
                                        <div className=' flex pb-2  justify-between mt-2 w-300px'>
                                            <div className=' flex bg-white p-1 px-2 mr-4 rounded-md items-center justify-between'>
                                                <p className=' text-sm mr-2 font-medium opacity-60 text-[#384449]'>Slot</p>
                                                <p className=' text-sm font-medium text-neutral'>Morning</p>
                                            </div>
                                            <div className=' flex bg-white p-1 px-2 rounded-md items-center justify-between'>
                                                <p className=' text-sm mr-2 font-medium opacity-60 text-[#384449]'>Time</p>
                                                <p className=' text-sm font-medium text-neutral'>10.00 AM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                  {/* ==========================  Appointments card  2 ==============================*/}
                                <div className=' flex border border-red-100 rounded-lg mb-3 '>
                                    <div className='text-sm px-5 py-1 rounded-lg  flex flex-col items-center justify-center w-[63px] '>
                                        <h1 className='  font-medium text-[#384449]  opacity-60'>2022</h1>
                                        <p className='  text-neutral'>13</p>
                                        <p className='  text-[#384449] opacity-60'>Sep</p>
                                    </div>
                                    <div className=' pl-5 w-full text-left bg-[#FFF5F5] text-sm'>
                                        <h1 className=' text-base font-medium  my-1 text-[#384449]'>Dr. Mahammad Abdul <span className='hidden md:block'>Hussein</span></h1>
                                        <p className='  font-normal text-neutral '>Cardiologist</p>
                                        <div className=' flex pb-2  justify-between mt-2 w-300px'>
                                            <div className=' flex bg-white p-1 px-2 mr-4 rounded-md items-center justify-between'>
                                                <p className=' text-sm mr-2 font-medium opacity-60 text-[#384449]'>Slot</p>
                                                <p className=' text-sm font-medium text-neutral'>Morning</p>
                                            </div>
                                            <div className=' flex bg-white p-1 px-2 rounded-md items-center justify-between'>
                                                <p className=' text-sm mr-2 font-medium opacity-60 text-[#384449]'>Time</p>
                                                <p className=' text-sm font-medium text-neutral'>10.00 AM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                  {/* ==========================  Appointments card  3 ==============================*/}
                                <div className=' flex border border-red-100 rounded-lg mb-3 '>
                                    <div className='text-sm px-5 py-1 rounded-lg  flex flex-col items-center justify-center w-[63px] '>
                                        <h1 className='  font-medium text-[#384449]  opacity-60'>2022</h1>
                                        <p className='  text-neutral'>13</p>
                                        <p className='  text-[#384449] opacity-60'>Sep</p>
                                    </div>
                                    <div className=' pl-5 w-full text-left bg-[#FFF5F5] text-sm'>
                                        <h1 className=' text-base font-medium  my-1 text-[#384449]'>Dr. Mahammad Abdul <span className='hidden md:block'>Hussein</span></h1>
                                        <p className='  font-normal text-neutral '>Cardiologist</p>
                                        <div className=' flex pb-2  justify-between mt-2 w-300px'>
                                            <div className=' flex bg-white p-1 px-2 mr-4 rounded-md items-center justify-between'>
                                                <p className=' text-sm mr-2 font-medium opacity-60 text-[#384449]'>Slot</p>
                                                <p className=' text-sm font-medium text-neutral'>Morning</p>
                                            </div>
                                            <div className=' flex bg-white p-1 px-2 rounded-md items-center justify-between'>
                                                <p className=' text-sm mr-2 font-medium opacity-60 text-[#384449]'>Time</p>
                                                <p className=' text-sm font-medium text-neutral'>10.00 AM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                  {/* ==========================  Appointments card  4 ==============================*/}
                                <div className=' flex border border-red-100 rounded-lg mb-3 '>
                                    <div className='text-sm px-5 py-1 rounded-lg  flex flex-col items-center justify-center w-[63px] '>
                                        <h1 className='  font-medium text-[#384449]  opacity-60'>2022</h1>
                                        <p className='  text-neutral'>13</p>
                                        <p className='  text-[#384449] opacity-60'>Sep</p>
                                    </div>
                                    <div className=' pl-5 w-full text-left bg-[#FFF5F5] text-sm'>
                                        <h1 className=' text-base font-medium  my-1 text-[#384449]'>Dr. Mahammad Abdul <span className='hidden md:block'>Hussein</span></h1>
                                        <p className='  font-normal text-neutral '>Cardiologist</p>
                                        <div className=' flex pb-2  justify-between mt-2 w-300px'>
                                            <div className=' flex bg-white p-1 px-2 mr-4 rounded-md items-center justify-between'>
                                                <p className=' text-sm mr-2 font-medium opacity-60 text-[#384449]'>Slot</p>
                                                <p className=' text-sm font-medium text-neutral'>Morning</p>
                                            </div>
                                            <div className=' flex bg-white p-1 px-2 rounded-md items-center justify-between'>
                                                <p className=' text-sm mr-2 font-medium opacity-60 text-[#384449]'>Time</p>
                                                <p className=' text-sm font-medium text-neutral'>10.00 AM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                {/* =========================================================
                                            Covid-19 Updates Area 
                    ========================================================= */}
                <div className=' m-4 bg-white rounded-md py-3 px-5 md:px-10 border md:border-none '>
                    <div className=' flex justify-between'>
                        <h1 className=' text-sm font-medium md:text-neutral text-[#FF7594]'>Covid-19 Updates</h1>
                        <div>
                            <h1 className=' text-sm font-medium text-neutral'>10 September 2022</h1>
                            <p className=' text-sm text-[#8A8686]'>Thursday 10:00:00 AM</p>
                        </div>
                    </div>
                    <div className=' md:flex items-center justify-between text-center'>
                        <img className='w-300px mx-auto mb-10 md:0' src={docImg} alt="Doctor images" />
                        <img className='hidden md:block' src={OfferImg} alt="Doctor images" />
                        <div className='bg-gradient-to-r from-[#FF7594] to-[#FF7C65] w-[210px] mx-auto p-2 text-center text-white rounded-md block md:hidden'>
                            <div className='mt-10'>
                                <p className=''>Infection Number</p>
                                <h1 className='text-4xl font-bold mt-4 '>500</h1>
                            </div>
                            <div className='mt-10'>
                                <p className=''>Infection Rate</p>
                                <h1 className='text-4xl font-bold mt-4 '>10%</h1>
                            </div>
                            <div className='mt-10'>
                                <p className=''>Total Infection </p>
                                <h1 className='text-4xl font-bold mt-4 '>500,000</h1>
                            </div>
                            <div className='mt-10'>
                                <p className=''> Number of Death</p>
                                <h1 className='text-4xl font-bold mt-4 '>20</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;