const express = require('express');

const People = require('../people/people-model.js');

const server = express();

server.use(express.json());

// server.get("/", (req, res) => {
//   res.status(200).json({ api: "up" });
// });

server.get('/people', (req, res) => {
  People.getAll()
    .then((people) => {
      res.status(200).json(people);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

server.post('/people', (req, res) => {
  const newPerson = req.body;

  People.add(newPerson)
    .then((person) => {
      console.log('a new person was added', person);
      res.status(201).json(person);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Error adding person to database', err });
    });
});

server.delete('/people/:id', (req, res) => {
  const { id } = req.params;

  People.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: 'Could not find scheme with given id' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to delete scheme' });
    });
});

module.exports = server;