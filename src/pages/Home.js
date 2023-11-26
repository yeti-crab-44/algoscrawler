import React from 'react';
import ProblemItem from '../components/ProblemItem';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const navigate = useNavigate();
  const addProblemClick = () => {
    navigate('/add-problem');
  };

  /* -----------------------mock data---------------------*/
  const problemList = [
    { id: 1, problemName: 'Two Sum' },
    { id: 2, problemName: 'Sudoku Solver' },
    {
      id: 3,
      problemName: 'Median of Two Sorted Arrays',
    },
  ];
  /* -----------------------mock data---------------------*/

  return (
    <div>
      <section className="type-writer">
        <div>
          <span style={{ fontSize: '40px' }}> Hello </span>
          <span style={{ color: 'green', fontSize: '40px' }}>
            <Typewriter
              words={['World', 'ECRI-44', 'Developers!']}
              loop={5}
              cursor
              cursorStyle="<"
              typeSpeed={50}
              deleteSpeed={35}
              delaySpeed={1000}
            />
          </span>
        </div>
      </section>

      <section className="heading">
        <h1>Algorithms</h1>
      </section>

      <section className="problem-list">
        {problemList.map((problem) => {
          return (
            <ProblemItem
              key={problem.id}
              id={problem.id}
              name={problem.problemName}
            />
          );
        })}
        <button onClick={addProblemClick}>Add New Algo</button>
      </section>
    </div>
  );
};

export default Home;
