/* eslint-disable no-restricted-syntax */
const userDataAccess = require("../models/userDataAccess");
const { hashPassword, verifyPassword } = require("../helpers/argonHelper");

exports.addOne = async (req, res) => {
  const { password, email } = req.body;

  userDataAccess.findByEmail(email).then((user) => {
    if (user) {
      return res.status(500).send("This email alredy exist");
    }
    return hashPassword(password)
      .then((hash) => {
        userDataAccess
          .createOne({
            ...req.body,
            password: hash,
          })
          .then((newUser) => console.error(newUser))
          .then(() => res.status(201).json({ ...req.body }))
          .catch((err) => {
            res.status(500).send({ err });
          });
      })
      .catch((err) => res.status(500).send({ err }));
  });
};

exports.getOne = (req, res) => {
  const userId = parseInt(req.params.id, 10);

  userDataAccess
    .findOne(userId)
    .then((user) => {
      if (user.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(user);
      }
    })
    .catch((err) => res.status(500).send(err));
};

exports.checkRoleAdmin = (req, res) => {
  const userId = parseInt(req.params.id, 10);

  userDataAccess
    .findOne(userId)
    .then((user) => {
      if (user.role !== "admin") {
        res.sendStatus(403);
      } else {
        res.send(user);
      }
    })
    .catch((err) => res.status(500).send(err));
};

exports.getAll = (req, res) => {
  userDataAccess
    .findAll()
    .then((users) => res.send(users))
    .catch((err) => res.status(500).send(err));
};

exports.getAllExcel = (req, res) => {
  userDataAccess
    .findAllExcel()
    .then((users) => res.send(users))
    .catch((err) => res.status(500).send(err));
};

exports.deleteOne = (req, res) => {
  const userId = parseInt(req.params.id, 10);

  userDataAccess
    .removeOne(userId)
    .then((deleteUser) => res.send(deleteUser))
    .catch((err) => res.status(500).send(err));
};

exports.updateOne = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { password, newPassword, firstname, lastname, email } = req.body;

  userDataAccess.findOne(userId).then((user) => {
    if (!user) {
      res.status(401).send("Invalid credentials");
    }
    if (password && newPassword) {
      verifyPassword(password, user.password).then((verification) => {
        if (verification) {
          hashPassword(newPassword)
            .then((hash) => {
              userDataAccess
                .modifyOne(userId, {
                  firstname,
                  lastname,
                  email,
                  password: hash,
                })
                .then((info) => console.error(info))
                .then((info) => res.status(201).json(info))
                .catch((err) => res.status(300).send({ err }));
            })
            .catch((err) => res.status(500).send({ err }));
        }
      });
    } else {
      userDataAccess
        .modifyOne(userId, { ...req.body })
        .then((info) => console.error(info))
        .then((info) => res.status(201).json(info))
        .catch((err) => res.status(300).send({ err }));
    }
  });
};
