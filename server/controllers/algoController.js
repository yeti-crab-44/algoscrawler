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

algoController.deleteAlgo = async (req, res, next) => {
  try {
    return next();
  } catch {
    return next('deleting the algo caused a problem');
  }
};

algoController.view;
module.exports = algoController;
