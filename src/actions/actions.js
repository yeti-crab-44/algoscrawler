import * as types from '../constants/actionTypes';

// action creators
//thunk allows action creator to return a function instead of an object
//this function is allowed to have side effects, including executing asynchronous API calls. It receives the dispatch function as an argument
export const viewAllProblems = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/problems', {
        method: 'GET',
      });

      const data = await response.json();
      // After receiving the data, we dispatch a normal Redux action with the fetched data as the payload
      dispatch({
        type: types.VIEW_ALL_PROBLEMS,
        payload: data,
      });
    } catch (error) {
      console.error('Error fetching problems:', error);
    }
  };
};

export const viewOneProblemAndSolutions = (problemId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/problems/${problemId}`, {
        method: 'GET',
      });

      const data = await response.json();
      //console.log('data from backend:', data);

      dispatch({
        type: types.VIEW_ONE_PROBLEM_AND_SOLUTIONS,
        payload: data,
      });
    } catch (error) {
      console.error('Error fetching single problem:', error);
    }
  };
};

export const addSolutionToAProblem = (problemId, solution) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/problems/${problemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ solution }),
      });

      const data = await response.json();

      dispatch({
        type: 'ADD_SOLUTION',
        payload: data,
      });
    } catch (error) {
      console.error('Error adding solution:', error);
    }
  };
};

export const addProblem = (newProblemData) => {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/add-problem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProblemData),
      });

      const data = await response.json();
      console.log('New problem added:', data);

      dispatch({
        type: types.ADD_PROBLEM,
        payload: data,
      });
    } catch (error) {
      console.error('Error adding problem:', error);
    }
  };
};
