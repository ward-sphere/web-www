import { Link } from "react-router";
import IdentityContext from './identity/identity.context.component';
import './primary-nav.component.css'

function PrimaryNav() {
    return (
        <div class="PrimaryNav">
            <div class="PrimaryNav-content">
                <div class="PrimaryNav-logo">
                    <Link to="/">
                        <img src="/logo48.png" alt="logo" />
                    </Link>
                </div>
                <div class="PrimaryNav-links">
                    <Link to="/education"><button>Education</button></Link>
                    <Link to="/work"><button>Work</button></Link>
                </div>
                <div class="PrimaryNav-identity">
                    <IdentityContext/>
                </div>
            </div>
        </div>
    );
}

export default PrimaryNav;