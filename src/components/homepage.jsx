import React from 'react';
import FormField from './subcomponents/formField';

const Homepage = () => {
  return(
    <>
      <h2>BugTracker</h2>
      <ul>
        <li>Create New</li>
        <li>View Open</li>
      </ul>
      <FormField />
    </>
  )
}

export default Homepage;
