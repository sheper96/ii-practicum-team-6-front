import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useUser } from '../components/UserContext';
import UserDropdown from '../components/UserDropdown';


const Layout = ({ children, className = '' }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className={`flex-grow ${className}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
