const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const Farmer = require('../models/farmer');
const User = require('../models/user');

router.post('/', (req, res, next) => {
	var farmer = new Farmer(req.body);
	id = mongoose.Types.ObjectId();
	farmer._id = id;
	farmer.save(function (err, result) {
		if(err) {
			return res.status(400).json({
				message: "Bad request sent"
			});
		}

		res.status(201).json(result);
	})
})

router.get('/', (req, res, next) => {
	Farmer.find(function (err, farmers) {
		if(err) {
			return res.status(500).json({
				message: "Internal error occurred."
			});
		}

		res.status(200).json(farmers)
	}).populate('users')
});

module.exports = router;