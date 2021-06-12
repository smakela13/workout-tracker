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
        default: 0,
      },
      sets: {
        type: Number,
        default: 0,
      },
      reps: {
        type: Number,
        default: 0,
      },
      duration: {
        type: Number,
        required: 'Enter a duration',
      },
      distance: {
        type: Number,
        default: 0,
      },
    },
  ],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
