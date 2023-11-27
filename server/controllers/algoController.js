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
    return next({
      log: 'Error located in algoController.getAllProblems.',
      status: 500,
      message: {
        err: "I'm sorry, we are having unable to retrieve your saved algorithms.",
      },
    });
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
  } catch {
    return next({
      log: 'Error located in algoController.addSolution.',
      status: 500,
      message: {
        err: "I'm sorry, we are having difficulties retrieving this algorithm and its solutions.",
      },
    });
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
    return next({
      log: 'Error located in algoController.addProblems.',
      status: 500,
      message: {
        err: "I'm sorry, we are having difficulties adding a new problem",
      },
    });
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
    return next({
      log: 'Error located in algoController.addSolution.',
      status: 500,
      message: {
        err: "I'm sorry, we are having difficulties adding a solution.",
      },
    });
  }
};

algoController.deleteAlgo = async (req, res, next) => {
  try {
    return next();
  } catch {
    return next({
      log: 'Error located in algoController.deleteAlgo.',
      status: 500,
      message: { err: "I'm sorry, we can't delete this algorithm." },
    });
  }
};

algoController.view;
module.exports = algoController;
