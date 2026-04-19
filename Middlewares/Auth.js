import jwt from "jsonwebtoken"
import { User } from "../Models/User.js"

export const isAuthenticated = async (req, res, next) => {

    try {

        const token = req.header("Auth")

        console.log("TOKEN:", token) // debug line

        if (!token) {
            return res.json({ message: "Login First" })
        }

        const decoded = jwt.verify(token, process.env.JWT)

        const id = decoded.id

        const user = await User.findById(id)

        if (!user) {
            return res.json({ message: "User not found" })
        }

        req.user = user

        next()

    } catch (error) {
        console.log("AUTH ERROR:", error)
        res.status(401).json({ message: "Invalid Token" })
    }
}