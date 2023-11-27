import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CodeEditor from '../components/CodeEditor';
import { addSolutionToAProblem } from '../actions/actions';

const AddSolution = () => {
  const [solution, setSolution] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (newValue) => {
    setSolution(newValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // @desc   Add a solution to a specific problem
    // @route  POST /api/problems/:problemId
    dispatch(addSolutionToAProblem(id, solution));
    setSolution(''); //reset local state
    navigate(`/problem/${id}`);
  };

  return (
    <section className="form-group">
      <form onSubmit={onSubmit}>
        <div className="code-editor">
          {/* <textarea
            type="text"
            id="solution"
            name="solution"
            value={solution}
            onChange={onChange}
            placeholder="Enter your solution"
            required
          /> */}
          <CodeEditor value={solution} onChange={onChange} />
        </div>

        <div className="form-group">
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default AddSolution;
