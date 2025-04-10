import React from 'react';
import Header from 'src/components/Header'


const Layout = ({ children, className = '' }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className={`flex-grow ${className}`}>
                {children}
            </main>

        </div>
    );
};

export default Layout;