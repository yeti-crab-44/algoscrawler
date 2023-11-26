import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AddSolution = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/problem/${id}`);
  };

  return (
    <section className="form-group">
      <form onSubmit={onSubmit}>
        <label for="solution">Add Solution</label>
        <br />
        <input type="text" id="solution" name="solution" />
        <br />
        <div className="form-group">
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default AddSolution;
