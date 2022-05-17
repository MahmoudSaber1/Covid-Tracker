import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark p-2 text-center d-flex align-items-center justify-content-center">
            {/* Footer Using Bootstrap 5 class */}
            <footer className="footer">
                <div className="container">
                    <span className="text-muted fs-4">
                        <p style={{ color: 'white', margin: '0' }}>
                            All Rights Reserved &copy;
                            {new Date().getFullYear()} Covid Tracker
                        </p>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
