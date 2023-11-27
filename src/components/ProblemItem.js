import React from 'react';
import { Link } from 'react-router-dom';

const ProblemItem = ({ title, id }) => {
  return (
    <div id="indivAlgo">
      <Link to={`/problem/${id}`}>{title}</Link> <br></br>
    </div>
  );
};

export default ProblemItem;
