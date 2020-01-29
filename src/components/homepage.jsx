import React from 'react';
import FormField from './subcomponents/formField';
import NavBar from './subcomponents/navBar';

const Homepage = () => {
  return(
    <>
      <h2>BugTracker</h2>
      <NavBar />
      <FormField />
    </>
  )
}

export default Homepage;
