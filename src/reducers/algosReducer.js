import * as types from '../constants/actionTypes';

const initialState = {
  problems: [],
  currentProblem: null,
  lastAddedProblem: null,
};

const algosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VIEW_ALL_PROBLEMS:
      return {
        ...state,
        problems: action.payload,
      };

    case types.VIEW_ONE_PROBLEM_AND_SOLUTIONS:
      return {
        ...state,
        currentProblem: action.payload,
      };

    case types.ADD_SOLUTION:
      return {
        ...state,
        problems: state.problems.map((problem) =>
          //action.payload contains the updated problem with new solution added
          problem._id === action.payload._id ? action.payload : problem
        ),
      };

    case types.ADD_PROBLEM:
      return {
        ...state,
        lastAddedProblem: action.payload, // keeps track of the last added problem
        //action.payload contains the newly added problem and we just add it to the problem array
        problems: [...state.problems, action.payload],
      };

    default:
      return state;
  }
};

export default algosReducer;
