import express from "express";
import { register, login, logout } from "../controllers/auth.js";
import { UserSchema, LocationSchema } from "../models/User.js";



const router = express.Router();

//REGISTER

router.post("/register", async (req, res) => {
    try{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email.email,
            password: req.body.password,
        })

        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
});


//LOGIN<-->LOGOUT
router.post("/login", login);
router.post("/logout", logout);

//module.exports = router;
export default router;
