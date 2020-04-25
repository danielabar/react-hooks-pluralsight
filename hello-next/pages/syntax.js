import React, { useEffect, useState } from 'react';

const Syntax = () => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  useEffect(() => {
    // this will run when component starts
    console.log('in useEffect');
    // function returned will run when component ends
    return () => {
      console.log('in useEffect Cleanup');
    };
  }, [checkBoxValue]);

  return <div></div>;
};

export default Syntax;
