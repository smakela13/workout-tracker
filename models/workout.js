const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      name: {
        type: String,
        enum: ['cardio', 'resistance'],
        trim: true,
        required: 'Enter a name for exercise',
      },
      type: {
        type: String,
        trim: true,
        required: 'Enter an exercise type',
      },
      weight: {
        type: Number,
        required: 'Enter a weight',
      },
      sets: {
        type: Number,
        required: 'Enter a number of sets',
      },
      reps: {
        type: Number,
        required: 'Enter a number of reps',
      },
      duration: {
        type: Number,
        required: 'Enter a duration',
      },
      distance: {
        type: Number,
        required: 'Enter a distance',
      },
    },
  ],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
