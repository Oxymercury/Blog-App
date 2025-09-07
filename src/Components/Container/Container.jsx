import React from 'react'

// here we are making only container for styling purpose as we will just send the other components as a probs basically we are follwing decoupling system so that every thing remain single responsiblity principle 
function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
}

export default Container