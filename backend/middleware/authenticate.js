import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ msg: "Token is missing" });

    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ msg: "Token is invalid" });
        req.user = user;
        next();
    });
};