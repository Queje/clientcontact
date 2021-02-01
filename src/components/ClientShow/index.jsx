import React from 'react';
import Email from '../Email';
import PhoneNumber from '../PhoneNumber/phoneNumber';
import Picture from '../Picture';

const ClientShow = (props) => {
    const { firstName, lastName , job, phoneNumber} = props.data;
  
    return (
      <li className="card" key={props.key}>
        <div className="card-header">{firstName} {lastName}</div>
        <Picture />
        <div className="card-body">
          {job}
          <div className="cardbuttons">
            <div>
              <PhoneNumber phone={phoneNumber}/>
            </div>
            <div>
              <Email firstName={firstName} lastName={lastName}/>
            </div>
          </div>
        </div>
      </li>
    );
  };

export default ClientShow;