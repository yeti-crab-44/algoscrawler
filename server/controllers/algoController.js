const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const Algo = require('../models/algoModel');

const algoController = {};

// returns all algos in the database
// '/api/problems'
algoController.getAllProblems = async (req, res, next) => {
  try {
    const search = await Algo.find();
    res.locals.allProblems = search;
    return next();
  } catch {
    return next('error findingAll');
  }
};

// returns one algo with all of its solutions
// '/api/problems/:problemId/solutions'
algoController.getSolutions = async (req, res, next) => {
  try {
    const { problemId } = req.params;
    const search = await Algo.findOne({ _id: problemId });
    res.locals.algoSolutions = search;
    return next();
  } catch {
    return next('error getting solutions');
  }
};

// creates and returns a new algo
// '/api/add-problem'
algoController.addProblem = async (req, res, next) => {
  try {
    const newAlgo = req.body;
    const createdAlgo = await Algo.create(newAlgo);
    res.locals.algo = createdAlgo;
    return next();
  } catch (err) {
    return next('this is an error', err);
  }
};

// pushes a new object into the solutions array
// '/api/add-solution'
algoController.addSolution = async (req, res, next) => {
  try {
    const { problemId } = req.params;
    const { solution } = req.body;
    const update = await Algo.updateOne(
      { _id: problemId },
      { $push: { solutions: { solution } } }
    );
    const search = await Algo.findOne({ _id: problemId });
    res.locals.updatedAlgo = search;
    return next();
  } catch {
    return next('error in addSolution');
  }
};

algoController.updateSolution = async (req, res, next) => {
  //solutions: [{solution: xxx}, {solution: yyy} ]
  try {
    //get array from db
    //replace element at the right index
    //use updateOne to replace the entire array

    const { problemId, solutionIdx } = req.params;
    const { solution } = req.body;

    const algo = await Algo.findOne({ _id: problemId });
    algo.solutions[solutionIdx] = { solution: solution };
    console.log('algo: ', algo);
    // const updatedAlgo = await Algo.overwrite({ algo });
    await algo.save();

    res.locals.updateSolution = updatedAlgo;
    console.log('update:', update);

    console.log('problemObj', problemObj);
    return next();

    // const { problemId, solutionIdx } = req.params; // Assuming you pass the index of the solution to update
    // const { solution } = req.body; // Assuming the updated solution is sent in the request body

    // // Update the specific solution at the given index
    // const updateQuery = {
    //   $set: { [`solutions.${solutionIdx}.solution`]: solution },
    // };
    // const update = await Algo.updateOne({ _id: problemId }, updateQuery);

    // // Retrieve the updated document
    // const updatedDocument = await Algo.findOne({ _id: problemId });

    // res.locals.updateSolution = updatedDocument;
    // console.log(updateSolution);

    // // Find the problem first
    // const algo = await Algo.findById(problemId);

    // // Update the specific solution
    // algo.solutions[solutionIdx] = solution;

    // // Save the updated document
    // const updatedAlgo = await algo.save();
    // res.locals.updatedAlgo = updatedAlgo;
  } catch (err) {
    // try {
    //   console.log('req.params', req.params);
    //   console.log('req.body', req.body);
    //   const { problemId, solutionIdx } = req.params;
    //   const { solution } = req.body;
    //   const findProblem = await Algo.findOne({ _id: problemId });
    //   console.log('findProblem',findProblem)
    //   const update = await Algo.updateOne(
    //     { findProblem: solutions },
    //     { $set: { solutionIdx: { solution } } }
    //   );
    //   console.log('----search: ');
    //   console.log(search);
    //   const search = await Algo.findOne({ _id: problemId });
    //   res.locals.updatedAlgo = search;
    //   return next();
    return next('problem in algoController.updateSolution: ', err);
  }
};

algoController.deleteSolution = async (req, res, next) => {
  try {
    return next();
  } catch {
    return next('deleting the algo caused a problem');
  }
};

algoController.view;
module.exports = algoController;
