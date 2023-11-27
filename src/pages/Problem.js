import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SolutionItem from '../components/SolutionItem';
import CodeEditor from '../components/CodeEditor';

const Problem = () => {
  const { id } = useParams();
  const problemId = parseInt(id, 10) - 1; //temporarily fix index for fake data

  const navigate = useNavigate();
  const addSolutionClick = () => {
    navigate(`/problem/${id}/add-solution`);
  };

  /* -----------------------mock data---------------------*/
  // @desc   Get single problem and associated solutions
  // @route  GET /api/problems/:problemId/solutions

  function add(a, b) {
    return a + b;
  }
  const solution1 = add.toString();

  const problemList = [
    {
      id: 1,
      problemName: 'Two Sum',
      prompt:
        'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
      solutions: [
        {
          id: '11',
          timeC: 'O(n)',
          spaceC: 'O(1)',
          solution: solution1,
          notes: 'first attempt - recursive solution',
        },

        {
          id: '12',
          timeC: 'O(n)',
          spaceC: 'O(1)',
          solution: solution1,
          notes: 'first attempt - recursive solution',
        },
        {
          id: '13',
          timeC: 'O(n)',
          spaceC: 'O(1)',
          solution: solution1,
          notes: 'first attempt - recursive solution',
        },
      ],
    },
    {
      id: 2,
      problemName: 'Sudoku Solver',
      prompt:
        "Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all of the following rules: Each of the digits 1-9 must occur exactly once in each row. Each of the digits 1-9 must occur exactly once in each column. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid. The '.' character indicates empty cells.",
      solutions: [],
    },
    {
      id: 3,
      problemName: 'Median of Two Sorted Arrays',
      prompt:
        'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).',
      solutions: [],
    },
  ];
  /* -----------------------mock data---------------------*/

  return (
    <section>
      <h2> {problemList[problemId].problemName} </h2>
      <p> {problemList[problemId].prompt} </p>

      <div className="solutions-container">
        {problemList[problemId].solutions.length === 0 ? (
          <div>Currently no solutions</div>
        ) : (
          problemList[problemId].solutions.map((solution) => (
            <CodeEditor value={solution.solution} />
          ))
        )}
      </div>
      <button onClick={addSolutionClick}>Add New Solution</button>
    </section>
  );
};

export default Problem;
