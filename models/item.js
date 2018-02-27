'use strict';
module.exports = (sequelize, DataTypes) => {
  var item = sequelize.define('item', {
    value: DataTypes.STRING
  }, {});
  item.associate = function(models) {
    // associations can be defined here
    item.belongsToMany(models.player, {through: 'playerItems',foreignKey: 'itemId'});
  };
  return item;
};