import React, { createContext, useState } from 'react';

// Named export for context
export const SigninStatusContext = createContext();

function SigninStatusProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <SigninStatusContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </SigninStatusContext.Provider>
  );
}

// Default export for provider component
export default SigninStatusProvider;
