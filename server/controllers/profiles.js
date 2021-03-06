const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  models.Profile.fetchAll()
    .then(profiles => {
      res.status(200).send(profiles);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};

// module.exports.create = (req, res) => {
//   models.Profile.forge({ username: req.body.username, password: req.body.password })
//     .save()
//     .then(result => {
//       res.status(201).send(result.omit('password'));
//     })
//     .catch(err => {
//       if (err.constraint === 'users_username_unique') {
//         return res.status(403);
//       }
//       res.status(500).send(err);
//     });
// };

module.exports.getOne = (req, res) => {
  models.Profile.where({ id: req.params.id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      res.status(200).send(profile);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch((error) => {
      res.sendStatus(404);
    });
};

module.exports.update = (req, res) => {
  models.Profile.where({ id: req.params.id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      return profile.save(req.body, { method: 'update' });
    })
    .then((data) => {
      res.sendStatus(201);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch((error) => {
      res.sendStatus(404);
    });
};

module.exports.getProfile = (profileID, requestID) => {

  //get profile for profile ID
  let returnObj = {};
  Number(profileID) === Number(requestID) ? returnObj.isOwnProfile = true : returnObj.isOwnProfile = false;

  return models.Profile.ProfileQueries.getProfileData(profileID)
    .then ((profileData) => {
      
      returnObj.profile = profileData.rows[0];

      return models.Profile.ProfileQueries.getPhotosForProfile(profileID);
    })
    .then((data) => {
      returnObj.photos = data.rows;
      
      return models.Follower.FollowersQueries.checkIfFollowed(requestID, profileID);
    })
    .then((data) => {
      data.rows.length > 0 ? returnObj.isFollowed = true : returnObj.isFollowed = false;


      return returnObj;
    });
    
  //get photos for profile

  //check if profile is profile requesting

};

// module.exports.deleteOne = (req, res) => {
//   models.Profile.where({ id: req.params.id }).fetch()
//     .then(profile => {
//       if (!profile) {
//         throw profile;
//       }
//       return profile.destroy();
//     })
//     .then(() => {
//       res.sendStatus(200);
//     })
//     .error(err => {
//       res.status(503).send(err);
//     })
//     .catch(() => {
//       res.sendStatus(404);
//     });
// };
