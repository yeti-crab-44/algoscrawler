import React from 'react';
import ProblemItem from '../components/ProblemItem';
import TypeWriter from '../components/TypeWriter';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const addProblemClick = () => {
    navigate('/add-problem');
  };

  /* -----------------------mock data---------------------*/
  // @desc    Get all problems
  // @route   GET api/problems
  const problemList = [
    { id: 1, title: 'Two Sum' },
    { id: 2, title: 'Sudoku Solver' },
    {
      id: 3,
      title: 'Median of Two Sorted Arrays',
    },
  ];
  /* -----------------------mock data---------------------*/

  return (
    <div>
      <section className="type-writer">
        <TypeWriter />
      </section>

      <section className="problem-list">
        {problemList.map((problem) => {
          return (
            <ProblemItem
              key={problem.id}
              id={problem.id}
              name={problem.title}
            />
          );
        })}
        <button onClick={addProblemClick}>Add New Algo</button>
      </section>
    </div>
  );
};

export default Home;
