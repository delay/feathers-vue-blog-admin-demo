'use strict';

const assert = require('assert');
const author = require('../../../../src/services/posts/hooks/author.js');

describe('posts author hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    author()(mockHook);

    assert.ok(mockHook.author);
  });
});
