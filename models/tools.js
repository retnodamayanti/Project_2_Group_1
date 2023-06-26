const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tools extends Model {}

Tools.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stock_id: {
            type: DataTypes.INTEGER,
            allowNull: false,            
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'tools'

    }
)

module.exports = Tools;