import { useAuth0 } from "@auth0/auth0-react";

import './profile.dropdown.component.css'

function ProfileDropdown({ profileClicked }) {
  const { logout } = useAuth0();
  if (profileClicked) {
    return (
      <div className="dropdown-wrap">
        <div class="profile-dropdown">
          <button onClick={() => {
            logout({logoutParams: {returnTo: window.location.href}})
          }}>
            Log Out
          </button>
        </div>
      </div>

    );
  }

  return;
}

export default ProfileDropdown;