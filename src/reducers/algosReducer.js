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

    default:
      return state;
  }
};

export default algosReducer;
