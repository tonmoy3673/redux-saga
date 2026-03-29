import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />
            <main className="flex-1 w-full max-w-[1400px] mx-auto pb-12">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;