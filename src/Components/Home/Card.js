import React from 'react';
import ArrowUp from '../../assect/ArrowUp.png'

const Card = (props) => {
    const color = props.color;
    console.log(color);
    return (
        <div className=' bg-white p-3 w-[157.11px] mx-auto md:w-[151px] h-[153px] md:h-[
                147.58px] rounded-md shadow-lg md:shadow-md'>
            <img src={props.img} alt="images" />
            <h1 className=' font-semibold text-sm text-left mt-2 text-neutral'>{props.title}</h1>
            <p className=' text-base font-medium text-[#4A3D3F] text-left my-2'>{props.info}</p>
            <div className=' flex items-center'>
                <img src={ArrowUp} alt="Arrow up" />
                <p className={`${color} ml-2 text-sm font-medium`}>{props.text}</p>
            </div>
        </div>
    );
};

export default Card;