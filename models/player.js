'use strict';
module.exports = (sequelize, DataTypes) => {
  var player = sequelize.define('player', {
    name: DataTypes.STRING
  }, {});
  player.associate = function(models) {
    // associations can be defined here
    player.belongsToMany(models.item, {through: 'playerItems', foreignKey: 'playerId'});
  };
  return player;
};