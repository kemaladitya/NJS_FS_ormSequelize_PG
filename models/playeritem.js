'use strict';
module.exports = (sequelize, DataTypes) => {
  var playerItem = sequelize.define('playerItem', {
    playerId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {});
  playerItem.associate = function(models) {
    // associations can be defined here
  //  playerItem.hasMany(models.item,{foreignKey:"itemId"})
  //  playerItem.hasMany(models.player,{foreignKey:"playerId"})
  };
  return playerItem;
};