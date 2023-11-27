import * as types from '../constants/actionTypes';

// action creators
//thunk allows action creator to return a function other than an object
export const viewAllProblems = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/problems', {
        method: 'GET',
      });

      const data = await response.json();
      console.log('data:', data);

      dispatch({
        type: types.VIEW_ALL_PROBLEMS,
        payload: data,
      });
    } catch (error) {
      console.error('Error fetching problems:', error);
    }
  };
};

export const addProblem = (problem) => ({
  type: types.ADD_PROBLEM,
  payload: problem,
});

export const viewOneProblemAndSolutions = (problemId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/problems/${problemId}/solutions`, {
        method: 'GET',
      });

      const data = await response.json();

      dispatch({
        type: types.VIEW_ONE_PROBLEM_AND_SOLUTIONS,
        payload: data,
      });
    } catch (error) {
      console.error('Error fetching problem:', error);
    }
  };
};

export const addSolution = (problemId, solution) => ({
  type: types.ADD_SOLUTION,
  payload: { problemId, solution },
});
