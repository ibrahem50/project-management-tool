import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="nav-wrapper grey darken-4">
            <div className="container">
                <Link to='/'>OurPlan</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;