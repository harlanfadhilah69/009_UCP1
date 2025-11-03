module.exports = (sequelize, DataTypes) => {
    const music = sequelize.define("music", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama:{
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING
    },
    TahunTerbit: {
        type: DataTypes.DATE
    },
    genre: {
        type: DataTypes.STRING
    }
 });
 return music;
};