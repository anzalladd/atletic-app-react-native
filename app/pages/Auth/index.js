import React from 'react';
import Auth from './Auth';
import AuthProvider from '../../context/Auth/AuthContext';

const App = props => {
  return (
    <AuthProvider>
      <Auth router={props} />
    </AuthProvider>
  );
};

export default App;
