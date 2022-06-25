import React from 'react';
import bannarImg from '../../assect/Frame 4.png'
import heartImg from '../../assect/Frame 2846.png'
import pressureImg from '../../assect/Frame 2846 (1).png'
import oxygenImg from '../../assect/Frame 2846 (2).png'
import glucoseImg from '../../assect/Frame 2846 (3).png'
import CheckMarkImg from '../../assect/checkmark.png'
import docImg from '../../assect/Svg_sample2.png'
import OfferImg from '../../assect/small.png'
import AddImg from '../../assect/add.png'

import Card from './Card';

const Home = () => {
    return (
        <div className=' w-full lg:h-[89vh] h-fit bg-[#E5E5E5] lg:flex  block  justify-between'>
            <div className=''>
                <div className=' px-9'>
                    <img className='mt-[-6px]' src={bannarImg} alt="Bannar Image" />
                </div>
                <div className=' px-9 pt-7 flex justify-between items-center'>
                    <Card img={heartImg} title='Pulse Count' info='60 bpm' text='Normal' color='text-green-700' />
                    <Card img={pressureImg} title='Blood Pressure' info='110/70 mmHg' text='Sightly higher' color='text-lime-700' />
                    <Card img={oxygenImg} title='Oxygen Saturation' info='97%' text='Sightly higher' color='text-lime-700' />
                    <Card img={glucoseImg} title='Glucose Count' info='100 mm/dl' text='Normal' color='text-green-700' />
                </div>


                <div className=' bg-white mt-5 mx-9 rounded-md p-5 text-left lg:w-[718px] mb-12 lg:mb-0'>
                    <h1 className=' text-base font-medium text-neutral'>To-Do List</h1>
                    <div className=' flex mb-2  py-2 items-center  relative'>
                        <textarea className="textarea textarea-bordered bg-primary w-full resize-none border-gray-300 "  ></textarea>
                        <button className='h-8 ml-4 px-4 rounded-md bg-gradient-to-r from-[#FF7594] to-[#FF7C65] lg:flex items-center hidden  '>

                            <img src={CheckMarkImg} alt="Check Icon" />
                            <p className=' text-primary ml-2'>Add</p>
                        </button>
                        <button className='lg:hidden absolute right-0 bottom-2'>
                            <img src={AddImg} alt="add Image" />
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
                        <div className='flex text-neutral mb-3'>
                            <input type="checkbox" class="checkbox mr-3 rounded checkbox-secondary" />
                            <p className=' text-sm font-medium font-neutral mr-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <p className='text-sm font-medium text-gray-400'>last Added: 10 sep 2022</p>
                        </div>
                        <div className=' flex text-neutral mb-3'>
                            <input type="checkbox" class="checkbox mr-3 rounded checkbox-secondary" />
                            <p className=' text-sm font-medium font-neutral mr-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <p className='text-sm font-medium text-gray-400'>last Added: 10 sep 2022</p>
                        </div>
                        <div className=' flex text-neutral mb-3'>
                            <input type="checkbox" class="checkbox mr-3 rounded checkbox-secondary" />
                            <p className=' text-sm font-medium font-neutral mr-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <p className='text-sm font-medium text-gray-400'>last Added: 10 sep 2022</p>
                        </div>
                        <div className=' flex text-neutral mb-3'>
                            <input type="checkbox" class="checkbox mr-3 rounded checkbox-secondary" />
                            <p className=' text-sm font-medium font-neutral mr-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <p className='text-sm font-medium text-gray-400'>last Added: 10 sep 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' lg:mr-10 mx-10 mb-10'>
                <div className='w-full bg-primary rounded-md lg:py-3 md:py-5 px-10 '>
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
                            <div className=' flex border border-red-100 rounded-lg mb-3 w-full'>
                                <div className=' px-5 py-1 rounded-lg  flex flex-col items-center justify-center w-[]63px'>
                                    <h1 className='  font-medium text-[#384449] text-sm opacity-60'>2022</h1>
                                    <p className=' text-2xl text-neutral font-semibold'>13</p>
                                    <p className=' text-xl font-medium text-[#384449] opacity-60'>Sep</p>
                                </div>
                                <div className=' pl-5 w-full text-left bg-[#FFF5F5] '>
                                    <h1 className=' text-base font-medium  my-1 text-[#384449]'>Dr. Mahammad Abdul Hussein</h1>
                                    <p className=' text-sm font-normal text-neutral '>Cardiologist</p>
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
                            <div className=' flex border border-red-100 rounded-lg mb-3'>
                                <div className=' px-5 py-1 rounded-lg  flex flex-col items-center justify-center'>
                                    <h1 className='  font-medium text-[#384449] text-sm opacity-60'>2022</h1>
                                    <p className=' text-2xl text-neutral font-semibold'>13</p>
                                    <p className=' text-xl font-medium text-[#384449] opacity-60'>Sep</p>
                                </div>
                                <div className=' pl-5 w-full text-left bg-[#FFF5F5]'>
                                    <h1 className=' text-base font-medium  my-1 text-[#384449]'>Dr. Mahammad Abdul Hussein</h1>
                                    <p className=' text-sm font-normal text-neutral '>Cardiologist</p>
                                    <div className=' flex pb-2  justify-between mt-2'>
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

                            <div className=' flex border border-red-100 rounded-lg mb-3'>
                                <div className=' px-5 py-1 rounded-lg  flex flex-col items-center justify-center'>
                                    <h1 className='  font-medium text-[#384449] text-sm opacity-60'>2022</h1>
                                    <p className=' text-2xl text-neutral font-semibold'>13</p>
                                    <p className=' text-xl font-medium text-[#384449] opacity-60'>Sep</p>
                                </div>
                                <div className=' pl-5 w-full text-left bg-[#FFF5F5]'>
                                    <h1 className=' text-base font-medium  my-1 text-[#384449]'>Dr. Mahammad Abdul Hussein</h1>
                                    <p className=' text-sm font-normal text-neutral '>Cardiologist</p>
                                    <div className=' flex pb-2  justify-between mt-2'>
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

                            <div className=' flex border border-red-100 rounded-lg '>
                                <div className=' px-5 py-1 rounded-lg  flex flex-col items-center justify-center'>
                                    <h1 className='  font-medium text-[#384449] text-sm opacity-60'>2022</h1>
                                    <p className=' text-2xl text-neutral font-semibold'>13</p>
                                    <p className=' text-xl font-medium text-[#384449] opacity-60'>Sep</p>
                                </div>
                                <div className=' pl-5 w-full text-left bg-[#FFF5F5]'>
                                    <h1 className=' text-base font-medium  my-1 text-[#384449]'>Dr. Mahammad Abdul Hussein</h1>
                                    <p className=' text-sm font-normal text-neutral '>Cardiologist</p>
                                    <div className=' flex pb-2  justify-between mt-2'>
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
                <div className=' mt-3 bg-white rounded-md py-3 px-10'>
                    <div className=' flex justify-between'>
                        <h1 className=' text-sm font-medium text-neutral'>Covid-19 Updates</h1>
                        <div>
                            <h1 className=' text-sm font-medium text-neutral'>10 September 2022</h1>
                            <p className=' text-sm text-[#8A8686]'>Thursday 10:00:00 AM</p>
                        </div>
                    </div>
                    <div className=' flex items-center justify-between'>
                        <img src={docImg} alt="Doctor image" />
                        <img src={OfferImg} alt="Doctor image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;