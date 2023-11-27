const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const Algo = require('../models/algoModel');

const algoController = {};

//'/api/problems'
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

//'/api/problems/:problemId/solutions'
algoController.getSolutions = async (req, res, next) => {
  try {
    const algo_name = req.body;
    console.log('algo_name', algo_name);
    const search = await Algo.findOne({ algo_name });
    console.log(search);
    res.locals.algoSolutions = search;
    // if (search) {
    //   res.locals.algoSolutions = search.solutions;
    // } else {
    //   res.redirect('/api/add-problem');
    // }
    return next();
  } catch {
    return next('error getting solutions');
  }
};

//'/api/add-problem'
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

//'/api/add-solution'
algoController.addSolution = async (req, res, next) => {
  try {
    const { algo_name, newSolution } = req.body;
    console.log(req.body);
    const search = await Algo.findOne({ algo_name });
    console.log('search', search);
    search.updateOne({
      [search.solutions]: search.solutions.push(newSolution),
    });
    //replacing, not pushing
    res.locals.solution = search.solutions;
    console.log('search after adding solution', search);

    return next();
  } catch {
    return next('error in addSolution');
  }
};

algoController.view;
module.exports = algoController;
