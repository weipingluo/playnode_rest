'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuItemSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the menu item'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['available', 'not_available']
    }],
    default: ['available']
  },
  price: String
});

module.exports = mongoose.model('MenuItems', MenuItemSchema);