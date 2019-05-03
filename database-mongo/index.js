/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mvp', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const postSchema = mongoose.Schema({
  name: String,
  class: String,
  type: String,
  boss: Array,
  cost: {
    costOfLivingIndex: Number,
    rentIndex: Number,
    costOfLivingPlusIndex: Number,
    groceriesIndex: Number,
    restaurantPriceIndex: Number,
    localPurchasePowerIndex: Number
  },
  lat: Number,
  lng: Number
});


const postModel = mongoose.model('Post', postSchema);


let selectAll = () => {
  return new Promise((resolve, reject) => {
    postModel.find({}, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};


module.exports.db = db;
module.exports.postModel = postModel;
module.exports.selectAll = selectAll;