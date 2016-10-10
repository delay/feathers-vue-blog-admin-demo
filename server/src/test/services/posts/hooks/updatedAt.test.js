'use strict';

const assert = require('assert');
const updatedAt = require('../../../../src/services/posts/hooks/updatedAt.js');

describe('posts updatedAt hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    updatedAt()(mockHook);

    assert.ok(mockHook.updatedAt);
  });
});
