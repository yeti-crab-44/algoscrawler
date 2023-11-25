const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const User = require('../models/userModel');

const algoController = {};

algoController.testDB = async (req, res, next) => {
  try {
    console.log('hello');
    const newUser = req.body;
    console.log('new user', newUser);

    const newCreatedUser = await User.create(newUser);
    res.locals.user = newCreatedUser;
    return next();
  } catch {
    return next('this is an error');
  }
};

module.exports = algoController;
