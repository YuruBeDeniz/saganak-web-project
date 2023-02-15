const router = require("express").Router();
const { isAuthenticated } = require("../middlewares/jwt");
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

router.get('/verify', isAuthenticated, (req, res, next) => {
    res.status(200).json(req.payload);
});

router.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

    if(name === "" || email === "" || password === "") {
      res.status(400).json({ message: "Provide name, email and password" });
      return;
    };

    if(password.length < 4) {
        res.status(400).json({ message: "Password has to be 4 chars min" });
        return;
    };

    User.findOne({ email })
      .then(foundUser => {
        if(foundUser) {
            res.status(400).json({ message: "User already exist"});
            return;
        }
      })

      const salt = bcrypt.genSaltSync();
      const hashedPassword = bcrypt.hashSync(password, salt);

      //burada name, email ve password isimleri User.modeldeki propertiler ile birebir aynı olmalı,
      //o yüzden hashedPassword ismini password olarak güncelliyoruz
      //daha sonra createdUserdan destructuring ile name, email, password ü
      //user variable i ile response a göndermek istediğimiz bilgileri gönderiyoruz
      return User.create({ name, email, password: hashedPassword})
                .then(createdUser => {
                    const { name, email, password } = createdUser;
                    const user = { name, email, password};
                    res.status(201).json({ user: user });
                    console.log("user: ", user)
                })
                .catch(err => {
                    console.log(err);
                    req.status.json({ message: "Internal Server Error"})
                })
});

router.post("/login", (req, res) => {
    const { name, password } = req.body;
    if (name === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." });
        return;
    };

    User.findOne({ name })
      .then((foundUser) => {
        if(!foundUser) {
            res.status(401).json({ message: "User not found."})
        }

        const passwordCorrect = bcrypt.compareSync(password, foundUser.password);
        if(passwordCorrect) {
            const { name, _id } = foundUser;
            //burada _id'yi daha sonra routing vs frontendde kullanmak üzere destructure ediyoruz

            const payload = { _id, name };

            const authToken = jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {algorithm: 'HS256', expiresIn: '24h'}
            );

            res.status(200).json({ authToken: authToken, userId: _id });
        } else {
            res.status(401).json({ message: 'Unable to authenticate the user' })
        }
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({message: 'Internal Server Error'})
    });
})

module.exports = router;