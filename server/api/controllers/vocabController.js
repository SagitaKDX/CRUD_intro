const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');

exports.list_all_words = (req , res) => {
    Vocab.find({}, (err, vocab) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(words);
    });
};


exports.create_a_word = (req, res) => {
    const new_word = new Vocab(req.body);
    new_word.save((err, word) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json(word);
    });
};

exports.read_a_word = (req , res) =>{
    vocab.findById(req.params.wordId, (err, word) => {
    req.body,
    {new : true},
    (err, word) => {
        if (err) {
            return res.status(500).send(err);
        res.json
        }
        
}