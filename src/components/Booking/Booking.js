import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookingContext, JourneyContext } from '../../App';
import './Booking.css';
import DatePicker from 'react-datepicker';

const Booking = () => {
    const [proceedToBooking, setProceedToBooking] = useContext(BookingContext);
    const [selectedPlace, setSelectedPlace] = useContext(JourneyContext);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="ml-auto booking">
            <form>
                <div className="form-field">
                    <label for="origin">Origin</label>
                    <input className="form-control input-box" type="text" name="origin" id="origin" placeholder="Dhaka" required />
                </div>
                <div className="form-field">
                    <label for="destination">Destination</label>
                    <input className="form-control input-box" type="text" name="destination" id="destination" placeholder={selectedPlace} required />
                </div>
                <div className="d-flex align-items-space-between date-picker">
                    <div className="form-field">
                        <label for="from">From</label>
                        <br />
                        <div className="input-box d-flex">
                            <DatePicker className="date-input" selected={startDate} onChange={date => setStartDate(date)} />
                            <img className="calender-icon" src="https://i.ibb.co/DWfL7zK/calender-icon.png" alt="calender-icon" />
                        </div>
                    </div>
                    <div className="form-field">
                        <label for="to">To</label>
                        <br />
                        <div className="input-box d-flex">
                            <DatePicker className="date-input" selected={endDate} onChange={date => setEndDate(date)} />
                            <img className="calender-icon" src="https://i.ibb.co/DWfL7zK/calender-icon.png" alt="calender-icon" />
                        </div>
                    </div>
                </div>
                <Link to="/hotel"><input className="booking-btn" type="submit" value="Start Booking" /></Link>
            </form>
        </div>
    );
};

export default Booking;