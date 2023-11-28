import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProblem } from '../actions/actions';
import '../stylesheets/styles.scss';

const AddProblem = () => {
  const [problemName, setProblemName] = useState('');
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const onChangeName = (e) => {
    setProblemName(e.target.value);
  };

  const onChangePrompt = (e) => {
    setPrompt(e.target.value);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const lastAddedProblem = useSelector((state) => state.algos.lastAddedProblem);

  // @desc    Add a new problem
  // @route   POST api/problems
  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); //start loading
    // create a new problem object
    const newProblem = {
      algo_name: problemName,
      algo_prompt: prompt,
    };

    dispatch(addProblem(newProblem))
      .then(() => {
        //if success, navigation will be handled in useEffect
      })
      .catch((error) => {
        console.error('Failed to add problem:', error);
        setIsLoading(false); // stop loading on error
      });
  };

  useEffect(() => {
    if (isLoading && lastAddedProblem) {
      navigate(`/problem/${lastAddedProblem._id}`);
      setIsLoading(false); // stop loading after navigation
    }
  }, [isLoading, lastAddedProblem, navigate]);

  return (
    <div>
      <section className="heading">
        <h1>Add Problem</h1>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="problemName"
              name="problemName"
              value={problemName}
              onChange={onChangeName}
              placeholder="Problem Name"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              type="text"
              id="prompt"
              name="prompt"
              value={prompt}
              onChange={onChangePrompt}
              placeholder="Prompt"
              required
            />
          </div>

          <div className="form-group">
            <button id="addProblemSubmit">
              <span>Submit</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProblem;
