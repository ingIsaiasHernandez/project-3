const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Answers = db.define('answers', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
    content: {
        type: DataTypes.TEXT,
        allowNull: false
        
    },
    author: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'post_id'
    },
    createdId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'created_id'
    },
        
},{timestamps: true,
    updatedAt: false});

module.exports =  Answers;