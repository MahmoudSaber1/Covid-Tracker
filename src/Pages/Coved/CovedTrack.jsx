import React from 'react';
import { fetchData } from '../../api';
import { Cards, Chart, CountryPicker, Footer, Navbar } from '../../components';
import styles from './CovedTrack.module.css';
import image from '../../images';

class CovedTrack extends React.Component {
    state = {
        data: {},
        country: '',
    };

    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({ data, country: country });
    };

    render() {
        const { data, country } = this.state;

        return (
            <>
                <Navbar />
                <div className={styles.container}>
                    <img
                        className={styles.image}
                        src={image[5]}
                        alt="COVID-19"
                    />
                    <Cards data={data} />
                    <CountryPicker
                        handleCountryChange={this.handleCountryChange}
                    />
                    <Chart data={data} country={country} />
                </div>
                <Footer />
            </>
        );
    }
}

export default CovedTrack;
