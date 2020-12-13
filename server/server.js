const express = require("express");
const jokesRouter = require('./routes/jokes.routes');

const app = express();
const port = 3500

//This runs and connects to the mongo database
require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({ extended: true }));

app.use('/api/jokes', jokesRouter);
app.use('*', (req, res) => res.status(404).json({message:'Route not found'}));

app.listen(port, () => console.log(`The server is all fired up on port ${port}`));