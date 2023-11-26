const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const Algo = require('../models/algoModel');

const algoController = {};

algoController.addProblem = async (req, res, next) => {
  try {
    // console.log(req.body);
    const newAlgo = req.body;
    // console.log('newAlgo', newAlgo);

    const createdAlgo = await Algo.create(newAlgo);
    console.log('createdAlgo', createdAlgo);
    res.locals.algo = createdAlgo;
    console.log('res.locals.algo', res.locals.algo);
    return next();
  } catch (err) {
    return next('this is an error', err);
  }
};

algoController.addSolution = async (req, res, next) => {
  try {
    const { algo_name, solution_1_code } = req.body;
    console.log(req.body);
    const search = await Algo.findOne({ algo_name });
    search.updateOne({ $set: search.solutions.push(solution_1_code) });
    //replacing, not pushing
    res.locals.solution = search.solutions;

    return next();
  } catch {
    return next('error in addSolution');
  }
};

algoController.view;
module.exports = algoController;
