const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const Algo = require('../models/algoModel');

const algoController = {};

// returns all algos in the database
// '/api/problems'
algoController.getAllProblems = async (req, res, next) => {
  try {
    console.log('you are in the getAllProblems method');
    const search = await Algo.find();
    console.log(search);
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
    console.log(search);
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
    console.log(req.body);
    const newAlgo = req.body;
    console.log('newAlgo', newAlgo);
    const createdAlgo = await Algo.create(newAlgo);
    console.log('createdAlgo', createdAlgo);
    res.locals.algo = createdAlgo;
    console.log('res.locals.algo', res.locals.algo);
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

    return next();
  } catch {
    return next('error in addSolution');
  }
};

algoController.view;
module.exports = algoController;
