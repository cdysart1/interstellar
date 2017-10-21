'use strict'
const api = require('express').Router()
const db = require('../db')
const Students = require('../db/models/students');
const Campuses = require('../db/models/campuses');


// STUDENTS ROUTES
//------------------------------------------
api.get('/students', (req, res, next) => {
	Students.findAll({
		include: [ Campuses ]
	})
	.then(students =>
		res.json(students)
	)
	.catch(next);
})

api.get('/students/:id', (req, res, next) => {
	const id = req.params.id;
	Students.findById( id, {
		include: [ Campuses ]
	})
	.then(student =>
		res.json(student)
	)
	.catch(next);
})

api.post('/students', (req, res, next) => {
	Students.create({
		name: req.body.name,
		email: req.body.email,
		campusId: req.body.campusId
	}, {

})
		.then(newStudent => {
			res.status(201).json(newStudent)
		})
		.catch(next);
})

api.put('/students/:id', (req, res, next) => {
	const id = req.params.id;
	Students.update({
		name: req.body.name,
		email: req.body.email,
		campusId: req.body.campusId
	},
		{
			returning: true,
			where: {
				id: id
			}
		}
	)
	.then(([rowsUpdated, [updatedStudent]]) => {
			const resBody = {
				message: 'Updated successfully',
				student: updatedStudent
			};
			res.status(200).json(resBody);
		})
		.catch(next);
})

api.delete('/students/:id', (req, res, next) => {
	const id = req.params.id;
	Students.destroy({
		where: {
			id: id
		}
	})
	.then(err => {
			if (err) return res.send(err);
			res.json({ message: 'Deleted' });
		});
})

// CAMPUS ROUTES
// -------------------------------------------
api.get('/campuses', (req, res, next) => {
	Campuses.findAll({
		include: [ Students ]
	})
	.then(campuses =>
		res.json(campuses)
	)
	.catch(next);
})

api.get('/campuses/:id', (req, res, next) => {
	const id = req.params.id;
	Campuses.findById( id, {
		include: [ Students ]
	})
	.then(campus =>
		res.json(campus)
	)
	.catch(next);
})

api.post('/campuses', (req, res, next) => {
	Campuses.create({
		name: req.body.name,
		image: req.body.image
		// image: `/images/${req.body.name.replace(' ', '')}.jpg`
	})
		.then(newCampus => {
			res.status(201).json(newCampus)
		})
		.catch(next);
})

api.put('/campuses/:id', (req, res, next) => {
	const id = req.params.id;
	Campuses.update({
		name: req.body.name,
		image: `/public/images/${req.body.name.replace(' ', '')}`
	},
		{
			returning: true,
			where: {
				id: id
			}
		}
	)
	.then(([rowsUpdated, [updatedCampus]]) => {
			const resBody = {
				message: 'Updated successfully',
				campus: updatedCampus
			};
			res.status(200).json(resBody);
		})
		.catch(next);
})

api.delete('/campuses/:id', (req, res, next) => {
	const id = req.params.id;
	Campuses.destroy({
		where: {
			id: id
		}
	})
	.then(err => {
			if (err) return res.send(err);
			res.json({ message: 'Deleted' });
		});
})

module.exports = api
