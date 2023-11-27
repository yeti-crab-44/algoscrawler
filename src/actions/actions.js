import * as types from '../constants/actionTypes';

// action creators
export const viewAllProblems = () => ({
  type: types.VIEW_ALL_PROBLEMS,
});

export const addProblem = (problem) => ({
  type: types.ADD_PROBLEM,
  payload: problem,
});

export const viewOneProblemAndSolutions = (problemId) => ({
  type: types.VIEW_ONE_PROBLEM_AND_SOLUTIONS,
  payload: problemId,
});

export const addSolution = (problemId, solution) => ({
  type: types.ADD_SOLUTION,
  payload: { problemId, solution },
});
