const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Vocab = require('./api/models/vocabModel'); // Assuming vocabModel.js is in the api/models directory
const routes = require('./api/routes/vocabRoutes'); // Assuming vocabRoutes.js is in the api/routes directory


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://minhltgcs230050:14122005anhchiemminhle12@fgwweb2cluster.jsksk65.mongodb.net/?retryWrites=true&w=majority&appName=FGWWeb2Cluster');


const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

console.log('Server started on port :D : ' + port);