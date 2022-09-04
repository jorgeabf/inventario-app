import { Link } from "react-router-dom";

const Menu = () => {
   return (
      <nav className="menu">
         <Link
            to="/"
            className="menu-link">
            Home
         </Link>
         <Link
            to="register"
            className="menu-link">
            Register
         </Link>
      </nav>
   );
};

export default Menu;
