import IdentityContext from './identity/identity.context.component';
import './primary-nav.component.css'

function PrimaryNav() {
    return (
        <div class="PrimaryNav">
            <div class="PrimaryNav-content">
                <div class="PrimaryNav-logo">
                    <img src="/logo48.png" alt="logo" />
                </div>
                <div class="PrimaryNav-links"></div>
                <div class="PrimaryNav-identity">
                    <IdentityContext/>
                </div>
            </div>
        </div>
    );
}

export default PrimaryNav;