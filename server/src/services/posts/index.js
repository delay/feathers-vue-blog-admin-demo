'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'posts.db'),
    autoload: true
  });

  let options = {
    Model: db,
    paginate: {
      default: 30,
      max: 100
    }
  };

  // Initialize our service with any options it requires
  app.use('/posts', service(options));

  // Get our initialize service to that we can bind hooks
  const postsService = app.service('/posts');

  // Set up our before hooks
  postsService.before(hooks.before);

  // Set up our after hooks
  postsService.after(hooks.after);
};
