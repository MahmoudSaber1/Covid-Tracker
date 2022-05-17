import React from 'react';
import images from '../../images';
import { Footer, Header, Navbar } from '../../components';
import { Link } from 'react-router-dom';

const Home = () => {
    const data = [
        {
            id: 1,
            img: images[1],
            title: 'Covid-19 Tracker',
            text: ' Covid 19 Tracker is a website to track the number of injuries, deaths and cases treated, in the world, in the last 14 days.',
            styles: 'card-title badge bg-danger fs-6',
        },

        {
            id: 2,
            img: images[2],
            title: 'What is Covid-19?',
            text: 'Covid-19 is a disease that affects the lungs and the upper respiratory tract. It is caused by a virus that can be transmitted through the air.',
            styles: 'card-title badge bg-success fs-6',
        },

        {
            // Covid 19
            id: 3,
            img: images[3],
            title: 'Symptoms',
            text: 'The symptoms of Covid-19 are fever, cough, shortness of breath, and breathing difficulties.',
            styles: 'card-title badge bg-primary fs-6',
        },
    ];

    return (
        <>
            <Navbar />
            {/* Home Page */}
            <div style={{ minHeight: '100vh' }}>
                <div
                    style={{
                        padding: '50px 0',
                        display: 'flex',
                        gap: '20px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                    className="container"
                >
                    {/* Loop For Data */}
                    {data.map((item) => {
                        return (
                            <Header
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                text={item.text}
                                styles={item.styles}
                            />
                        );
                    })}
                    {/* button Redirect to covid tracker */}
                </div>

                <div
                    style={{
                        width: 'fit-content',
                        margin: '10px auto',
                    }}
                >
                    <Link
                        to="/covid-tracker"
                        style={{ textDecoration: 'none' }}
                    >
                        <span className="text-denger">
                            <button
                                className="btn btn-outline-danger"
                                style={{
                                    padding: '10px',
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <i className="fas fa-arrow-right me-2"></i>
                                See Details of Covid-19
                            </button>
                        </span>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
