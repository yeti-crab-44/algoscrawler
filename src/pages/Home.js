import React from 'react';
import ProblemItem from '../components/ProblemItem';
import { useParams } from 'react-router-dom';

const Home = () => {
  //get problem array from DB (problemName, prompt, solutions array)
  const problemList = [
    { id: 1, problemName: 'Two Sum', prompt: 'some prompt 1' },
    { id: 2, problemName: 'Valid Parentheses', prompt: 'some prompt 2' },
    {
      id: 3,
      problemName: 'Median of Two Sorted Arrays',
      prompt: 'some prompt 3',
    },
  ];

  return (
    <div>
      <section className="heading">
        <h1>Algorithms</h1>
      </section>

      <section className="problem-list">
        {problemList.map((problem) => {
          return (
            <ProblemItem
              key={problem.problemName}
              name={problem.problemName}
              id={problem.id}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Home;
