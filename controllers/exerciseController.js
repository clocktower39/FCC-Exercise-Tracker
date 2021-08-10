const Exercise = require('../models/exercise');
const User = require('../models/user');

const create_exercise = async (req, res) => {
	User.findById(req.params._id, (err, user) => {
		if (err) {
			res.send(err.message);
		}
		else {
			let exercise = new Exercise({
				username: user.username,
				userId: req.params._id,
				description: req.body.description,
				duration: req.body.duration,
				date: req.body.date ? req.body.date : new Date(),
			});

			let saveExercise = () => {
				exercise.save((err) => {
					if (err) {
						res.send(err);
					}
					else {
						res.send({
							_id: exercise.userId,
							username: user.username,
							date: exercise.date,
							duration: exercise.duration,
							description: exercise.description,
						})
					}
				})
			}
			saveExercise();
		}
	})
}

const get_exercises = (req, res) => {
	User.findById(req.params._id, (err, user) => {
		if (err) {
			res.send('User not found');
		}
		else {
			Exercise.find({ userId: req.params._id }, (err, exercises) => {
				if (err) {
					res.send(err);
				}
				else {
					let adjustedExercises = exercises.map(exercise => {
						let newObj = {
							description: exercise.description,
							duration: exercise.duration,
							date: exercise.date ? exercise.date : new Date(),
						};
						return newObj;
					})

					res.send({
						_id: req.params._id,
						username: user.username,
						count: exercises.length,
						log: adjustedExercises,
					});
				}
			})
		}
	})
}

module.exports = {
	create_exercise,
	get_exercises,
}