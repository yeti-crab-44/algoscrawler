import React from 'react';

const SolutionItem = ({ props }) => {
  console.log('----GOT INTO SOLUTION ITEM :D');
  console.log('---props below: ');
  console.log(props);
  return (
    <div>
      <p> {props.solution}</p>
      <p> time complexity: </p> <br></br>
      <p> {props.timeC} </p> <br></br>
      <p> space complexity: </p> <br></br>
      <p> {props.spaceC} </p> <br></br>
      <p> notes: </p> <br></br>
      <p> {props.notes} </p> <br></br>
    </div>
  );
};

export default SolutionItem;
