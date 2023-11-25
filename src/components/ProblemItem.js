import React from 'react';
import { Link } from 'react-router-dom';

const ProblemItem = ({ name, id }) => {
  return (
    <div id="indivAlgo">
      <Link to={`/problem/${id}`}>{name}</Link> <br></br>
    </div>
  );
};

export default ProblemItem;
