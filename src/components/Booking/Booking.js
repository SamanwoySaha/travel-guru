import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookingContext, JourneyContext } from '../../App';
import './Booking.css';

const Booking = () => {
    const [proceedToBooking, setProceedToBooking] = useContext(BookingContext);
    const [selectedPlace, setSelectedPlace] = useContext(JourneyContext);
    return (
        <div className="ml-auto booking">
            <form>
                <div className="form-field">
                    <label for="origin">Origin</label>
                    <input className="form-control" type="text" name="origin" id="origin" placeholder="Dhaka" required/>
                </div>
                <div className="form-field">
                    <label for="destination">Destination</label>
                    <input className="form-control" type="text" name="destination" id="destination" placeholder={selectedPlace} required/>
                </div>
                <div className="d-flex">
                    <div className="form-field">
                        <label for="from">From</label>
                        <br />
                        <img src="https://i.ibb.co/DWfL7zK/calender-icon.png" alt="calender-icon" />
                        <input className="form-control" type="text" name="from" id="from" placeholder="01/10/20" required/>
                    </div>
                    <div className="form-field ml-auto">
                        <label for="to">To</label>
                        <br />
                        <img src="https://i.ibb.co/DWfL7zK/calender-icon.png" alt="calender-icon" />
                        <input className="form-control" type="text" name="to" id="to" placeholder="02/11/20" required/>
                    </div>
                </div>
                <Link to="/hotel"><input className="booking-btn" type="submit" value="Start Booking"/></Link>
            </form>
        </div>
    );
};

export default Booking;