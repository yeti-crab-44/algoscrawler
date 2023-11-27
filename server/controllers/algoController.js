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
    const { algo_name } = req.body;
    const search = await Algo.findOne({ algo_name });
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

// '/api/add-solution'
algoController.addSolution = async (req, res, next) => {
  try {
    const { algo_name, newSolution } = req.body;
    console.log(req.body);
    // const search = await Algo.findOne({ algo_name });
    // console.log('search:', search);
    const update = await Algo.updateOne(
      { algo_name },
      { $push: { solutions: { newSolution } } }
    );
    console.log(update);
    res.locals.solution = newSolution;

    return next();
  } catch {
    return next('error in addSolution');
  }
};

algoController.view;
module.exports = algoController;
