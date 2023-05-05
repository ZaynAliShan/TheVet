import React, { useState } from 'react';

const MyForm = () => {
  const questions = [
    'Do you like ice cream?',
    'Have you ever been to Paris?',
    'Do you prefer cats or dogs?',
    'Do you play video games?',
    'Do you watch movies often?',
    'Are you a morning person?',
    'Do you enjoy traveling?',
    'Do you like reading books?',
    'Do you cook at home?',
    'Do you exercise regularly?',
    'Are you a vegetarian?',
    'Do you enjoy outdoor activities?',
    'Have you ever gone skydiving?',
    'Do you prefer tea or coffee?',
    'Do you play any musical instruments?',
    'Do you like going to the beach?',
    'Do you enjoy attending concerts?',
    'Do you follow any sports?',
    'Are you into photography?',
    'Do you enjoy watching documentaries?'
  ];

  const [checkboxes, setCheckboxes] = useState(Array(questions.length).fill(false));
  const [textarea, setTextarea] = useState('');

  const handleCheckboxChange = (index) => (e) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = e.target.checked;
    setCheckboxes(newCheckboxes);
  };

  const handleTextareaChange = (e) => {
    setTextarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ checkboxes, textarea });
    // Process the form data here, e.g., send it to an API
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    padding: '2rem',
  };

  const headingStyles = {
    marginBottom: '1rem',
    fontWeight: 'bold',
    fontSize: '3.5rem',
  };

  const checkboxContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };

  const labelStyles = {
    fontSize: '1rem',
  };

  const textareaStyles = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '5px',
  };

  const buttonStyles = {
    backgroundColor: '#007BFF',
    color: 'white',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <h2 style={headingStyles}>Doctor: Enter Data Form</h2>
      <h3>Sympotyms</h3>
      <div style={checkboxContainerStyles}>
        {checkboxes.map((isChecked, index) => (
          <label key={index} style={labelStyles}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange(index)}
            />
            {` ${questions[index]}`}
          </label>
        ))}
      </div>
      <div>
        <label style={labelStyles}>
          Diagnose
          <textarea
            style={textareaStyles}
            value={textarea}
            onChange={handleTextareaChange}
          />
        </label>
      </div>
      <button type="submit" style={buttonStyles}>Submit</button>
    </form>
  );
};

export default MyForm;