import { _saveQuestion } from '../utils/_DATA';

const SECONDS = 1000;

describe('_saveQuestion', () => {
  it('should return the saved question with all expected fields populated', async () => {
    const question = {
      optionOneText: 'Option One',
      optionTwoText: 'Option Two',
      author: 'user1',
    };

    const savedQuestion = await _saveQuestion(question);

    expect(savedQuestion).toHaveProperty('id');
    expect(savedQuestion).toHaveProperty('timestamp');
    expect(savedQuestion).toMatchObject({
      author: question.author,
      optionOne: { text: question.optionOneText, votes: [] },
      optionTwo: { text: question.optionTwoText, votes: [] },
    });
  }, 60 * SECONDS);
  
  it('should return an error if incorrect data is passed', async () => {
    const question = {
      optionOneText: '',
      author: '',
    };

    await expect(_saveQuestion(question)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
  }, 60 * SECONDS);
});