import React, { useContext } from 'react';
import HotelDetail from '../HotelDetail/HotelDetail';
import './Hotel.css';
import Container from 'react-bootstrap/Container';
import { JourneyContext } from '../../App';
import fakeData from '../../fakeData/fakeData';
import Location from '../Location/Location';

const Hotel = () => {
    const [selectedPlace, setSelectedPlace] = useContext(JourneyContext);
    return (
        <Container className="hotel px-0 d-flex">
            <div className="col-md-7">
                {
                    fakeData.filter(item => item.place === selectedPlace).map(item => {
                        return (
                            <>
                                <p className="sub-heading">{item.stays} stays {item.date}</p>
                                <h2 className="heading">Stays in {item.place}</h2>
                                {
                                    item.hotel.map(hotel => <HotelDetail hotel={hotel}></HotelDetail>)
                                }
                            </>
                        );
                    })
                }
            </div>
            <Location className="col-md-3 ml-4"></Location>
        </Container>
    );
};

export default Hotel;