const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const bcrypt = require("bcrypt");

const sendEmail     = require('../Services/sendEmail')
