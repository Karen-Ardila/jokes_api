const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.findJokeById = (req, res) => {
    Joke.findById(req.params.id)
    .then(result => {
        if(result) res.json(result)
        res.status(404).json({message: 'Joke not found'})
    })
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(result => {
        if(result) res.json(result)
        res.status(404).json({message: 'Joke not found'})
    })
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}
module.exports.deleteJoke = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
        .then(result => {
            if(result) res.json(result)
            res.status(404).json({message: 'Joke not found'})
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}