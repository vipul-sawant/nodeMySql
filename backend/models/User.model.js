// models/User.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export { User };
