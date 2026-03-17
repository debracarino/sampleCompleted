import  { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return(
    <nav>
        <ul className="navUl">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/wishlist">View Wishlist</Link></li>
          <li><Link to="/additem">Add an Item</Link></li>
          <li><Link to="/edititem">Edit an Item</Link></li>
          <li><Link to="/category">View Item Categories</Link></li>
        </ul>
    </nav>
    )
}

export default Nav;