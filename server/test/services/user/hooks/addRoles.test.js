'use strict';

const assert = require('assert');
const addRoles = require('../../../../src/services/user/hooks/addRoles.js');

describe('user addRoles hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    addRoles()(mockHook);

    assert.ok(mockHook.addRoles);
  });
});
