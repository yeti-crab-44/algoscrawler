import React, { useState } from 'react';

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

  const onSubmit = (e) => {
    e.preventDefault();
    //dispatch action creator to update redux state
    //send API request to create new problem in DB
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
        </form>
      </section>
    </div>
  );
};

export default AddProblem;
