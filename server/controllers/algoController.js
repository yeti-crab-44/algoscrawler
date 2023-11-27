const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const Algo = require('../models/algoModel');

const algoController = {};

//'/api/problems'
algoController.getAllProblems = async (req, res, next) => {
  try {
    const search = await Algo.find();
    res.locals.allProblems = search;
    return next();
  } catch {
    return next('error findingAll');
  }
};

//'/api/problems/:problemId'
algoController.getProblem = async (req, res, next) => {
  try {
    const id = req.params.problemId;
    const problem = await Algo.findById(id);
    if (!problem) {
      return res.status(404).send('Problem not found');
    }
    res.locals.problem = problem;
    return next();
  } catch (error) {
    res.status(500).send('Server error');
  }
};

//'/api/add-problem'
algoController.addProblem = async (req, res, next) => {
  try {
    // console.log(req.body);
    const newAlgo = req.body;
    // console.log('newAlgo', newAlgo);
    const createdAlgo = await Algo.create(newAlgo);
    // console.log('createdAlgo', createdAlgo);
    res.locals.algo = createdAlgo;
    // console.log('res.locals.algo', res.locals.algo);
    return next();
  } catch (err) {
    return next('this is an error', err);
  }
};

//'/api/problems/:problemId'
algoController.addSolution = async (req, res, next) => {
  // try {
  //   const { algo_name, newSolution } = req.body;
  //   // console.log(req.body);
  //   const search = await Algo.findOne({ algo_name });
  //   // console.log('search', search);
  //   search.updateOne({
  //     [search.solutions]: search.solutions.push(newSolution),
  //   });
  //   //replacing, not pushing
  //   res.locals.solution = search.solutions;
  //   // console.log('search after adding solution', search);

  //   return next();
  // } catch {
  //   return next('error in addSolution');
  // }
  const problemId = req.params.problemId;
  const newSolution = req.body.solution;

  if (!newSolution) {
    return res.status(400).send('No solution provided');
  }

  try {
    // find the problem by ID and add the new solution
    const updatedProblem = await Algo.findByIdAndUpdate(
      problemId,
      { $push: { solutions: { solution: newSolution } } }, // add the new solution to the solutions array
      { new: true } // return the updated document
    );

    if (!updatedProblem) {
      return res.status(404).send('Problem not found');
    }
    res.locals.updatedProblem = updatedProblem;
    return next();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

algoController.view;
module.exports = algoController;
