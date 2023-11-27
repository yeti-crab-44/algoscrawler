import React from 'react';

//replaced by <CodeEditor/>
const SolutionItem = ({ props }) => {
  return (
    <div>
      <p> {props.solution}</p>
      <p> Time complexity: </p>
      <p> {props.timeC} </p>
      <p> Space complexity: </p>
      <p> {props.spaceC} </p>
      <p> Notes: </p>
      <p> {props.notes} </p>
    </div>
  );
};

export default SolutionItem;
