import React, { useEffect } from 'react';
import ProblemItem from '../components/ProblemItem';
import TypeWriter from '../components/TypeWriter';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { viewAllProblems } from '../actions/actions';

const Home = () => {
  const navigate = useNavigate();
  const addProblemClick = () => {
    navigate('/add-problem');
  };

  // @desc    Get all problems
  // @route   GET api/problems
  const dispatch = useDispatch();
  const problemList = useSelector((state) => state.algos.problems);

  useEffect(() => {
    dispatch(viewAllProblems());
  }, [dispatch]);

  /* -----------------------mock data---------------------*/
  // const problemList = [
  //   { id: 1, algo_name: 'Two Sum' },
  //   { id: 2, algo_name: 'Sudoku Solver' },
  //   {
  //     id: 3,
  //     algo_name: 'Median of Two Sorted Arrays',
  //   },
  // ];
  /* -----------------------mock data---------------------*/

  return (
    <div>
      <section className="type-writer">
        <TypeWriter />
      </section>

      <section className="problem-list">
        {problemList.length === 0 ? (
          <div>Please add an algo problem</div>
        ) : (
          problemList.map((problem) => (
            <ProblemItem
              key={problem.id}
              id={problem.id}
              title={problem.algo_name}
            />
          ))
        )}
        <button onClick={addProblemClick}>Add New Algo</button>
      </section>
    </div>
  );
};

export default Home;
