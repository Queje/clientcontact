import React from 'react';

const PhoneNumber = (props) => (
    <a className="btn btn-primary" href={`callto:${props.phone}`}>Appeler</a>
);

export default PhoneNumber;