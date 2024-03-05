import React from 'react';
import Typewriter from 'typewriter-effect/dist/core'; // Import the core module

new Typewriter('#typewriter', {
  strings: ['Hello', 'World'], // Your array of text
  autoStart: true, // Start typing automatically
  loop: true, // Loop through the strings
});


const MyTypewriter = () => {
  return (
    <div id="typewriter"></div>
  );
};


export default MyTypewriter;
