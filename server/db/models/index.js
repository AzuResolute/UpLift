const User = require('./user')
const Goal = require('./goal')

Goal.belongsTo(User)
User.hasMany(Goal)

Goal.belongsTo(Goal, {foreignKey: 'parentGoalId'})
Goal.hasMany(Goal, {as: 'milestone', foreignKey: 'parentGoalId'})


// Pug.belongsToMany(Pug, {as: 'friends', through: 'pug_friend'})
// Product.belongsTo(Category, {foreignKey: 'CategoryID'});
// Category.hasMany(Product);
// Order.belongsToMany(Product, {through: OrderDetails, foreignKey: 'OrderID'});
// Product.belongsToMany(Order, {through: OrderDetails, foreignKey: 'ProductID'});
// Order.belongsTo(Customer, {foreignKey: 'CustomerID'});
// Customer.hasMany(Order);

module.exports = {
  User, Goal
}
