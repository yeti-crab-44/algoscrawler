import React from 'react';
import { Link } from 'react-router-dom';

const ProblemItem = ({ name, id }) => {
  return (
    <>
      <Link to={`/problem/${id}`}>{name}</Link> <br></br>
    </>
  );
};

export default ProblemItem;
