import React from 'react';
//COMPONENTS
import SideBar_row from "../components/SibeBar_row";
//icons

import {ChevronDownIcon, UserGroupIcon, ShoppingBagIcon } from "@heroicons/react/outline";

import {CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon} from "@heroicons/react/solid";


function SideBar() {

    return (

        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            

            <SideBar_row src="https://gazettereview.com/wp-content/uploads/2016/03/facebook-avatar.jpg" title="Kennedy Devs"/>
            <SideBar_row Icon={UsersIcon} title="Friends"/>
            <SideBar_row Icon={UserGroupIcon} title="Groups"/>
            <SideBar_row Icon={ShoppingBagIcon} title="MarketPlace"/>
            <SideBar_row Icon={DesktopComputerIcon} title="Watch"/>
            <SideBar_row Icon={CalendarIcon} title="Events"/>
            <SideBar_row Icon={ClockIcon} title="Memories"/>
            <SideBar_row Icon={ChevronDownIcon} title="See More"/>
        </div>
    )
}

export default SideBar;
