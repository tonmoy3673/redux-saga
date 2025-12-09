import { NavLink } from "react-router";


const Navbar = () => {
    return (
        <div className="flex py-3 mt-2 justify-between">
           <NavLink to='/'  className="hover:text-amber-600 font-semibold text-xl">
             UserList 
           </NavLink>
           <ul className="flex gap-5 mx-auto">
            <NavLink to='/' className={({isActive})=>
            ` hover:text-amber-600 font-semibold ${isActive ? "text-blue-500" : "text-black"}`
        }>
                Home
            </NavLink>
             <NavLink to='users' className={({isActive})=>
            `hover:text-amber-600 font-semibold ${isActive ? "text-blue-500" : "text-black"}`
            }>
                UserList
            </NavLink>
           </ul>
        </div>
    );
};

export default Navbar;