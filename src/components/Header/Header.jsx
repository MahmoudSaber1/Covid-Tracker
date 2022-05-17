import React from 'react';

const Header = ({ img, title, text, styles }) => {
    return (
        <div style={{ boxShadow: '0px 0px 10px #ccc' }} className="h-100">
            {/* Bootstrap 5 Card */}
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="1" />
                <div className="card-body">
                    <h5 className={styles}>{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
