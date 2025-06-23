import LoginButton from './login/login.component';

import './primary-nav.component.css'

function PrimaryNav() {
    return (
        <div class="PrimaryNav">
            <div class="PrimaryNav-content">
                <div class="PrimaryNav-logo">
                    <LoginButton />
                </div>
                <div class="PrimaryNav-links"></div>
            </div>
        </div>
    );
}

export default PrimaryNav;