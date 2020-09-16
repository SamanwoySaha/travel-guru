import React from 'react';
import './Booking.css';

const Booking = () => {
    return (
        <div className="ml-auto booking">
            <form>
                <div className="form-field">
                    <label for="origin">Origin</label>
                    <input className="form-control" type="text" name="origin" id="origin" placeholder="Dhaka" />
                </div>
                <div className="form-field">
                    <label for="destination">Destination</label>
                    <input className="form-control" type="text" name="destination" id="destination" placeholder="Dhaka" />
                </div>
                <div className="d-flex">
                <div className="form-field">
                    <label for="from">From</label>
                    <br/>
                    <input className="form-control" type="text" name="from" id="from" placeholder="Dhaka" />
                </div>
                <div className="form-field">
                    <label for="to">To</label>
                    <br/>
                    <input className="form-control" type="text" name="to" id="to" placeholder="Dhaka" />
                </div>
                </div>
            </form>
        </div>
    );
};

export default Booking;