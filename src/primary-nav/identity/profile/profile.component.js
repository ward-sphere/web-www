import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './profile.component.css'
import ProfileDropdown from './profile-dropdown/profile.dropdown.component';

function Profile() {
  const { user } = useAuth0();

  const [profileClicked, setProfileClicked] = useState(false);

  return (
    <div class="profileWrap">
      <div class="profile">
        <img class="profile-image" src={user.picture} onClick={ () => { setProfileClicked(!profileClicked); } }/>
      </div>
      <ProfileDropdown
        profileClicked={profileClicked}/>
    </div>
    
    
  );
}

export default Profile;