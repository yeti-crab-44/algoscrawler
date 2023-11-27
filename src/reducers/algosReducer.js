import * as types from '../constants/actionTypes';

const initialState = {
  problems: [
    // {
    //     id: 'problem1',
    //     title: 'Two Sum',
    //     prompt: 'Problem Description',
    //     solutions: [
    //         {
    //             id: 'solution1',
    //             solutionText: 'Solution Content'
    //         },
    //         {
    //             id: 'solution2',
    //             solutionText: 'Solution Content'
    //         }
    //     ]
    // }
  ],
  currentProblem: null,
  loading: false,
  error: null,
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

    default:
      return state;
  }
};

export default algosReducer;
