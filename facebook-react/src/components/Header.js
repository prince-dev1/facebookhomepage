import React from 'react';

const Header = () => {
    return (
        <header className="bg-primary text-white p-3">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="h3">Facebook</h1>
                <nav>
                    <ul className="nav">
                        <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#">About</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;