import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <nav className="glass sticky top-0 z-50 px-4 sm:px-6 lg:px-8 shadow-sm">
            <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">
                <div className="flex-shrink-0">
                    <NavLink to='/' className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                             R
                        </div>
                        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                            SagaApp
                        </span>
                    </NavLink>
                </div>
                
                <ul className="flex space-x-2 sm:space-x-8">
                    <li>
                        <NavLink to='/' className={({isActive})=>
                            `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                isActive 
                                ? "bg-indigo-50 text-indigo-700 shadow-sm" 
                                : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                            }`
                        }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='users' className={({isActive})=>
                            `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                isActive 
                                ? "bg-indigo-50 text-indigo-700 shadow-sm" 
                                : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                            }`
                        }>
                            UserList
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;