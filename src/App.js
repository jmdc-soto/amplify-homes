import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import { CustomerListCollection } from './ui-components';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className='App'>
          <h1>Hello {user.username}</h1>
          <CustomerListCollection />
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;