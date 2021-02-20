import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';

const Navbar = () => {
    return ( 
        <nav className="nav-wrapper grey darken-4">
            <div className="container">
                <Link to='/'>OurPlan</Link>
                <SignedInLinks />
            </div>
        </nav>
     );
}
 
export default Navbar;