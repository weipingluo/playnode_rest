'use strict';
module.exports = function(app) {
  var menuItem = require('../controllers/menuItemController');

  // Routes
  app.route('/menuitems')
    .get(menuItem.list_all_items)
    .post(menuItem.create_an_item);


  app.route('/menuitems/:itemId')
    .get(menuItem.read_an_item)
    .put(menuItem.update_an_item)
    .delete(menuItem.delete_an_item);
};