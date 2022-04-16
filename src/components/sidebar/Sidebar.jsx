import './sidebar.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SwitchRightIcon from '@mui/icons-material/SwitchRight';
import EdgesensorHighIcon from '@mui/icons-material/EdgesensorHigh';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <Link to='/' className='link'>
              <li className='sidebarListItem active'>
                <HomeIcon className='sidebarIcon ' fontSize='large' />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <Link to='/users' className='link'>
              <li className='sidebarListItem'>
                <EdgesensorHighIcon className='sidebarIcon' fontSize='large' />
                Sensors
              </li>
            </Link>
            <Link to='/products' className='link'>
              <li className='sidebarListItem'>
                <SwitchRightIcon className='sidebarIcon' fontSize='large' />
                Actors
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
