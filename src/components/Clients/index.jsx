import React from 'react';
import faker from 'faker';
import ClientShow from '../ClientShow'

const Clients = () => {
    const clientsList = Array.from({ length: 100 }, () => ({
			id: faker.random.uuid(),
      firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			phoneNumber: faker.phone.phoneNumber(),
			job: faker.name.jobTitle(),
    }));
  
    console.log(clientsList);
  
    return (
			<ul>
				{clientsList.map((clientData) => (
					<ClientShow data={clientData} key={clientData.id} />
				))}
    	</ul>
    );
  };
  
  export default Clients;