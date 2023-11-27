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
    const { _id } = req.body;
    const search = await Algo.findOne({ _id });
    res.locals.algoSolutions = search;
    return next();
  } catch (error) {
    res.status(500).send('Server error');
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
    const { _id, newSolution } = req.body;
    const update = await Algo.updateOne(
      { _id },
      { $push: { solutions: { newSolution } } }
    );
    res.locals.solution = newSolution;

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
