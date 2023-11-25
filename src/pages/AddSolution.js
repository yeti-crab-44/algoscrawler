import React from 'react';

const AddSolution = () => {
  return (
    <section className="form-group">
      <form>
        <label for="solution">Add Solution</label>
        <br />
        <input type="text" id="solution" name="solution" />
        <br />
        <input type="submit" id="submit" value="Submit" />
      </form>
    </section>
  );
};

export default AddSolution;
