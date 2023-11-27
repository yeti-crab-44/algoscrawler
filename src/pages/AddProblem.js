import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProblem = () => {
  //   const [formData, setFormData] = useState({ problemName: '', prompt: '' });
  //   const [problemName, prompt] = formData;

  const [problemName, setProblemName] = useState('');
  const [prompt, setPrompt] = useState('');

  const onChangeName = (e) => {
    setProblemName(e.target.value);
  };

  const onChangePrompt = (e) => {
    setPrompt(e.target.value);
  };

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    // @desc    Add a new problem
    // @route   POST api/problems

    const responseOK = true;
    const idGenerated = 1;
    if (responseOK) {
      navigate(`/problem/${idGenerated}`);
    }
  };

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
            <button>Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProblem;
