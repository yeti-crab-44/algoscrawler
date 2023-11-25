import React from 'react';
import { useParams } from 'react-router-dom';
import SolutionItem from '../components/SolutionItem';

const Problem = () => {
  console.log('-----GOT INTO PROBLEM.JS :D');

  const twoSumSolutions = {
    id: '1234',
    timeC: 'O(n)',
    spaceC: 'O(1)',
    solution: 'solution1', // this is temporarily set to a string
    notes: 'first attempt - recursive solution',
  };

  const problemList = [
    {
      id: 1,
      problemName: 'Two Sum',
      prompt: 'some prompt 1',
      solutions: [
        {
          id: '1234',
          timeC: 'O(n)',
          spaceC: 'O(1)',
          solution: 'solution1', // this is temporarily set to a string
          notes: 'first attempt - recursive solution',
        },
      ],
    },
    {
      id: 2,
      problemName: 'Valid Parentheses',
      prompt: 'some prompt 2',
      solutions: [],
    },
  ];

  console.log('problemList[0] :', problemList[0]);

  // const { id } = useParams();
  // console.log('this is id: ', id);

  function add(a, b) {
    return a + b;
  }
  const solution1 = JSON.stringify(add);

  return (
    <section>
      <h2> {problemList[0].problemName} </h2> <br></br>
      <h3>Prompt:</h3>
      <p> {problemList[0].prompt} </p>
      {console.log('solutions:', problemList[0].solutions)}
      {problemList[0].solutions.map((solution) => {
        return <SolutionItem props={solution} />;
      })}
    </section>
  );
};

export default Problem;
