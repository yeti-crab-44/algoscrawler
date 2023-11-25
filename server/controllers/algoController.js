const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const User = require('../models/userModel');

const algoController = {};

algoController.testDB = async (req, res, next) => {
  try {
    console.log('hello from algocontroller.testDB');
    const newUser = req.body;
    console.log('newUser:', newUser);
    const newSolutions = req.body.solutions;
    console.log('newSolutions', newSolutions);

    const newCreatedUser = await User.create(newUser);
    console.log('newCreatedUser worked');
    console.log('newCreatedUser', newCreatedUser);
    res.locals.user = newCreatedUser;
    return next();
  } catch (err) {
    return next('this is an error', err);
  }
};

module.exports = algoController;
