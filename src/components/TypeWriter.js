import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriter = () => {
  return (
    <h1>
      <span style={{ fontSize: '40px' }}> Hello </span>
      <span style={{ color: '#2366a6', fontSize: '40px' }}>
        <Typewriter
          words={['World', 'ECRI-44', 'Developers!']}
          loop={10}
          cursor
          cursorStyle="<"
          typeSpeed={50}
          deleteSpeed={35}
          delaySpeed={900}
        />
      </span>
    </h1>
  );
};

export default TypeWriter;
