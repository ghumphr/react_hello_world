// written by Google Gemini, use with caution!

import React, { useState } from 'react';

function ClickMeButton() {
  const [buttonText, setButtonText] = useState('Click here');

  const handleClick = () => {
    setButtonText('Hello from React!');
  };

  return (
    <button onClick={handleClick}>{buttonText}</button>
  );
}

export default ClickMeButton;
