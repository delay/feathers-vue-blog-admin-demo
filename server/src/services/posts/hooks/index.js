'use strict';

const author = require('./author');

const updatedAt = require('./updatedAt');

const createdAt = require('./createdAt');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;


exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [auth.restrictToRoles({roles: ['admin', 'editor']/*,
    fieldName: 'permissions',
    idField: 'id',
    ownerField: 'sentBy',
    owner: true*/
  }),
    createdAt(), updatedAt(), author()],
  update: [updatedAt(auth.restrictToRoles({roles: ['admin', 'editor']}))],
  patch: [updatedAt()],
  remove: [auth.restrictToRoles({roles: ['admin', 'editor']})]
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
