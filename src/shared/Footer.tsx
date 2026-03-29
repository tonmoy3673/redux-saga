const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <p className="text-slate-500 text-sm font-medium tracking-wide">
                    &copy; {new Date().getFullYear()} SagaApp. All rights reserved.
                </p>
                <div className="mt-4 flex space-x-6 text-slate-400 text-sm font-medium">
                    <span className="hover:text-indigo-500 cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="hover:text-indigo-500 cursor-pointer transition-colors">Terms of Service</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;