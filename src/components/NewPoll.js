import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAddQuestion } from '../actions/shared';
import '../static/NewPoll.css'; // Import the custom CSS file

function NewPoll() {
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (optionOneText.trim() && optionTwoText.trim()) {
      dispatch(
        handleAddQuestion({
          optionOneText,
          optionTwoText,
          author: authedUser,
        })
      );
      navigate('/');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Create New Poll:</h2>
      <div className="card p-4 shadow-sm">
        <span className='poll-title'>Would you Rather?</span>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="optionOne">Option One</label>
            <input
              type="text"
              id="optionOne"
              className="form-control"
              value={optionOneText}
              onChange={(e) => setOptionOneText(e.target.value)}
              placeholder="Enter Option One Text"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="optionTwo">Option Two</label>
            <input
              type="text"
              id="optionTwo"
              className="form-control"
              value={optionTwoText}
              onChange={(e) => setOptionTwoText(e.target.value)}
              placeholder="Enter Option Two Text"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={!optionOneText || !optionTwoText}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewPoll;
