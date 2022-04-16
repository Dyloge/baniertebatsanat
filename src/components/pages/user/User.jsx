import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import PublishRoundedIcon from '@mui/icons-material/PublishRounded';
import { Link } from 'react-router-dom';
import './user.css';

export default function User() {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/newUser'>
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img
              src={require('../../../assests/images/profile.jpeg').default}
              alt=''
              className='userShowImg'
            />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Amir Najafi</span>
              <span className='userShowUserTitle'>Web Developer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentityRoundedIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>dyloge</span>
            </div>
            <div className='userShowInfo'>
              <CalendarTodayRoundedIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>26.01.1982</span>
            </div>
            <span className='userShowTitle'>Contact Details</span>
            <div className='userShowInfo'>
              <PhoneAndroidRoundedIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>+48 884 884 884</span>
            </div>
            <div className='userShowInfo'>
              <MailOutlineRoundedIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>dyloge@gmail.com</span>
            </div>
            <div className='userShowInfo'>
              <LocationOnRoundedIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>Krakow | Poland</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input
                  type='text'
                  placeholder='dyloge'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Full Name</label>
                <input
                  type='text'
                  placeholder='Amir Najafi'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Email</label>
                <input
                  type='text'
                  placeholder='dyloge@gmail.com'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Phone</label>
                <input
                  type='text'
                  placeholder='+48 884 884 884'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Address</label>
                <input
                  type='text'
                  placeholder='Krakow | Poland'
                  className='userUpdateInput'
                />
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img
                  className='userUpdateImg'
                  src={require('../../../assests/images/profile.jpeg').default}
                  alt=''
                />
                <label htmlFor='file'>
                  <PublishRoundedIcon className='userUpdateIcon' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
