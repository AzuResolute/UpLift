const User = require('./user')
const Goal = require('./goal')

Goal.belongsTo(User)
Goal.belongsToMany(Goal, {as: 'sub-goals', through: 'goal_sub-goal'})
User.hasMany(Goal)

// Pug.belongsToMany(Pug, {as: 'friends', through: 'pug_friend'})
// Product.belongsTo(Category, {foreignKey: 'CategoryID'});
// Category.hasMany(Product);
// Order.belongsToMany(Product, {through: OrderDetails, foreignKey: 'OrderID'});
// Product.belongsToMany(Order, {through: OrderDetails, foreignKey: 'ProductID'});
// Order.belongsTo(Customer, {foreignKey: 'CustomerID'});
// Customer.hasMany(Order);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User, Goal
}
