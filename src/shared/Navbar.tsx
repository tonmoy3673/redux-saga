import { NavLink } from "react-router";


const Navbar = () => {
    return (
        <div className="flex">
           <nav>
             UserList 
           </nav>
           <ul>
            <NavLink to='/'>
                Home
            </NavLink>
             <NavLink to='users'>
                UserList
            </NavLink>
           </ul>
        </div>
    );
};

export default Navbar;