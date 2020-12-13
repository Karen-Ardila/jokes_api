const jokesController = require ('../controllers/jokes.controller');
const express = require('express');
const router = express.Router();

router.post('/', jokesController.createJoke);
router.get('/', jokesController.findAllJokes);
router.get('/:id', jokesController.findJokeById);
router.put('/:id', jokesController.updateJoke);
router.delete('/:id', jokesController.deleteJoke);

module.exports = router