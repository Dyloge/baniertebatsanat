import React from 'react';
import './topbar.css';
import HandymanIcon from '@mui/icons-material/Handyman';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import Profile from '../../assests/images/profile.jpeg';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <HandymanIcon sx={{ color: '#FE5161' }} fontSize='large' />
          <span className='brand'>Bani-Ertebat Dashboard</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <CircleNotificationsIcon fontSize='large' />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <LanguageIcon fontSize='large' />
          </div>
          <div className='topbarIconContainer'>
            <SettingsIcon fontSize='large' />
          </div>
          <img src={Profile} alt='profile_picture' className='topAvatar' />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
