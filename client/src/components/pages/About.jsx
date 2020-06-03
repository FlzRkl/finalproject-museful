import React, { useState, useEffect } from 'react';

function About() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  //Not neccessary in useEffect
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      {/* {(document.title = `You clicked ${count} times`)} */}
      <button
        className='button'
        onClick={() => {
          setCount(count < 9 ? count + 1 : 0);
          setCount2(count >= 9 ? count2 + 1 : count2);
        }}
      >
        Add Version{' '}
      </button>
      <h1>About this Application</h1>
      <p>With this application you can register and Login.</p>
      <p>
        Version: 1.{count2}.{count}
      </p>
      <p>&copy; All Rights are reserved for FbW4 2020</p>
    </div>
  );
}

export default About;
