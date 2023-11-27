import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CodeEditor from '../components/CodeEditor';
import { useSelector, useDispatch } from 'react-redux';

const Problem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // @desc   Get single problem and associated solutions
  // @route  GET /api/problems/:problemId/solutions
  useEffect(() => {
    dispatch(viewOneProblemAndSolutions(id));
  }, [dispatch, id]);

  const problem = useSelector((state) => state.algos.currentProblem);

  const navigate = useNavigate();
  const addSolutionClick = () => {
    navigate(`/problem/${id}/add-solution`);
  };
  /* -----------------------mock data---------------------*/
  // function add(a, b) {
  //   return a + b;
  // }
  // const solution1 = add.toString();

  // const problemOne = {
  //   id: 1,
  //   algo_name: 'Two Sum',
  //   algo_prompt:
  //     'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
  //   solutions: [
  //     {
  //       solution: solution1,
  //     },

  //     {
  //       solution: solution1,
  //     },
  //   ],
  // };
  /* -----------------------mock data---------------------*/

  return (
    <section>
      <h2> {problem.algo_name} </h2>
      <p> {problem.algo_prompt} </p>

      <div className="solutions-container">
        {problem.solutions.length === 0 ? (
          <div>Currently no solutions</div>
        ) : (
          problem.solutions.map((solution) => (
            <CodeEditor value={solution.solution} />
          ))
        )}
      </div>
      <button onClick={addSolutionClick}>Add New Solution</button>
    </section>
  );
};

export default Problem;
