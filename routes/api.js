/* eslint-disable new-cap */
const router = require('express').Router();
const Workout = require('../models/workout.js');
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/api/workouts', (req, res) => {
  Workout.find()
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
});

router.get('/api/workouts/range', (req, res) => {
  Workout.find()
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
});

router.post('/api/workouts', ({body}, res) => {
  Workout.create(body)
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
});

router.put('/api/workouts/:id', ({body, params}, res) => {
  Workout.findByIdAndUpdate(params.id, {$push: {exercises: body}})
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
});

module.exports = router;
