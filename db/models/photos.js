const db = require('../');
const knex = require('../knex.js');

const Photo = db.Model.extend({
  tableName: 'photos',
  profile: function() {
    return this.belongsTo('profile');
  }
});

class PhotoQueries {


  getPhotoLikesForUser(userID) {
    let query = `select * from likes where profile_id = ${userID}`;

    return knex.raw(query);
  }

  getPhotos(numOfPhotos = 20) {
    let query = `select *, age(current_date + current_time, created_at) as "age" from photos order by created_at desc limit ${numOfPhotos};`;

    return knex.raw(query);
  }

}


module.exports = db.model('Photo', Photo);
module.exports.PhotoQueries = new PhotoQueries();
