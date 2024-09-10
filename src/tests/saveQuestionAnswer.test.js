import { _saveQuestionAnswer } from "../utils/_DATA";

const SECONDS = 1000;

describe('_saveQuestionAnswer', () => {
  it('should return the saved question answer when correctly formatted data is passed', async () => {
    const answer = {
      authedUser: 'sarahedo',
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionOne',
    };

    await expect(_saveQuestionAnswer(answer)).resolves.toBeTruthy();
  }, 60 * SECONDS);

  it('should return an error if incorrect data is passed', async () => {
    const answer = {
      authedUser: 'user1',
      qid: '',
      answer: '',
    };

    await expect(_saveQuestionAnswer(answer)).rejects.toEqual('Please provide authedUser, qid, and answer');
  }, 60 * SECONDS);
});