import express from "express";
import { register, login, logout } from "../controllers/auth.js";
import { UserSchema, LocationSchema } from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

//REGISTER

router.post("/register", async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUserSchema = new UserSchema({
            username: req.body.username,
            email: req.body.email.email,
            password: req.body.hashedPass,
        })

        const user = await newUserSchema.save();
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
});


//LOGIN<-->LOGOUT
router.post("/login", async (req, res) => {
  try {
    const user = await UserSchema.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/logout", logout);
//todo

//module.exports = router;
export default router;