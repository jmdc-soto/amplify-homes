import './App.css';
import { useState, useEffect } from 'react';

import { Authenticator } from '@aws-amplify/ui-react';
import { Input, CustomerList } from './ui-components';
import '@aws-amplify/ui-react/styles.css';

import { Customer } from './models';
import { DataStore } from 'aws-amplify';

function App() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const getCustomers = async () => {
    const data = await DataStore.query(Customer);
    setCustomers(data);
    console.log('getCustomer:',customers);
  };

  const Fetch = () => {
    const reqOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({Value1:5,Value2:2})
    };
    fetch('https://alma97urpa.execute-api.ap-northeast-1.amazonaws.com/dev', reqOption)
    .then(response => response.json())
    .then(data => setName(data.body));
    
  }

  useEffect(() => {
    getCustomers();
  }, []);
  
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className='App'>
          <h1>Hello {user.username} {name}</h1>
          <div>
            {customers.map((customer) =>(
              <CustomerList 
                customer={customer}
                key={customer.id}
                onClick={ () => { setName(customer.name) } }
                overrides={{
                   'Button': { onClick: () => { Fetch() } }
                }}
              />
            ))}
          </div>
          <div>
          </div>
          <button onClick={signOut}>Sign Out</button>
          <Input overrides={{'Button': {children: name}}}/>
        </div>
      )}

    </Authenticator>
  );
}

export default App;