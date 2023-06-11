import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import {addData} from "../services/api";
import { useNavigate } from "react-router-dom";
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

  let navigate = useNavigate();
  const { id } = useParams();
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const [textarea, setTextarea] = useState('');
  

  const handleCheckboxChange = (question) => (e) => {
    if (e.target.checked) {
      setSelectedQuestions((prevQuestions) => [...prevQuestions, question]);
    } else {
      setSelectedQuestions((prevQuestions) =>
      //for every element in prequest array it will check condition selectedQuestion !== question
        prevQuestions.filter((selectedQuestion) => selectedQuestion !== question)
      );
    }
  };

  const handleTextareaChange = (e) => {
    setTextarea(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(selectedQuestions.length===0 && textarea==="")
    {
      alert("select check boxes or write something in text area");
    }
    else{
      console.log(selectedQuestions.length)
      const questionArray = selectedQuestions;
      if(textarea!="")
      {
        questionArray.push(textarea);
      }
      const data = {questionArray, id };
      await addData(data);
      navigate("/doctorDashboard/myAppointment");
      
    }
    
    
  };

  const formStyles = {
    display: 'flex',
    height:'100vh',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem', // increased gap
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '3rem', // increased padding
};

const headingStyles = {
    marginBottom: '2rem', // increased margin-bottom
    fontWeight: 'bold',
    fontSize: '4rem', // increased font size
};

  const checkboxContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };

  const labelStyles = {
    fontSize: '1.5rem', // increased font size
};

const textareaStyles = {
    width: '100%',
    padding: '1rem', // increased padding
    borderRadius: '5px',
    fontSize: '1.5rem', // increased font size
};

const buttonStyles = {
    backgroundColor: '#007BFF',
    color: 'white',
    borderRadius: '5px',
    padding: '1rem 2rem', // increased padding
    fontSize: '1.5rem', // increased font size
    cursor: 'pointer',
};
  return (
    <>
    <form onSubmit={handleSubmit} style={formStyles}>
      <h2 style={headingStyles}>Doctor: Enter Data Form</h2>
      <h3>Sympotyms </h3>
      <div style={checkboxContainerStyles}>
      {questions.map((question, index) => {
          const isChecked = selectedQuestions.includes(question);
          return (
            <label key={index} style={labelStyles}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange(question)}
              />
              {` ${question}`}
            </label>
          );
        })}
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
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </>
  );
};

export default MyForm;