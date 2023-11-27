import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CodeEditor from '../components/CodeEditor';
import { useSelector, useDispatch } from 'react-redux';
import { viewOneProblemAndSolutions } from '../actions/actions';

const Problem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  //Use isLoading to delay the rendering of components until the data is fully loaded and available
  //if you try to access properties of an object that hasn't been fetched yet, it will result in a runtime error
  const [isLoading, setIsLoading] = useState(true);
  const problem = useSelector((state) => state.algos.currentProblem);
  console.log('currentProblem in state:', problem);

  // @desc   Get single problem and associated solutions
  // @route  GET /api/problems/:problemId

  //since we use redux thunk, action creators can return promises, which allows us to use .then()
  useEffect(() => {
    setIsLoading(true);
    dispatch(viewOneProblemAndSolutions(id))
      .then(() => {
        console.log('Data fetched successfully');
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [dispatch, id, problem]);

  const navigate = useNavigate();
  const addSolutionClick = () => {
    navigate(`/problem/${id}/add-solution`);
  };

  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <div>Loading...</div>
          <div><img src="https://static.wikia.nocookie.net/octonauts/images/0/00/Yeti_crab.png" id="loaderCrab"/></div>
        </div>
      ) : (
        <section>
          <h2>{problem.algo_name}</h2>
          <p>{problem.algo_prompt}</p>
          <div className="solutions-container">
            {problem.solutions.length === 0 ? (
              <div id="noSolution">Currently no solutions</div>
            ) : (
              problem.solutions.map((solution, idx) => {
                console.log('solution:', solution);
                return <CodeEditor key={idx} value={solution.solution} />;
              })
            )}
          </div>
          <button onClick={addSolutionClick}><span>Add New Solution</span></button>
        </section>
      )}
    </div>
  );
};

export default Problem;
