'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    user_phone: DataTypes.STRING,
    delivery_address: DataTypes.TEXT,
    restaurant_id: DataTypes.INTEGER,
    restaurant_user: DataTypes.STRING,
    status: DataTypes.STRING,
    total_price: DataTypes.DOUBLE
  }, {});
  Order.associate = function (models) {
    // associations can be defined here
    Order.hasMany(models.Product_Order, { foreignKey: 'order_id' });
    Order.belongsTo(models.Restaurant, { foreignKey: 'restaurant_id' });
  };
  return Order;
};