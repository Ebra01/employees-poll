import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveAnswer } from '../actions/questions';

function PollVote({ id }) {
  const question = useSelector((state) => state.questions[id]);
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);

  const handleVote = () => {
    dispatch(saveAnswer({
      authedUser,
      qid: id,
      answer: selectedOption,
    }));
  };

  return (
    <div>
      <div>
        <input type="radio" id="optionOne" name="option" value="optionOne" onChange={(e) => setSelectedOption(e.target.value)} />
        <label htmlFor="optionOne">{question.optionOne.text}</label>
      </div>
      <div>
        <input type="radio" id="optionTwo" name="option" value="optionTwo" onChange={(e) => setSelectedOption(e.target.value)} />
        <label htmlFor="optionTwo">{question.optionTwo.text}</label>
      </div>
      <button onClick={handleVote} disabled={!selectedOption}>Submit</button>
    </div>
  );
}

export default PollVote;
