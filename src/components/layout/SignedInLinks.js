import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = ({signOut}) => {
    return ( 
        <ul className="right">
            <li><NavLink to = '/create'>NewProject</NavLink></li>
            <li><a href="/#" onClick={signOut}>Log Out</a></li>
            <li><NavLink to = '/' className='btn btn-floating pink lighten-1'>HH</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signOut: () => dispatch(signOut())
    }
}
 
export default connect(null,mapDispatchToProps)(SignedInLinks);