import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import SidebarOption from './SidebarOption';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* tritter icon */}
            <TwitterIcon className="sidebar__twitterIcon"/>

            {/* Sidebar options */}
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="Notifications"/>
            <SidebarOption Icon={EmailOutlinedIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltOutlinedIcon} text="Lists"/>
            <SidebarOption Icon={PersonOutlineOutlinedIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizOutlinedIcon} text="More"/>


            {/* tweet button */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar;
