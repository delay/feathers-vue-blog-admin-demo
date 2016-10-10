'use strict';

const assert = require('assert');
const createdAt = require('../../../../src/services/posts/hooks/createdAt.js');

describe('posts createdAt hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    createdAt()(mockHook);

    assert.ok(mockHook.createdAt);
  });
});
