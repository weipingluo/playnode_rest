'use strict';


var mongoose = require('mongoose'),
  MenuItem = mongoose.model('MenuItems');

exports.list_all_items = function(req, res) {
    MenuItem.find({}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};




exports.create_an_item = function(req, res) {
  var new_item = new MenuItem(req.body);
  new_item.save(function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};


exports.read_an_item = function(req, res) {
    MenuItem.findById(req.params.itemId, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};


exports.update_an_item = function(req, res) {
    MenuItem.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};


exports.delete_an_item = function(req, res) {


  Item.remove({
    _id: req.params.itemId
  }, function(err, item) {
    if (err)
      res.send(err);
    res.json({ message: 'MenuItem successfully deleted' });
  });
};