import { NavLink } from "react-router";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-100 bg-indigo-50 text-indigo-600 mb-8 font-medium text-sm">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2 animate-pulse"></span>
                Now using Redux Saga
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 w-full max-w-[900px]">
                Manage your users with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">elegance</span>
            </h1>
            
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mb-10">
                A beautiful, responsive demonstration of state management handling asynchronous operations flawlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <NavLink to="/users" className="px-8 py-4 rounded-xl font-semibold bg-indigo-600 text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300">
                    View Users
                </NavLink>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-xl font-semibold bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm flex items-center justify-center">
                    Source Code
                </a>
            </div>
        </div>
    );
};

export default Home;