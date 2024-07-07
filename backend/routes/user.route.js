import { sequelize } from "../database/db.js";

sequelize.sync()
.then(() => {
    console.log('Database and tables synced');
})
.catch(err => {
    console.error('Error syncing database:', err);
});

import { User } from "../models/User.model.js";
import express from "express";

const router = express.Router();

router.post("/create-user", (req, res) => {
    console.log("hit")
    const { username } = req.body;
    
    const newUser = User.create({
        username
      });
    res.status(201).json(newUser);
});

export default router ;
