import { cons } from '@hexlet/pairs';
import playGame from '..';
import random from '../utils';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const makeGame = () => {
  const question = random(1, 500);

  const answer = isPrime(question);

  return cons(question, answer);
};

export default () => playGame(task, makeGame);