import React from 'react';

const Email = (props) => (
    <a className="btn btn-primary" href={`mailto:${props.firstName.toLowerCase()}.${props.lastName.toLowerCase()}@gmail.com`}>Envoyer un message</a>
);

export default Email;