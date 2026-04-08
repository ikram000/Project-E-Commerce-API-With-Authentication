import { User } from "../Models/User.js"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";

//user register
export const register = async (req, res) => {
    const { name, email, password } = req.body

    let user = await User.findOne({ email });
    if (user) return res.json({ message: "User already register", success: false })


    const hashPassword = await bcrypt.hash(password, 10);

    user = await User.create({
        name,
        email,
        password: hashPassword
    });
    res.json({ message: "User register Successfully...!", user, success: true });
};

// user login

export const login = async (req, res) => {
    const { email, password } = req.body

    let user = await User.findOne({ email });
    if (!user) return res.json ({ message: "user not exit", success: false })

    const validPass = await bcrypt.compare(password, user.password)

    if (!validPass) return res.json({ message: "invalid Password", success: false })

    const token = jwt.sign({ userId:user._id },process.env.JWT, { expiresIn: '1d' })


    res.json({ message: `welcome ${user.name}`, token, success:true })
};