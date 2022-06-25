import React, { useState } from 'react';
import { BiHistory, BiUser } from 'react-icons/bi';
import { BsCalendar2Plus } from 'react-icons/bs';
import { FiHome } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const MobailMenu = () => {
    const [show, setShow] = useState(true);

    return (
        <div class="drawer">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
            
            </div>
            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-red-300">
                    <h1>Thi ismodiu r</h1>
                </ul>
            </div>
        </div>
    );
};

export default MobailMenu;