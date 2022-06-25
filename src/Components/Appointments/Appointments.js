import React from 'react';

const Appointments = () => {
    return (
        <div>
            <div className='border p-4 m-4 rounded'>
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
    );
};

export default Appointments;